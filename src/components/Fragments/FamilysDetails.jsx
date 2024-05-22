import { BatikFlowers } from "../Elements/BatikFlowers";
import { FamilyName } from "../Elements/FamilyName";

export const FamilysDetails = () => {
  return (
    <div className="flex flex-col justify-between w-full h-2/3">
      <BatikFlowers src="/img/border.png" alt="image error" />
      <div className="flex flex-col items-center justify-center ">
        <p className="text-center font-Poppins md:text-lg lg:text-sm md:pb-4">
          Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
          untuk menghadiri acara pernikahan kami :
        </p>
        <FamilyName parent="Putra Bapak Carlos & Ibu Elena">
          Alex D Garp
        </FamilyName>
        <p className="text-4xl text-center font-Stalemate md:text-6xl lg:text-4xl">
          &
        </p>
        <FamilyName parent="Putri Bapak Ali & Ibu Isabella Anaya">
          Kanna Annisa Syifa
        </FamilyName>
      </div>
      <BatikFlowers src="/img/border-1.png" alt="image error" />
    </div>
  );
};
