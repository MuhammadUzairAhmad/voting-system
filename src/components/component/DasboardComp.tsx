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
      id: "bitcoin-100k"
    },
    {
      imageUrl: Logo.src,
      question: "Who will win the 2024 US Presidential Election?",
      options: [
        { text: "Joe Biden" },
        { text: "Donald Trump" },
        { text: "Other" },
      ],
      id: "us-election"
    },
    {
      imageUrl: Logo.src,
      question: "Will Ethereum merge to PoS in 2024?",
      isYesNo: true,
      id: "eth-pos"
    },
    {
      imageUrl: Logo.src,
      question: "Which team will win FIFA World Cup 2026?",
      options: [
        { text: "Brazil" },
        { text: "Argentina" },
        { text: "France" },
        { text: "Germany" },
      ],
      // volume: "256",
      // reward: 500,
      id: "fifa-2026"
    },
    {
      imageUrl: Logo.src,
      question: "Will SpaceX successfully land on Mars by 2025?",
      isYesNo: true,
      id: "spacex-mars"
    },
    {
      imageUrl: Logo.src,
      question: "Which AI company will have the highest market cap in 2024?",
      options: [
        { text: "OpenAI" },
        { text: "Google AI" },
        { text: "Anthropic" },
        { text: "Microsoft AI" },
      ],
      id: "ai-market-cap"
    },
    {
      imageUrl: Logo.src,
      question: "Will Apple release a foldable iPhone in 2024?",
      isYesNo: true,
      id: "apple-foldable"
    },
    {
      imageUrl: Logo.src,
      question: "Which cryptocurrency will have the highest growth in 2024?",
      options: [
        { text: "Bitcoin" },
        { text: "Ethereum" },
        { text: "Solana" },
        { text: "XRP" },
      ],
      id: "crypto-growth"
    },
    {
      imageUrl: Logo.src,
      question: "Will Meta launch its decentralized social network in 2024?",
      isYesNo: true,
      id: "meta-social"
    },
    {
      imageUrl: Logo.src,
      question: "Which gaming console will have the highest sales in 2024?",
      options: [
        { text: "PlayStation 5" },
        { text: "Xbox Series X" },
        { text: "Nintendo Switch 2" },
      ],
      id: "gaming-console"
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
            id={question.id}
          />
        ))}
      </div>
    </>
  );
};

export default DasboardComp;
