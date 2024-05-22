export const Layout = (props) => {
  const { children } = props;
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      {children}
    </div>
  );
};
