export const CardSchedule = (props) => {
  const { title, date, time, location } = props;
  return (
    <div className="flex items-center justify-center w-full  h-2/5">
      <div
        className="flex flex-col items-center justify-center w-4/5 rounded-xl"
        style={{
          backgroundColor: "rgba(192,192,192, 0.55)",
          boxShadow: "4px 6px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h4
          className="my-2 text-2xl text-slate-200 font-Pattaya md:text-4xl lg:text-2xl md:my-4 lg:my-2"
          style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 1)" }}
        >
          {title}
        </h4>
        <p className="text-xs font-bold font-Poppins md:text-base lg:text-xs">
          {date}
        </p>
        <p className="text-xs font-light font-Poppins md:text-base lg:text-xs">
          {time}
        </p>
        <p className="flex flex-col w-4/5 my-4 text-xs font-light text-center font-Poppins md:text-base lg:text-xs md:w-3/5 lg:w-4/5">
          Bertempat di <span>{location}</span>
        </p>
      </div>
    </div>
  );
};
