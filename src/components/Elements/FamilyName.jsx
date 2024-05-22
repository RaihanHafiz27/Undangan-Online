export const FamilyName = (props) => {
  const { children, parent } = props;
  return (
    <p className="flex flex-col items-center py-1 text-4xl font-Stalemate md:text-6xl lg:text-4xl 2xl:text-5xl">
      {children}
      <span className="text-base font-Poppins md:text-lg lg:text-sm 2xl:text-xl md:pt-4 lg:pt-1 2xl:pt-4">
        {parent}
      </span>
    </p>
  );
};
