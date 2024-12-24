"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "../UI/SearchBar";
import Dropdown from "../UI/Dropdown";
// import { MdDashboardCustomize } from "react-icons/md";
// import { LuLayoutDashboard } from "react-icons/lu";
// import { MdAutoGraph } from "react-icons/md";
import { WiStars } from "react-icons/wi";
import { IoTrendingUpOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
// import { PiStarThin } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import Card from "./Card";
// import Logo from "@/assets/img/logo.png";
import { contractAddress } from "@/helperFile/helperFunction";
import { Bounce, toast } from "react-toastify";
// import { useAccount } from "wagmi";
import Loader from "../Loader/Loader";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { abi } from "@/helperFile/contractAbis";
import { useSearchParams } from "next/navigation";

interface QuestionsProps {
  pollImageUrl: string;
  question: string;
  options: [any];
  pollId: string;
}

const DasboardComp = () => {
  const [questions, setQuestion] = useState<QuestionsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentFilter, setCurrentFilter] = useState<string>("New");
  const [hasInitialData, setHasInitialData] = useState<boolean>(false);
  const [holdData, setHoldData] = useState<QuestionsProps[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(2);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchParams = useSearchParams();

  const filter = searchParams.get("filter");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filteredData = holdData.filter((question) =>
      question.question.toLowerCase().includes(value.toLowerCase())
    );
    setQuestion(filteredData.slice(0, visibleCount));
  };

  const handleOptionSelect = (label: string) => {
    setCurrentFilter(label);
    setVisibleCount(2);
    setSearchTerm("");
    if (label === "End") {
      fetchEndData();
    } else if (label === "New") {
      dataFetch();
    } 
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const dropdownOptions = [
    {
      label: "New",
      icon: <WiStars className="h-5 w-5 text-black" />,
    },
    {
      label: "End",
      icon: <CiClock2 className="h-5 w-5 text-black" />,
    },
  ];

  const publicClient = createPublicClient({
    chain: mainnet,
    transport: http("https://rpc.testnet.fantom.network/"),
  });

  const dataFetch = async () => {
    setLoading(true);
    try {
      const result = await publicClient.readContract({
        address: contractAddress,
        abi: abi,
        functionName: "getAllActivePolls",
        args: ["0x0000000000000000000000000000000000000000"],
      });

      const data = result as QuestionsProps[];
      // console.log("data", data);
      setHoldData(data);
      setQuestion(data.slice(0, visibleCount));
      if (data.length > 0) {
        setHasInitialData(true);
      }
    } catch (error) {
      console.error("error", error);
      setHoldData([]);
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
        functionName: "getAllEndedPollDetails",
        args: ["0x0000000000000000000000000000000000000000"],
      });
      // console.log("resulffgfdgfdgt",result)
      if (result) {
        const data = result as QuestionsProps[];
        setHoldData(data);
        setQuestion(data.slice(0, visibleCount));
      }
    } catch (error) {
      console.error("error", error);
      setHoldData([]);
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
    if (currentFilter === "End" || filter === "End") {
      fetchEndData();
    } else if (currentFilter === "New" || filter === "New") {
      dataFetch();
    }
  }, [currentFilter, filter]);

  useEffect(() => {
    if (searchTerm) {
      const filteredData = holdData.filter((question) =>
        question.question.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setQuestion(filteredData.slice(0, visibleCount));
    } else {
      setQuestion(holdData.slice(0, visibleCount));
    }
  }, [visibleCount, holdData, searchTerm]);

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
            <>
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
              {holdData.length > visibleCount && !searchTerm && (
                <div className="flex justify-center mt-4 mb-8">
                  <button
                    onClick={loadMore}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
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
