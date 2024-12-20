"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "../UI/SearchBar";
import Dropdown from "../UI/Dropdown";
import { MdDashboardCustomize } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAutoGraph } from "react-icons/md";
import { WiStars } from "react-icons/wi";
import { IoTrendingUpOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { PiStarThin } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import Card from "./Card";
import Logo from "@/assets/img/logo.png";
import {
  contractAddress,
  readContractHelper,
} from "@/helperFile/helperFunction";
import { Bounce, toast } from "react-toastify";
import { useAccount } from "wagmi";
import Loader from "../Loader/Loader";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { abi } from "@/helperFile/contractAbis";

interface QuestionsProps {
  pollImageUrl: string;
  question: string;
  options: [any];
  pollId: string;
}

const DasboardComp = () => {
  const { address } = useAccount();
  const [questions, setQuestion] = useState<QuestionsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentFilter, setCurrentFilter] = useState<string>("New");
  const [hasInitialData, setHasInitialData] = useState<boolean>(false);

  const handleSearch = (value: string) => {
    console.log(value);
  };

  const handleOptionSelect = (label: string) => {
    setCurrentFilter(label);
    console.log(`Selected option: ${label}`);
    if (label === "End") {
      fetchEndData();
    } else if (label === "New") {
      dataFetch();
    } else if (label === "Trending") {
      console.log("Trending functionality not yet implemented");
    }
  };

  const dropdownOptions = [
    {
      label: "New",
      icon: <WiStars className="h-5 w-5 text-black" />,
    },
    {
      label: "Trending",
      icon: <IoTrendingUpOutline className="h-5 w-5 text-black" />,
    },
    {
      label: "End",
      icon: <CiClock2 className="h-5 w-5 text-black" />,
    },
  ];

  const publicClient = createPublicClient({
    chain: mainnet,
    transport: http("https://rpc-amoy.polygon.technology/"),
  });

  const dataFetch = async () => {
    setLoading(true);
    try {
      const result = await publicClient.readContract({
        address: contractAddress,
        abi: abi,
        functionName: "getAllActivePolls",
      });

      setQuestion(result as QuestionsProps[]);
      if ((result as QuestionsProps[]).length > 0) {
        setHasInitialData(true);
      }
      console.log("getAllActivePolls", result);
    } catch (error) {
      console.log("error", error);
      setQuestion([]);
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

  const fetchEndData = async () => {
    setLoading(true);
    try {
      const result = await publicClient.readContract({
        address: contractAddress,
        abi: abi,
        functionName: "endPoll",
      });

      setQuestion(result as QuestionsProps[]);
      console.log("endPoll", result);
    } catch (error) {
      console.log("error", error);
      setQuestion([]);
      if (!hasInitialData) {
        toast.error("Error while fetching end polls.", {
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
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentFilter === "End") {
      fetchEndData();
    } else if (currentFilter === "New") {
      dataFetch();
    }
  }, [currentFilter]);

  return (
    <>
      <div className="flex gap-2 items-center flex-wrap sm:flex-nowrap">
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search by markets"
          className="w-full"
        />
        <div>
          <Dropdown
            options={dropdownOptions}
            label="Actions"
            onSelect={handleOptionSelect}
          />
        </div>
        <div className=" rounded-lg p-2 flex items-center justify-center cursor-pointer hover:bg-light-background2 dark:hover:bg-dark-background2 border border-gray-400 dark:border-gray-400">
          <FaRegStar className="h-6 w-6 text-gray-600 dark:text-gray-200" />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {questions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
              {questions.map((question, index) => (
                <Card
                  key={index}
                  imageUrl={question?.pollImageUrl}
                  question={question?.question}
                  options={question.options.map((option, index) => ({
                    text: option,
                    optionId: index,
                  }))}
                  id={question.pollId}
                />
              ))}
            </div>
          ) : (
            <div className=" text-gray-500 flex justify-center items-center h-[80vh] text-2xl font-bold dark:text-gray-300">
              No data available for this filter.
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DasboardComp;
