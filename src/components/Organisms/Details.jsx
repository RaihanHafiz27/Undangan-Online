import { BatikFlowers } from "../Elements/BatikFlowers";
import { EventDetails } from "../Fragments/EventDetails";
import { FamilysDetails } from "../Fragments/FamilysDetails";
import { Surat } from "../Fragments/Surat";
import { Layout } from "../Layouts/Layout";

export const Details = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full bg-gray-800 lg:w-2/5 2xl:w-1/3 text-slate-200">
        <Surat />
        <FamilysDetails />
        <EventDetails />
      </div>
    </Layout>
  );
};
