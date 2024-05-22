import { Timer } from "../Elements/Timer";
import { InvitationButton } from "../Elements/InvitationBtn";

export const CountDownSection = (props) => {
  const { handleClick, timeLeft } = props;
  return (
    <div
      className="flex flex-col items-center justify-around w-full h-2/6 lg:h-2/5"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(3, 7, 18, 1), rgba(3, 7, 18, 0))",
      }}
    >
      <div
        className="w-4/5 lg:w-2/4"
        style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 1)" }}
      >
        <p className="text-lg italic text-center font-Recursive text-slate-200 md:text-2xl">
          Kepada Bapak/Ibu/Saudara/i.
        </p>
        <p className="mt-2 text-base text-center font-Poppins text-slate-200 md:text-xl">
          Kami akan melangsungkan resepsi pernikahan dalam :
        </p>
      </div>
      <Timer {...timeLeft} />
      <InvitationButton handleClick={handleClick} />
    </div>
  );
};
