import { Heading } from "../Elements/Heading";
import { Images } from "../Elements/Images";
import { Description } from "../Fragments/Description";
import { GalleryImages } from "../Fragments/GalleryImages";
import { Layout } from "../Layouts/Layout";

export const Gallery = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full text-gray-800 bg-slate-200 lg:w-2/5 2xl:w-1/3 ">
        <div className="flex items-center justify-center my-4 md:my-8">
          <Heading color="text-amber-500">GALLERY</Heading>
        </div>
        <GalleryImages />
        <Description />
      </div>
    </Layout>
  );
};
