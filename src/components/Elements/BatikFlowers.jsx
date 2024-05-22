export const BatikFlowers = (props) => {
  const { alt, src } = props;
  return <img src={src} alt={alt} className="mx-auto md:w-4/5 lg:h-20" />;
};
