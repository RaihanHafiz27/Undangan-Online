export const Timer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="w-4/5 lg:w-2/4 2xl:w-2/5 flex justify-between md:justify-evenly items-center md:text-xl ">
      <TimerItem value={days} label={"Days"} />
      <TimerItem value={hours} label={"Hours"} />
      <TimerItem value={minutes} label={"Minutes"} />
      <TimerItem value={seconds} label={"Seconds"} />
    </div>
  );
};

const TimerItem = (props) => {
  const { value, label } = props;
  return (
    <div className="text-center font-Poppins font-semibold">
      <p className="text-yellow-600">{value}</p>
      <p className="text-slate-200">{label}</p>
    </div>
  );
};
