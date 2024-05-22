import { GiftIcon } from "../../assets/Icons/GiftIcon";
import { Heading } from "../Elements/Heading";
import { Layout } from "../Layouts/Layout";
import { useState } from "react";

export const WeddingGift = () => {
  // State untuk input
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [attendance, setAttendance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "reservationData",
      JSON.stringify({ name, address, attendance })
    );
    console.log("Data Berhasil Dikirim....");
    console.log(
      `Data Yang Masuk Nama ${name} Address ${address} Jumlah ${attendance}`
    );
  };

  const handleClick = () => {
    window.location.href = "/scanqr";
  };

  return (
    <Layout>
      <div className="w-full h-full xl:w-2/5 2xl:w-2/6">
        <div
          className="flex flex-col items-center h-full bg-center bg-no-repeat bg-cover lg:w-full"
          style={{ backgroundImage: `url(/img/p-8.jpg)` }}
        >
          <div className="flex flex-col items-center justify-center w-full md:w-3/5 h-1/4 lg:my-4">
            <Heading color="text-amber-500">WEDDING GIFT</Heading>
            <p className="px-4 mt-4 text-sm text-center font-Poppins md:text-lg lg:text-sm">
              Do’a restu anda merupakan karunia yang sangat berarti bagi kami,
              Jika memberi adalah ungkapan terima kasih, anda dapat memberi kado
              secara cashless.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start w-full ">
            <button
              className="flex items-center justify-center px-2 py-1 my-2 text-sm bg-white rounded-full hover:bg-slate-100 text-amber-600 md:px-6 lg:px-2 md:py-2 lg:py-1 md:text-base lg:text-sm"
              style={{ boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
              onClick={handleClick}
            >
              <GiftIcon /> Kirim Hadiah
            </button>
            <h5 className="text-2xl font-Pattaya md:text-4xl lg:text-2xl">
              Reservasi
            </h5>
          </div>
          <div className="flex flex-grow w-full h-1/3 md:pt-4">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-start w-full"
            >
              <input
                type="text"
                className="w-4/5 px-4 py-1 my-1 text-sm rounded-full md:w-3/5 md:py-2 lg:py-1 font-Poppins bg-amber-600 text-slate-200 placeholder:text-slate-200 focus:outline-none"
                style={{ boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="w-4/5 px-4 py-1 my-1 text-sm rounded-full md:w-3/5 md:py-2 lg:py-1 font-Poppins bg-amber-600 text-slate-200 placeholder:text-slate-200 focus:outline-none"
                style={{ boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className="w-4/5 md:w-3/5">
                <div className="flex items-center my-1 ">
                  <input
                    type="radio"
                    id="option1"
                    name="attendance"
                    value="1 Orang"
                    onChange={(e) => setAttendance(e.target.value)}
                  />
                  <label
                    htmlFor="option1"
                    className="pl-2 text-sm font-Poppins md:text-base lg:text-sm"
                  >
                    1 Orang
                  </label>
                </div>
                <div className="flex items-center my-1 ">
                  <input
                    type="radio"
                    id="option2"
                    name="attendance"
                    value="2 Orang"
                    onChange={(e) => setAttendance(e.target.value)}
                  />
                  <label
                    htmlFor="option2"
                    className="pl-2 text-sm font-Poppins md:text-base lg:text-sm"
                  >
                    2 Orang
                  </label>
                </div>
                <div className="flex items-center my-1 ">
                  <input
                    type="radio"
                    id="option3"
                    name="attendance"
                    value="Tidak bisa hadir"
                    onChange={(e) => setAttendance(e.target.value)}
                  />
                  <label
                    htmlFor="option3"
                    className="pl-2 text-sm font-Poppins md:text-base lg:text-sm"
                  >
                    Maaf, Saya Belum Bisa Datang
                  </label>
                </div>
              </div>
              <div className="w-4/5 md:w-3/5 ">
                <button
                  type="submit"
                  className="bg-white hover:bg-slate-100 text-amber-600 flex justify-center items-center px-4 md:px-6 lg:px-4 py-0.5 md:py-1 lg:py-0.5 my-2 rounded-full text-sm md:text-base lg:text-sm"
                  style={{ boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
