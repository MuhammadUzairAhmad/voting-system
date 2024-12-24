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

import Link from "next/link";

interface MenuItem {
  icon: JSX.Element;
  label: string;
  href: string;
  active?: boolean;
  bgColor?: string;
}

const dropdownItems: MenuItem[] = [
  {
    icon: <WiStars className="w-5 h-5" />,
    label: "New",
    href: "/?filter=New",
    active: true,
    bgColor: "bg-blue-100",
  },
  {
    icon: <IoTrendingUpOutline className="w-5 h-5" />,
    label: "Trending",
    href: "/?filter=Trending",
    bgColor: "bg-green-100",
  },
  {
    icon: <CiClock2 className="w-5 h-5" />,
    label: "End",
    href: "/?filter=End",
    bgColor: "bg-orange-100",
  },
];

const MarketDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center">
      <div
        className="relative flex items-center space-x-1"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link
          href={"/"}
          className="flex items-center flex-col gap-1 px-3 py-2 rounded-md hover:bg-light-background2 dark:hover:bg-dark-background2 cursor-pointer"
        >
          <MdDashboardCustomize />
          <span className="text-light-text dark:text-dark-text">Market</span>
        </Link>
        {isOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 min-w-[360px] bg-light-background dark:bg-dark-background border border-gray-100 dark:border-gray-600  p-4  rounded-lg shadow-xl z-50">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Browse</h2>
              <Link
                className="text-light-bluetext dark:text-dark-bluetext text-md px-4 py-2 flex items-center gap-2"
                href="/"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {dropdownItems.map((item, index) => (
                <Link
                  key={index}
                  className={`flex items-center p-2 border-gray-100 dark:border-gray-600 border rounded-md gap-2 hover:bg-light-background2 dark:hover:bg-dark-background2`}
                  href={item.href}
                >
                  <div
                    className={`h-10 w-10 ${item.bgColor} dark:bg-gray-200 text-black flex items-center justify-center rounded-md`}
                  >
                    {item.icon}
                  </div>
                  <span className="whitespace-nowrap text-md font-bold">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketDropdown;
