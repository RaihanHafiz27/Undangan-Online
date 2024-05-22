export const Heading = (props) => {
  const { children, color } = props;
  return (
    <h4
      className={`text-4xl font-bold font-Staatliches md:text-5xl lg:text-4xl 2xl:text-6xl ${color}`}
      style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 1)" }}
    >
      {children}
    </h4>
  );
};
