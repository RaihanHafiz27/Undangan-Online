import { CardSchedule } from "../Elements/CardSchedule";
import { Heading } from "../Elements/Heading";
import { Layout } from "../Layouts/Layout";

export const Schedule = () => {
  return (
    <Layout>
      <div className="w-full h-full xl:w-2/5 2xl:w-2/6">
        <div
          className="flex flex-col items-center h-full bg-center bg-no-repeat bg-cover lg:w-full"
          style={{ backgroundImage: `url(/img/p-7.jpg)` }}
        >
          <div className="flex items-center justify-center w-full h-1/5">
            <Heading color="text-slate-200">SCHEDULE</Heading>
          </div>
          <CardSchedule
            title="Akad Nikah"
            date="MINGGU, 25 Feb 2024"
            time="Pukul 10.00 WIB s/d Selesai"
            location="JL . Harapan Indah no.27 Kota Bekasi, Medan Satria, Jawa Barat"
          />
          <CardSchedule
            title="Resepsi"
            date="MINGGU, 25 Feb 2024"
            time="Pukul 10.00 WIB s/d Selesai"
            location="JL . Harapan Indah no.27 Kota Bekasi, Medan Satria, Jawa Barat"
          />
        </div>
      </div>
    </Layout>
  );
};
