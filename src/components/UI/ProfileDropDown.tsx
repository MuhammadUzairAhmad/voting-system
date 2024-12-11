import React, { JSX, useState } from "react";
import {
  MdHome,
  MdPerson,
  MdSettings,
  MdLogout,
  MdDashboardCustomize,
} from "react-icons/md";
import { WiStars } from "react-icons/wi";
import { IoTrendingUpOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";

import Link from "next/link";
import ThemeToggle from "./ToggleTheme";

interface MenuItem {
  label: string;
  href: string;
  active?: boolean;
  bgColor?: string;
}

const dropdownMenuItems: MenuItem[] = [
  {
    label: "Market",
    href: "/",
    bgColor: "bg-blue-100",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    active: true,
    bgColor: "bg-blue-100",
  },
  {
    label: "Activity",
    href: "/activity",
    bgColor: "bg-green-100",
  }
];
const dropdownItems: MenuItem[] = [
  {
    label: "Profile",
    href: "/profile",
    bgColor: "bg-blue-100",
  },
  {
    label: "Settings",
    href: "/settings",
    active: true,
    bgColor: "bg-blue-100",
  },
  {
    label: "Terms & Conditions",
    href: "/settings",
    bgColor: "bg-green-100",
  },
  {
    label: "Rewards",
    href: "/rewards",
    bgColor: "bg-orange-100",
  },
];

const ProfileDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center">
      <div
        className="relative flex items-center space-x-1"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="px-3 py-2 rounded-md hover:bg-light-background2 dark:hover:bg-dark-background2 cursor-pointer">
          <RxHamburgerMenu className="w-5 h-5" />
        </div>

        {/* <div className="px-3 py-2 flex items-center gap-2 rounded-md hover:bg-light-background2 dark:hover:bg-dark-background2 cursor-pointer">
          <img
            className="size-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <FaChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div> */}

        {isOpen && (
          <div className="absolute right-0 top-full mt-1 min-w-[280px] bg-light-background dark:bg-dark-background border border-gray-100 dark:border-gray-600 py-4 rounded-lg shadow-xl z-50">
            <div className="flex flex-col gap-2 px-2">
              <div
                className="py-2 px-4 rounded-md text-light-text2 font-semibold text-md dark:text-dark-text2 hover:bg-light-background2 dark:hover:bg-dark-background2"
                onClick={() => ""}
              >
                Log In
              </div>
              <div
                className="py-2 px-4 rounded-md text-light-text2 font-semibold text-md dark:text-dark-text2 hover:bg-light-background2 dark:hover:bg-dark-background2"
                onClick={() => ""}
              >
                Sign Up
              </div>
            </div>
            <div className="h-[1px] w-full bg-gray-100 dark:bg-gray-600 my-2"></div>

            <div className="md:hidden flex flex-col gap-2 mt-1 px-2">
              {dropdownMenuItems.map((item, index) => (
                <Link
                  key={index}
                  className="flex items-center justify-between py-2 px-4 rounded-md text-light-text2 font-semibold text-md dark:text-dark-text2 hover:bg-light-background2 dark:hover:bg-dark-background2"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className=" md:hidden block h-[1px] w-full bg-gray-100 dark:bg-gray-600 my-2"></div>

            <div className="flex flex-col gap-2 mt-1 px-2">
              {dropdownItems.map((item, index) => (
                <Link
                  key={index}
                  className="flex items-center justify-between py-2 px-4 rounded-md text-light-text2 font-semibold text-md dark:text-dark-text2 hover:bg-light-background2 dark:hover:bg-dark-background2"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="px-2">
              <ThemeToggle />
              {/* <div className="w-full">
              </div> */}
            </div>
            <div className="h-[1px] w-full bg-gray-100 dark:bg-gray-600 my-2"></div>
            <div className="flex flex-col gap-2 px-2">
              <div
                className="py-2 px-4 rounded-md text-light-text2 font-semibold text-md dark:text-dark-text2 hover:bg-light-background2 dark:hover:bg-dark-background2"
                onClick={() => ""}
              >
                Log Out
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDropDown;
