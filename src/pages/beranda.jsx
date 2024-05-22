import { useState, useEffect } from "react";
import { CountDownSection } from "../components/Fragments/CountDownSection";

export const BerandaPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2024-12-31T00:00:00Z");
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    return (window.location.href = "/home");
  };

  return (
    <div className="w-screen h-screen">
      {/* Home Section Start */}
      <div className="w-full h-full">
        <div
          className="w-full h-full flex flex-col justify-between bg-no-repeat bg-cover bg-bottom lg:bg-center"
          style={{ backgroundImage: `url(/img/bg-wedding.jpg)` }}
        >
          <div className="w-full h-2/6 flex justify-center items-center">
            <h2
              className="font-Stalemate text-slate-200 text-7xl md:text-7xl xl:text-8xl 2xl:text-9xl"
              style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 1)" }}
            >
              Alex & Kanna
            </h2>
          </div>
          <CountDownSection timeLeft={timeLeft} handleClick={handleClick} />
        </div>
      </div>
      {/* Home Section End */}
    </div>
  );
};
