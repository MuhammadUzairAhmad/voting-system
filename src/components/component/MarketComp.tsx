"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Logo from "@/assets/img/logo.png";
import { useAppKit } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import Button from "../UI/Button";

const MarketComp = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
  const options = [
    { text: "Joe Biden" },
    { text: "Donald Trump" },
    { text: "Other" },
  ];
  const { open } = useAppKit();
  const { address } = useAccount();
  const handleOpen = () => {
    if (address) {
      // open();
      console.log("address", address);
    } else {
      open();
    }
  };
  return (
    <>
      <div className="flex gap-2 w-full mt-8">
        {/* lefy side  */}
        <div className="lg:w-2/3 w-full">
          <div className=" flex gap-2 items-center relative">
            <div className=" relative rounded-md overflow-hidden">
              <Image
                src={Logo.src}
                alt={"question"}
                width={60}
                height={60}
                className="object-cover bg-gray-200 dark:bg-gray-600"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">
                Will Bitcoin reach $100k by the end of 2024?
              </h3>
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-100 dark:bg-gray-600 my-3"></div>
          {/* for signle question */}
          <div className="flex justify-center w-full items-center gap-2">
            <button
              onClick={handleOpen}
              className="px-2 py-2 text-md md:text-lg w-full bg-green-300 font-bold text-green-500 hover:bg-green-500 hover:text-white rounded-md transition-all ease-in-out duration-300"
            >
              Yes
            </button>
            <button
              onClick={handleOpen}
              className="px-2 py-2 text-md md: w-full bg-red-300 font-bold text-red-500 hover:bg-red-500 hover:text-white rounded-md transition-all ease-in-out duration-300"
            >
              No
            </button>
            {/* for signle question */}
          </div>
          <div className="h-[1px] w-full bg-gray-100 dark:bg-gray-600 my-3"></div>
          {/* multi quet */}
          <div className="flex flex-col gap-1 font-semibold">
            {options?.map((option, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-1 rounded"
              >
                <span className="text-lg text-light-text  dark:text-dark-text ">
                  {option.text}
                </span>
                <span className="text-black dark:text-white flex justify-center items-center gap-2">
                  <button
                    onClick={handleOpen}
                    className="px-8 py-1 text-md bg-green-300 font-bold text-green-500 hover:bg-green-500 hover:text-white rounded-md transition-all ease-in-out duration-300"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleOpen}
                    className="px-8 py-1 text-md bg-red-300 font-bold text-red-500 hover:bg-red-500 hover:text-white rounded-md transition-all ease-in-out duration-300"
                  >
                    No
                  </button>
                </span>
              </div>
            ))}
          </div>
          {/* multi quet */}
          <div className="h-[1px] w-full bg-gray-100 dark:bg-gray-600 my-3"></div>
          <div className="text-lg text-light-text dark:text-dark-text font-semibold">
            <span className=" text-black dark:text-gray-300 text-xl">
              Result :
            </span>{" "}
            <span className="text-md">Answered by 1000 people</span>
          </div>
        </div>
        {/* right side  */}
        <div className="w-1/3 hidden lg:block">
          {/* card  */}
          {!address &&
          <div className="bg-light-background2  dark:bg-dark-background2 px-4 py-4 rounded-lg shadow-md overflow-hidden">
            <div className=" flex gap-2 items-center  justify-start md:justify-center relative pt-2">
              <div className=" overflow-hidden rounded-full relative">
              <Image
                src={Logo.src}
                alt={"question"}
                width={60}
                height={60}
                className="object-cover bg-gray-200 dark:bg-gray-600"
              />
              </div>
              <h3 className="text-md font-semibold text-light-text dark:text-dark-text">
                Will Bitcoin reach $100k by the end of 2024?
              </h3>
            </div>
          <div className="h-[1px] w-full bg-gray-100  dark:bg-gray-600 my-3"></div>
            <div className="text-md text-center my-10 text-light-text2 dark:text-dark-text2">Have fun after logging in and voting your opinions!</div>
          <div className="h-[1px] w-full bg-gray-100  dark:bg-gray-600 my-3"></div>
            <div>
              <Button variant="blue" width="w-full" onClick={handleOpen}>
               Log In To Vote
              </Button>
            </div>
            <div className="text-sm text-center mt-3 text-light-text dark:text-dark-text">By trading, you agree to the</div>
          </div>
          }
        </div>
      </div>
    </>
  );
};

export default MarketComp;
