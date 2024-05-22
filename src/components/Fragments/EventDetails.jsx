import { DateDetails } from "../Elements/DateDetails";

export const EventDetails = () => {
  return (
    <div className="flex items-center justify-center flex-grow ">
      <div className="flex font-bold font-Poppins">
        <DateDetails hours="08:00 am">SUNDAY</DateDetails>
        <h4 className="flex items-center justify-center px-6 text-3xl md:text-5xl lg:text-4xl border-x-2 border-slate-200">
          24
        </h4>
        <DateDetails hours="2024">DECEMBER</DateDetails>
      </div>
    </div>
  );
};
