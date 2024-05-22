import { Layout } from "../Layouts/Layout";
import { BottomArrowIcon } from "../../assets/Icons/BottomArowIcon";

export const LoveStory = () => {
  return (
    <Layout>
      <div className="w-full h-full xl:w-2/5 2xl:w-2/6">
        <div
          className="flex flex-col items-center h-full bg-center bg-no-repeat bg-cover lg:w-full"
          style={{ backgroundImage: `url(/img/bgw-1.jpg)` }}
        >
          <div className="flex items-center justify-center w-full h-2/5">
            <h1 className="font-bold font-Stalemate text-7xl md:text-8xl lg:text-6xl 2xl:text-8xl text-slate-200">
              A & K
            </h1>
          </div>
          <div
            className="flex flex-col items-center justify-end w-full h-2/5"
            style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 1)" }}
          >
            <h4 className="text-xl font-bold md:text-2xl lg:text-xl font-Poppins text-amber-600">
              Cerita Cinta Kami
            </h4>
            <p className="w-full text-base font-semibold text-center md:w-4/5 text-slate-200">
              Di Sini, Anda akan menemukan kisah unik kami, bagaimana takdir
              membawa kami bersama, dan bagaimana perjalanan cinta kami
              berkembang menjadi kisah yang penuh makna. Kami
              tersenyum,menangis, tertawa, dan bahagia bersama.
            </p>
          </div>
          <div className="flex items-center justify-center w-full xl:w-1/4 h-1/5">
            <div className="animate-bounce">
              <BottomArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
