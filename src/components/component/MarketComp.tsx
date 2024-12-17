"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Logo from "@/assets/img/logo.png";
import { useAppKit } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import Button from "../UI/Button";
import { Bounce, toast } from "react-toastify";
import { readContractHelper } from "@/helperFile/helperFunction";

const MarketComp = () => {
  const searchParams = useSearchParams();
  const questionId = searchParams.get("id");
  const selectedOption = searchParams.get("option");

  const [data, setData] = useState<{ pollImageUrl?: string; question?: string; options?: Record<string, string> }>({});
  const [selectedKey, setSelectedKey] = useState<string | null>(selectedOption || null);

  const { open } = useAppKit();
  const { address } = useAccount();

  const handleOpen = () => {
    if (address) {
      console.log("address", address);
    } else {
      open();
    }
  };

  const handleOptionChange = (key: string) => {
    setSelectedKey(key);
  };

  const handleVote = () => {
    if (selectedKey) {
      console.log("Selected key (to be sent):", selectedKey);
    } else {
      console.log("No option selected.");
    }
  };

  const fetchDataByID = async () => {
    try {
      console.log("questionId", questionId);
      const result = await readContractHelper("getPoll", [questionId]);
      console.log("getPoll", result);
      setData(result as any);
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
    }
  };

  useEffect(() => {
    if (questionId && address) {
      fetchDataByID();
    }
  }, [questionId, address]);

  return (
    <>
      <div className="flex gap-2 w-full mt-8">
        {/* Left side */}
        <div className="lg:w-2/3 w-full">
          <div className="flex gap-2 items-center relative">
            <div className="relative rounded-md overflow-hidden">
              <Image
                src={data?.pollImageUrl || ""}
                alt="question"
                width={60}
                height={60}
                className="object-cover bg-gray-200 dark:bg-gray-600"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">
                {data?.question}
              </h3>
            </div>
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
          <button className="text-light-bluetext dark:text-dark-bluetext hover:bg-light-background2 dark:hover:bg-dark-background2 text-md font-semibold px-4 py-2 rounded-md cursor-pointer" onClick={handleVote} disabled={data?.myVote === 0} >
            Vote
          </button>
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
    </>
  );
};

export default MarketComp;
