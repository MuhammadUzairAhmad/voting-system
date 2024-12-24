"use client";

import React, { useState } from "react";
import SearchBar from "../UI/SearchBar";
import ThemeToggle from "../UI/ToggleTheme";
import { MdDashboardCustomize } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAutoGraph } from "react-icons/md";
import Link from "next/link";
import MarketDropdown from "../UI/MarketDropdown";
import Button from "../UI/Button";
import ProfileDropDown from "../UI/ProfileDropDown";
import { useAppKit } from "@reown/appkit/react";
import { useAccount } from "wagmi";

const Navbar = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const { open } = useAppKit();
  const { address } = useAccount();

  // const handleSearch = (value: string) => {
  //   console.log("Search value:", value);
  //   // Add your search logic here
  // };
  // console.log("address", address);

  return (
    <nav className="bg-light-background dark:bg-dark-background border-gray-200 dark:border-gray-600 border-b-2 text-light-text dark:text-dark-text">
      <div className="flex justify-between items-center mx-auto px-2 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex shrink-0 gap-4 items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <div className="text-2xl font-bold hidden lg:block">PolyMarket</div>
          </Link>
          {/* serach bar  */}

          {/* <SearchBar
            onSearch={handleSearch}
            placeholder="Search Markets"
            className="w-48 xl:w-96 hidden md:block"
          /> */}
          {/* serach bar  */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Market menus  */}
            {/* <MarketDropdown /> */}
            {/* Market menus  */}
            {/* <Link
              href={"/dashboard"}
              className="flex items-center flex-col gap-1 px-3 py-2 rounded-md hover:bg-light-background2 dark:hover:bg-dark-background2 cursor-pointer"
            >
              <LuLayoutDashboard />
              <span className="text-light-text dark:text-dark-text">
                Dashboard
              </span>
            </Link>
            <Link
              href={"/activity"}
              className="flex items-center flex-col gap-1 px-3 py-2 rounded-md hover:bg-light-background2 dark:hover:bg-dark-background2 cursor-pointer"
            >
              <MdAutoGraph />
              <span className="text-light-text dark:text-dark-text">
                Activity
              </span>
            </Link> */}

            {/* {address && (
              <>
                <Link
                  href={"/Portfolio"}
                  className="flex items-center flex-col gap-0 px-3 py-2 rounded-md hover:bg-light-background2 dark:hover:bg-dark-background2 cursor-pointer"
                >
                  <span className="m-0 p-0 text-green-500 font-semibold">
                    $0.00
                  </span>
                  <span className="text-light-text dark:text-dark-text">
                    Portfolio
                  </span>
                </Link>
                <Link
                  href={"/Cash"}
                  className="flex items-center flex-col gap-0 px-3 py-2 rounded-md hover:bg-light-background2 dark:hover:bg-dark-background2 cursor-pointer"
                >
                  <span className="m-0 p-0 text-green-500 font-semibold">
                    $0.00
                  </span>
                  <span className="text-light-text dark:text-dark-text">
                    Cash
                  </span>
                </Link>
              </>
            )} */}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {address ? (
            <Button variant="blue">Desopit</Button>
          ) : (
            <>
              {/* <Button variant="light" onClick={() => open()}>
            Connect Wallet
          </Button> */}
              <Button variant="blue" onClick={() => open()}>
                Connect Wallet
              </Button>
            </>
          )}
          {/* after login  */}
          {/* after login  */}
          <ProfileDropDown />
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
