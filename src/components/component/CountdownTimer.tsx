import React, { useEffect, useState } from "react";

const CountdownTimer = ({ endDateInSeconds, onCountdownEnd }: { endDateInSeconds: number, onCountdownEnd: () => void }) => {
  const [countdown, setCountdown] = useState<string>("");

  useEffect(() => {
    const calculateCountdown = () => {
      const selectedEndDate = new Date(endDateInSeconds * 1000);
      const currentTime = new Date();

      const timeDifference = selectedEndDate.getTime() - currentTime.getTime();

      if (timeDifference <= 0) {
        setCountdown("Poll has ended");
        onCountdownEnd(); // Notify parent when countdown ends
        return;
      }

      // Calculate years, months, days, hours, minutes, and seconds
      const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24 * 365)) /
          (1000 * 60 * 60 * 24 * 30)
      );
      const days = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown(
        `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`
      );
    };

    calculateCountdown();

    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval); // Clean up the interval when component unmounts
  }, [endDateInSeconds, onCountdownEnd]);

  return (
    <div className="flex space-x-4">
      {countdown !== "Poll has ended" ? (
        <>
          <div className="text-center w-20 py-1 bg-light-background2 dark:bg-dark-background2 rounded-lg shadow-lg">
            <span className="text-lg font-bold">
              {countdown?.split(" ")[3]?.split("h")[0]}
            </span>
            <div className="text-sm text-light-text dark:text-dark-text">Hours</div>
          </div>
          <div className="text-center w-20 py-1 bg-light-background2 dark:bg-dark-background2 rounded-lg shadow-lg">
            <span className="text-lg font-bold">
              {countdown?.split(" ")[4]?.split("m")[0]}
            </span>
            <div className="text-sm text-light-text dark:text-dark-text">Minutes</div>
          </div>
          <div className="text-center w-20 py-1 bg-light-background2 dark:bg-dark-background2 rounded-lg shadow-lg">
            <span className="text-lg font-bold">
              {countdown?.split(" ")[5]?.split("s")[0]}
            </span>
            <div className="text-sm text-light-text dark:text-dark-text">Seconds</div>
          </div>
        </>
      ) : (
        <div className="text-xl font-bold text-red-500">Poll has ended</div>
      )}
    </div>
  );
};

export default CountdownTimer;
