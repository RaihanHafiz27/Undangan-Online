export const Images = (props) => {
  const { src, alt } = props;
  return <img src={src} alt={alt} className="w-full h-full rounded-xl" />;
};
