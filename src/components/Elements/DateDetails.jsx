export const DateDetails = (props) => {
  const { children, hours } = props;
  return (
    <h4 className="flex flex-col mx-2 text-lg text-center md:text-2xl lg:text-xl md:mx-4">
      {children} <span>{hours}</span>
    </h4>
  );
};
