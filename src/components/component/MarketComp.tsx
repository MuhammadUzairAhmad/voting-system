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

const MarketComp = () => {
  const searchParams = useSearchParams();
  const questionId = searchParams.get("id");
  const selectedOption = searchParams.get("option");
  const [loading, setLoading] = useState<boolean>(false);

  const [data, setData] = useState<PollData>({});
  const [selectedKey, setSelectedKey] = useState<string | null>(
    selectedOption || "0"
  );

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
      const amount=await voteAmount();
      console.log("amount",amount)
      const approve=await approveToken(amount,tokenAddress,address,config);
      const result = await writeContractHelper("vote", [
        questionId,
        selectedKey,
      ]);
      if (result) {
        console.log("result");
      }
      // console.log("sdsf",selectedKey)
    } catch (error) {
      console.error("error", error);
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
  console.log("myVotemyVote", myVotevalue);

  const publicClient = createPublicClient({
    chain: mainnet,
    transport: http("https://rpc-amoy.polygon.technology/"),
  });

  const fetchDataByID = async () => {
    setLoading(true);
    try {
      // console.log("questionId", questionId);

      const result: any = await publicClient.readContract({
        address: contractAddress,
        abi: abi,
        functionName: "getPoll",
        args: [questionId],
      });

      // const result : any = await readContractHelper("getPoll", [questionId]);
      console.log("getPoll", result);
      console.log("getPoll", result?.myVote);
      if (Number(result?.myVote) > 0) {
        const newValue = Number(result?.myVote) - 1;
        setSelectedKey(newValue.toString());
      }
      setData(result as PollData);
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
  }, [questionId]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleCountdownEnd = () => {
    setIsButtonDisabled(true); // Disable the button when countdown ends
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex gap-2 w-full mt-8">
          {/* Left side */}
          <div className="lg:w-2/3 w-full">
            <div className="flex gap-2 items-center relative">
              {data?.pollImageUrl && (
                <div className="relative rounded-md overflow-hidden">
                  <Image
                    src={data?.pollImageUrl}
                    alt="question"
                    width={60}
                    height={60}
                    className="object-cover bg-gray-200 dark:bg-gray-600"
                  />
                </div>
              )}
              <div className="flex justify-between w-full items-center ">
                <h3 className=" text-lg md:text-2xl font-bold text-light-text dark:text-dark-text">
                  {data?.question}
                </h3>
                <div className="hidden md:flex">
                  <CountdownTimer
                    endDateInSeconds={Number(data?.deadline)}
                    onCountdownEnd={handleCountdownEnd}
                  />
                </div>
              </div>
            </div>
            <div className="w-full my-2 justify-center flex md:hidden">
              <CountdownTimer
                endDateInSeconds={Number(data?.deadline)}
                onCountdownEnd={handleCountdownEnd}
              />
            </div>
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
                      className="text-white bg-light-bluetext w-full dark:bg-dark-bluetext hover:bg-opacity-80 dark:hover:bg-opacity-80 text-md font-semibold px-4 py-2 rounded-md cursor-pointer"
                      onClick={handleVote}
                      disabled={Number(data?.myVote) > 0}
                    >
                      Vote
                    </button>
                  )
                ) : (
                  <Button variant="blue" width="w-full" onClick={handleOpen}>
                    Log In To Vote
                  </Button>
                )}
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
