import { Link } from "react-router-dom";
import { LeftArrowIcon } from "../assets/Icons/LeftArrowIcon";

export const ScanQR = () => {
  return (
    <div className="w-full h-auto bg-sky-950">
      {/* Section 1 */}
      <div className="flex items-center justify-center w-full h-screen ">
        <div className="flex flex-col w-full h-full bg-orange-400 xl:w-2/5 2xl:w-2/6">
          <div className="flex items-center justify-center w-full h-1/5">
            <h2
              className="text-4xl font-Staatliches text-slate-200 md:text-6xl lg:text-4xl 2xl:text-5xl"
              style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 1)" }}
            >
              SEND GIFTS
            </h2>
          </div>
          <div className="flex items-center justify-center w-full h-auto ">
            <img
              src="/img/qr.jpeg"
              alt=""
              className="w-4/5 my-4 md:w-3/5 rounded-xl"
              style={{ boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
            />
          </div>
          <div className="flex flex-col items-center justify-center flex-grow w-full ">
            <p className="flex flex-col text-center text-slate-200 font-Poppins">
              Terima kasih🤗
              <span>Semoga Menjadi Berkah.</span>
            </p>
            <div className="flex items-center justify-center w-full mt-4">
              <Link
                to="/home"
                className="flex items-center justify-center px-4 py-1 my-2 text-sm bg-white rounded-full hover:bg-slate-100 text-amber-600 md:px-6 lg:px-2 md:py-2 lg:py-1 md:text-base lg:text-sm"
                style={{
                  boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)",
                  transition: "box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = "2px 4px 4px rgba(0, 0, 0, 0.5)";
                }}
              >
                <LeftArrowIcon /> Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
