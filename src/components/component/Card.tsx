// src/components/component/Card.tsx
import { WiStars } from "react-icons/wi";
import Image from "next/image";
import Link from 'next/link';

interface Option {
  text: string;
  link: string;
}

interface CardProps {
  imageUrl: string;
  question: string;
  options?: Option[];
  isYesNo?: boolean;
  volume: string;
  reward: number;
  link: string;
}

const Card = ({
  imageUrl,
  question,
  options,
  isYesNo = false,
  volume,
  reward,
  link,
}: CardProps) => {
  return (
    <div className="bg-light-background2 hover:opacity-80 hover:bg-white dark:bg-dark-background2 px-4 py-2 rounded-lg shadow-md overflow-hidden">
      {/* Image and Question Section */}
      <div className=" flex gap-2 items-start justify-center relative pt-2">
        <div className="h-12 w-12 relative">
          <Image src={imageUrl} alt={question} fill className="object-cover" />
        </div>
        <Link href={link}>
          <h3 className="text-md font-semibold hover:underline-offset-4 hover:underline text-light-text dark:text-dark-text">
            {question}
          </h3>
        </Link>
      </div>

      {/* Options Section */}
      <div className="py-2">
        {isYesNo ? (
          // Yes/No Layout
          <div className="flex justify-center items-end h-20 overflow-auto">
            <div className="flex justify-center w-full items-center gap-2">
              <Link href={link} className="w-1/2">
                <button className="px-2 py-1 text-md w-full bg-green-300 font-bold text-green-500 hover:bg-green-500 hover:text-white rounded-md transition-all ease-in-out duration-300">
                  Yes
                </button>
              </Link>
              <Link href={link} className="w-1/2">
                <button className="px-2 py-1 text-md w-full bg-red-300 font-bold text-red-500 hover:bg-red-500 hover:text-white rounded-md transition-all ease-in-out duration-300">
                  No
                </button>
              </Link>
            </div>
          </div>
        ) : (
          // Multiple Options Layout
          <div className="flex flex-col h-20 gap-1 overflow-auto custom-scrollbar font-semibold">
            {options?.map((option, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-1 rounded"
              >
                <Link href={link}>
                  <span className="text-light-text  dark:text-dark-text ">
                    {option.text}
                  </span>
                </Link>
                <span className="text-black dark:text-white flex justify-center items-center gap-2">
                  <Link href={option.link}>
                    <button className="px-2 py-[2px] text-sm bg-green-300 font-bold text-green-500 hover:bg-green-500 hover:text-white rounded-md transition-all ease-in-out duration-300">
                      Yes
                    </button>
                  </Link>
                  <Link href={option.link}>
                    <button className="px-2 py-[2px] text-sm bg-red-300 font-bold text-red-500 hover:bg-red-500 hover:text-white rounded-md transition-all ease-in-out duration-300">
                      No
                    </button>
                  </Link>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="border-t text-sm font-semibold border-gray-200 dark:border-gray-700 py-1">
        <div>$43 vol.</div>
      </div>
    </div>
  );
};

export default Card;
