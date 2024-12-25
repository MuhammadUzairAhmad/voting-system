// src/components/component/Card.tsx
import Image from "next/image";
import Link from "next/link";

interface Option {
  text: string;
  optionId:number;
}

interface CardProps {
  imageUrl: string;
  question: string;
  options?: Option[];
  id: string;
  noOfVoters: number;
}

const Card = ({ imageUrl, question, options, id, noOfVoters }: CardProps) => {
  // console.log("options",options)
  return (
    <div className="bg-light-background2 hover:opacity-80 hover:bg-white dark:bg-dark-background2 px-4 py-2 rounded-lg shadow-md overflow-hidden">
      {/* Image and Question Section */}
      <div className=" flex gap-2 items-center md:items-start justify-start md:justify-center relative pt-2">
          {imageUrl === "" ? "" :
        <div className="h-12 w-12 relative">
          <Image src={imageUrl.startsWith('https') ? imageUrl : ''} alt={question} fill className="object-cover" />
        </div>
          }
        <Link href={`/market?id=${id}`}>
          <h3 className="text-md font-semibold hover:underline-offset-4 hover:underline text-light-text dark:text-dark-text">
            {question}
          </h3>
        </Link>
      </div>

      {/* Options Section */}
      <div className="py-2">
        <div className="flex flex-col h-20 sm:h-28 gap-1 overflow-auto mt-2 custom-scrollbar font-semibold">
          {options?.map((option, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-1 rounded"
            >
              <Link
                href={`/market?id=${id}&option=${option.optionId}`}
                className="flex justify-between w-full hover:bg-light-background dark:hover:bg-dark-background py-1 rounded-md px-4"
              >
                <span className="text-light-text  dark:text-dark-text text-sm md:text-md">
                  {option.text}
                </span>
                <input
                  type="radio"
                  name={`option-${id}`}
                  value={option.text}
                  className="accent-light-text dark:accent-dark-text"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t text-sm font-semibold border-gray-200 dark:border-gray-700 py-1">
        <div>Total Votes: {noOfVoters}</div>
      </div>
    </div>
  );
};

export default Card;
