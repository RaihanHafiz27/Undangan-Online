import { useState } from "react";
import { Layout } from "../Layouts/Layout";

export const Message = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    localStorage.setItem("Message user", JSON.stringify({ name, message }));
    console.log("Send Message Success");
  };

  return (
    <Layout>
      <div className="w-full h-full xl:w-2/5 2xl:w-2/6">
        <div
          className="flex flex-col items-center h-full bg-center bg-no-repeat bg-cover lg:w-full"
          style={{ backgroundImage: `url(/img/p-9.jpg)` }}
        >
          <div className="flex flex-col items-center justify-center w-full md:w-3/5 h-1/4">
            <h4
              className="text-4xl font-bold tracking-wider font-Staatliches md:text-5xl lg:text-4xl 2xl:text-6xl text-amber-500"
              style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 1)" }}
            >
              MESSAGE
            </h4>
            <p className="flex flex-col mt-4 text-sm text-center text-slate-200 font-Poppins md:text-lg lg:text-sm">
              Kirimkan do’a & ucapan <span> Kepada kedua mempelai</span>
            </p>
          </div>
          <div className="w-full h-2/5">
            <form
              onSubmit={sendMessage}
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <input
                type="text"
                className="w-4/5 px-4 py-1 my-1 text-sm rounded-full md:w-3/5 md:py-2 lg:py-1 font-Poppins bg-slate-200 text-amber-500 placeholder:text-amber-600 focus:outline-none"
                style={{ boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                type="text"
                className="w-4/5 px-4 py-1 my-1 text-sm resize-none md:w-3/5 h-2/5 md:py-2 lg:py-1 font-Poppins bg-slate-200 text-amber-500 placeholder:text-amber-600 focus:outline-none rounded-xl"
                style={{ boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
                placeholder="Ketik pesan Anda di sini..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="w-4/5 md:w-3/5">
                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-slate-100 text-slate-200 flex justify-center items-center px-4 md:px-6 lg:px-4 py-0.5 md:py-1 lg:py-0.5 my-2 rounded-full text-sm md:text-base lg:text-sm"
                  style={{ boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center flex-grow w-full ">
            <div className="w-11/12 text-slate-200 md:w-3/5 lg:w-4/5">
              <p className="mb-2 text-sm text-center font-Poppins">
                Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
                berkenan hadir dalam hari bahagia ini.
              </p>
              <p className="text-sm text-center font-Poppins">
                Terima kasih atas segala ucapan, do’a, dan perhatian yang
                diberikan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
