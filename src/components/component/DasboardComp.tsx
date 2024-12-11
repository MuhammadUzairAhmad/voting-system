"use client";
import React from "react";
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

const DasboardComp = () => {
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

  const questions = [
    {
      imageUrl: Logo.src,
      question: "Will Bitcoin reach $100k by the end of 2024?",
      isYesNo: true,
      volume: "54",
    //   timeFrame: "weekly",
      reward: 100,
      link: "/market/bitcoin-100k"
    },
    {
      imageUrl: Logo.src,
      question: "Who will win the 2024 US Presidential Election?",
      options: [
        { text: "Joe Biden", link: "/path1" },
        { text: "Donald Trump", link: "/path2" },
        { text: "Other", link: "/path3" },
      ],
      volume: "128",
    //   timeFrame: "monthly",
      reward: 250,
      link: "/market/us-election"
    },
    {
      imageUrl: Logo.src,
      question: "Will Ethereum merge to PoS in 2024?",
      isYesNo: true,
      volume: "89",
    //   timeFrame: "monthly",
      reward: 150,
      link: "/market/eth-pos"
    },
    {
      imageUrl: Logo.src,
      question: "Which team will win FIFA World Cup 2026?",
      options: [
        { text: "Brazil", link: "/path1" },
        { text: "Argentina", link: "/path2" },
        { text: "France", link: "/path3" },
        { text: "Germany", link: "/path4" },
      ],
      volume: "256",
    //   timeFrame: "yearly",
      reward: 500,
      link: "/market/fifa-2026"
    },
    {
      imageUrl: Logo.src,
      question: "Will SpaceX successfully land on Mars by 2025?",
      isYesNo: true,
      volume: "76",
    //   timeFrame: "yearly",
      reward: 300,
      link: "/market/spacex-mars"
    },
    {
      imageUrl: Logo.src,
      question: "Which AI company will have the highest market cap in 2024?",
      options: [
        { text: "OpenAI", link: "/path1" },
        { text: "Google AI", link: "/path2" },
        { text: "Anthropic", link: "/path3" },
        { text: "Microsoft AI", link: "/path4" },
      ],
      volume: "167",
    //   timeFrame: "monthly",
      reward: 200,
      link: "/market/ai-market-cap"
    },
    {
      imageUrl: Logo.src,
      question: "Will Apple release a foldable iPhone in 2024?",
      isYesNo: true,
      volume: "92",
    //   timeFrame: "monthly",
      reward: 175,
      link: "/market/apple-foldable"
    },
    {
      imageUrl: Logo.src,
      question: "Which cryptocurrency will have the highest growth in 2024?",
      options: [
        { text: "Bitcoin", link: "/path1" },
        { text: "Ethereum", link: "/path2" },
        { text: "Solana", link: "/path3" },
        { text: "XRP", link: "/path4" },
      ],
      volume: "312",
    //   timeFrame: "yearly",
      reward: 400,
      link: "/market/crypto-growth"
    },
    {
      imageUrl: Logo.src,
      question: "Will Meta launch its decentralized social network in 2024?",
      isYesNo: true,
      volume: "45",
    //   timeFrame: "monthly",
      reward: 150,
      link: "/market/meta-social"
    },
    {
      imageUrl: Logo.src,
      question: "Which gaming console will have the highest sales in 2024?",
      options: [
        { text: "PlayStation 5", link: "/path1" },
        { text: "Xbox Series X", link: "/path2" },
        { text: "Nintendo Switch 2", link: "/path3" },
      ],
      volume: "234",
    //   timeFrame: "yearly",
      reward: 275,
      link: "/market/gaming-console"
    }
  ];

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
            imageUrl={question.imageUrl}
            question={question.question}
            isYesNo={question.isYesNo}
            options={question.options}
            volume={question.volume}
            reward={question.reward}
            link={question.link}
          />
        ))}
      </div>
    </>
  );
};

export default DasboardComp;
