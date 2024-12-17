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
import { readContractHelper } from "@/helperFile/helperFunction";
import { Bounce, toast } from "react-toastify";
import { useAccount } from "wagmi";


interface QuestionsProps {
  pollImageUrl: string;
  question: string;
  options: [any];
  pollId: string;
}

const DasboardComp = () => {
  const { address } = useAccount();

  const [questions, setQuestion] = useState<QuestionsProps[]>([]);

  const handleSearch = (value: string) => {
    console.log(value);
  };
  const handleOptionSelect = (label: string) => {
    console.log(`Selected option: ${label}`);
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
      label: "Ending Soon",
      icon: <CiClock2 className="h-5 w-5 text-black" />,
    },
  ];

  // const questions = [
  //   {
  //     imageUrl: Logo.src,
  //     question: "Who will win the 2024 US Presidential Election?",
  //     options: [
  //       { text: "Joe Biden" },
  //       { text: "Donald Trump" },
  //       { text: "Other" },
  //     ],
  //     id: "us-election",
  //   },
  // ];

  const dataFetch = async () => {
    try {
      const result = await readContractHelper("getAllActivePolls");
      setQuestion(result as QuestionsProps[])
      console.log("getAllActivePolls", result);
    } catch (error) {
      console.log("error", error);
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
    }
  };

  useEffect(() => {
    if(address){
      dataFetch();
    }
  }, [address]);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
        {questions.map((question, index) => (
          <Card
            key={index}
            imageUrl={question?.pollImageUrl}
            question={question?.question}
            options={question.options.map((option , index) => ({ text: option , optionId : index }))}
            id={question.pollId}
          />
        ))}
      </div>
    </>
  );
};

export default DasboardComp;
