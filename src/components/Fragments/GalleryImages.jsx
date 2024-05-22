import { Images } from "../Elements/Images";

export const GalleryImages = () => {
  return (
    <div className="flex items-center justify-center w-full h-3/5">
      <div className="w-full h-full mx-1 md:mx-4">
        <div className="flex w-full py-1 h-1/2">
          <div className="w-1/3 h-full pr-2 ">
            <Images src="/img/p-4.jpg" alt="error-1" />
          </div>
          <div className="w-2/3 h-full overflow-hidden">
            <Images src="/img/p-6.jpg" alt="error-2" />
          </div>
        </div>
        <div className="flex w-full py-1 h-1/2">
          <div className="w-1/3 pr-2 ">
            <Images src="/img/p-3.jpg" alt="error-3" />
          </div>
          <div className="flex flex-col items-center justify-between w-1/3 ">
            <div className="flex items-center justify-center w-full h-1/4">
              <p className="text-3xl font-bold font-Stalemate md:text-5xl lg:text-3xl">
                A & K
              </p>
            </div>
            <div className="w-full h-3/4">
              <Images src="/img/p-1.jpg" alt="error-4" />
            </div>
          </div>
          <div className="w-1/3 pl-2">
            <Images src="/img/p-2.jpg" alt="error-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
