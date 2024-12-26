"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Logo from "@/assets/img/logo.png";
import { useAppKit } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import Button from "../UI/Button";
import { Bounce, toast } from "react-toastify";
import approveToken, {
  contractAddress,
  readContractHelper,
  // readContractHelper,
  tokenAddress,
  voteAmount,
  writeContractHelper,
} from "@/helperFile/helperFunction";
import CountdownTimer from "./CountdownTimer";
import Loader from "../Loader/Loader";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { abi } from "@/helperFile/contractAbis";
import { config } from "@/config";

interface PollData {
  deadline?: number | string;
  pollImageUrl?: string;
  myVote?: string | number;
  question?: string;
  options?: Record<string, string>;
}

interface OptionResult {
  index: number;
  percentage: number;
  option: string;
}

const MarketComp = () => {
  const searchParams = useSearchParams();
  const questionId = searchParams.get("id");
  const selectedOption = searchParams.get("option");
  const [loading, setLoading] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isPollEnd, setIsPollEnd] = useState<boolean>(false);
  const [percentages, setPercentages] = useState<OptionResult[]>([]);
  const [winner, setWinner] = useState<string | null>(null);
  const [noOfVoters, setNoOfVoters] = useState<number | null>(null);
  const [voteLoading, setVoteLoading] = useState<boolean>(false);
  const [isLogedData, setIsLogedData] = useState<boolean>(false);

  const [data, setData] = useState<PollData>({});
  const [selectedKey, setSelectedKey] = useState<string | null>(
    selectedOption || "0"
  );

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { open } = useAppKit();
  const { address } = useAccount();

  const handleOpen = () => {
    if (!address) {
      open();
    }
  };

  const handleOptionChange = (key: string) => {
    setSelectedKey(key);
  };

  const handleVote = async () => {
    setVoteLoading(true);
    try {
      if (!selectedKey) {
        // console.log("No option selected.");
        toast.error("No option selected.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return;
      }
      const amount = await voteAmount();
      // console.log("amount", amount);

      await approveToken(amount, tokenAddress, address, config);

      const result = await writeContractHelper("vote", [
        questionId,
        selectedKey,
      ]);
      if (result) {
        // console.log("result", result);
        fetchDataByID();
      }
    } catch (error) {
      console.error("error", error);
    } finally {
      setVoteLoading(false);
    }
  };

  let myVotevalue;
  if (address && (!data || !data?.myVote)) {
    const voteNumber = Number(data?.myVote);
    if (voteNumber > 0) {
      myVotevalue = voteNumber - 1;
      setSelectedKey(myVotevalue.toString());
    } else {
      myVotevalue = 0;
    }
  }
  // console.log("myVotemyVote", myVotevalue);

  // temp

  // Calculate percentages and determine the winner
  const calculateResults = (pollData: {
    optionVolume: any[];
    options: string[];
  }) => {
    const { optionVolume, options } = pollData;

    // Convert BigInt to number for calculations
    const votes = optionVolume.map((v) => Number(v));

    // Calculate the total votes
    const totalVotes = votes.reduce((acc, vote) => acc + vote, 0);

    // Avoid division by zero
    if (totalVotes === 0) {
      return {
        percentages: options.map((opt, idx) => ({
          index: idx,
          percentage: 0,
          option: opt,
        })),
        winner: null,
      };
    }

    // Calculate percentages for each option
    const percentages = votes.map((vote, idx) => ({
      index: idx,
      percentage: Number(((vote / totalVotes) * 100).toFixed(2)),
      option: options[idx],
    }));

    // Find the index of the winning option
    const maxPercentage = Math.max(...percentages.map((p) => p.percentage));
    const winningOptions = percentages.filter(
      (p) => p.percentage === maxPercentage
    );

    // Return results
    return {
      percentages,
      winner: winningOptions.length === 1 ? winningOptions[0].option : null,
    };
  };

  // Calculate and display results

  // temp

  const fetchDataByID = async () => {
    setLoading(true);

    try {
      if (address) {
        setIsLogedData(true);
        const isPollEnd = await readContractHelper("isPollEnded", [questionId]);
        // console.log("isPollEnded", isPollEnd);

        if (isPollEnd) {
          const result: any = await readContractHelper("getEndedPollById", [
            questionId,
            address,
          ]);
          // console.log("getPoll with address", result);
          // console.log("getPoll", result?.admin);
          if (result?.admin === address) {
            // console.log("admin");
            setIsAdmin(true);
          }
          if (result?.ended) {
            setIsPollEnd(true);
          }
          if (Number(result?.myVote) > 0) {
            const newValue = Number(result?.myVote) - 1;
            setSelectedKey(newValue.toString());
          }
          setData(result as PollData);

          const finalResult = calculateResults(result);
          setPercentages(finalResult.percentages);
          setNoOfVoters(Number(result?.noOfVoters));
          setWinner(finalResult.winner);
        } else {
          const result: any = await readContractHelper("getPoll", [
            questionId,
            address,
          ]);
          // console.log("getPoll with address", result);
          // console.log("getPoll", result?.admin);
          if (result?.admin === address) {
            // console.log("admin");
            setIsAdmin(true);
          }
          if (Number(result?.myVote) > 0) {
            const newValue = Number(result?.myVote) - 1;
            setSelectedKey(newValue.toString());
          }
          setNoOfVoters(Number(result?.noOfVoters));
          setData(result as PollData);
        }
      } else {
        setIsLogedData(false);
        const publicClient = createPublicClient({
          chain: mainnet,
          transport: http("https://rpc.testnet.fantom.network/"),
        });
        const result: any = await publicClient.readContract({
          address: contractAddress,
          abi: abi,
          functionName: "getPoll",
          args: [questionId, "0x0000000000000000000000000000000000000000"],
        });
        // console.log("getPoll without address", result);
        // console.log("getPoll", result?.myVote);
        if (Number(result?.myVote) > 0) {
          const newValue = Number(result?.myVote) - 1;
          setSelectedKey(newValue.toString());
        }
        setData(result as PollData);
      }
    } catch (error) {
      console.error("Error while fetching data by ID", error);
      toast.error("Error while fetching data.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (questionId) {
      fetchDataByID();
    }
    if (address) {
      fetchDataByID();
    }
  }, [questionId, address]);

  const handleCountdownEnd = () => {
    setIsButtonDisabled(true); // Disable the button when countdown ends
  };

  const [distributeLoading, setDistributeLoading] = useState<boolean>(false);

  const distributeFunds = async () => {
    setDistributeLoading(true);
    try {
      if (questionId) {
        const result = await writeContractHelper("endPoll", [questionId]);
        // console.log("result", result);
        if (result) {
          fetchDataByID();
        }
      }
    } catch (error) {
      console.error("Error while fetching data by ID", error);
    } finally {
      setDistributeLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex gap-2 w-full mt-8">
          {/* Left side */}
          <div className="lg:w-2/3 w-full">
            {isLogedData &&
            <div className="flex justify-end w-full items-center">
              <div className=" bg-red-500 px-2 py-1 rounded-md text-md my-4 font-semibold text-light-text dark:text-dark-text">
                Total Vote:{" "}
                {noOfVoters}
              </div>
            </div>
            }
            <div className="flex flex-col-reverse gap-4 sm:flex-row sm:gap-0 sm:justify-between w-full items-start">
              <div>
                {data?.pollImageUrl && (
                  <div className="relative rounded-md w-[60px] h-[60px] overflow-hidden">
                    <Image
                      src={data?.pollImageUrl}
                      alt="question"
                      width={60}
                      height={60}
                      className="object-cover bg-gray-200 dark:bg-gray-600"
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-2 w-full items-center">
                <CountdownTimer
                  endDateInSeconds={Number(data?.deadline)}
                  onCountdownEnd={handleCountdownEnd}
                />
                {!isPollEnd && isAdmin && isButtonDisabled && (
                  <button
                    className="text-white bg-light-bluetext dark:bg-dark-bluetext hover:bg-opacity-80 dark:hover:bg-opacity-80 text-md font-semibold px-4 py-2 rounded-md cursor-pointer"
                    onClick={distributeFunds}
                    disabled={distributeLoading}
                  >
                    {distributeLoading ? "Distributing..." : "Distribute Funds"}
                  </button>
                )}
              </div>
            </div>
            <h3 className=" my-2.5 text-lg md:text-2xl font-bold text-light-text dark:text-dark-text">
              {data?.question}
            </h3>
            <div className="h-[1px] w-full bg-gray-100 dark:bg-gray-600 my-3"></div>

            {/* Options */}
            <div className="flex flex-col gap-1 font-semibold">
              {data?.options &&
                Object.entries(data.options).map(([key, value]) => (
                  <div
                    key={key}
                    onClick={() => handleOptionChange(key)}
                    className={`flex justify-between items-center px-3 py-1 rounded-xl cursor-pointer 
                    ${
                      selectedKey === key
                        ? "bg-light-background2 dark:bg-dark-background2"
                        : ""
                    }`}
                  >
                    <span className="text-lg text-light-text dark:text-dark-text">
                      {value}
                    </span>
                    <span className="text-black dark:text-white flex justify-center items-center gap-2">
                      <input
                        type="radio"
                        name="vote-option"
                        value={key}
                        onChange={() => handleOptionChange(key)}
                        className="checked:bg-light-bluetext dark:bg-dark-bluetext h-4 w-4"
                        checked={selectedKey === key}
                      />
                    </span>
                  </div>
                ))}
            </div>

            {/* Multi-question */}
            <div className="h-[1px] w-full bg-gray-100 dark:bg-gray-600 my-3"></div>
            {isButtonDisabled ? (
              ""
            ) : (
              <>
                {address ? (
                  data && (
                    <button
                      className={`text-white w-full text-md font-semibold px-4 py-2 rounded-md cursor-pointer ${
                        Number(data?.myVote) > 0 || voteLoading
                          ? "bg-gray-400 dark:bg-gray-600"
                          : "bg-light-bluetext dark:bg-dark-bluetext hover:bg-opacity-80 dark:hover:bg-opacity-80"
                      }`}
                      onClick={handleVote}
                      disabled={Number(data?.myVote) > 0 || voteLoading}
                    >
                      {voteLoading ? "Voting..." : "Vote"}
                    </button>
                  )
                ) : (
                  <Button variant="blue" width="w-full" onClick={handleOpen}>
                    Log In To Vote
                  </Button>
                )}
              </>
            )}

            {isPollEnd && (
              <>
                  <h3 className="text-lg my-4 font-semibold text-light-text dark:text-dark-text">
                    Winner is:{" "}
                    <span className=" bg-green-500 text-sm text-white px-2 py-1 rounded-md">
                      {winner || "No winner"}
                    </span>
                  </h3>
                <div className="space-y-3 mt-4">
                  {percentages.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-light-text dark:text-dark-text">
                          {item.option}
                        </span>
                        <span className="text-sm font-medium text-light-text dark:text-dark-text">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded">
                        <div
                          className="h-4 bg-light-bluetext dark:bg-dark-bluetext rounded transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right side */}
          <div className="w-1/3 hidden lg:block">
            {/* Card */}
            {!address && (
              <div className="bg-light-background2 dark:bg-dark-background2 px-4 py-4 rounded-lg shadow-md overflow-hidden">
                <div className="flex gap-2 items-center justify-start md:justify-center relative pt-2">
                  <div className="overflow-hidden rounded-full relative">
                    <Image
                      src={Logo.src}
                      alt="question"
                      width={60}
                      height={60}
                      className="object-cover bg-gray-200 dark:bg-gray-600"
                    />
                  </div>
                  <h3 className="text-md font-semibold text-light-text dark:text-dark-text">
                    Will Bitcoin reach $100k by the end of 2024?
                  </h3>
                </div>
                <div className="h-[1px] w-full bg-gray-100 dark:bg-gray-600 my-3"></div>
                <div className="text-md text-center my-10 text-light-text2 dark:text-dark-text2">
                  Have fun after logging in and voting your opinions!
                </div>
                <div className="h-[1px] w-full bg-gray-100 dark:bg-gray-600 my-3"></div>
                <div>
                  <Button variant="blue" width="w-full" onClick={handleOpen}>
                    Log In To Vote
                  </Button>
                </div>
                <div className="text-sm text-center mt-3 text-light-text dark:text-dark-text">
                  By trading, you agree to the
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MarketComp;
