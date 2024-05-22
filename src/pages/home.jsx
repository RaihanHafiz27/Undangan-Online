import { LoveStory } from "../components/Organisms/LoveStory";
import { Details } from "../components/Organisms/Details";
import { Gallery } from "../components/Organisms/Gallery";
import { Schedule } from "../components/Organisms/Schedule";
import { WeddingGift } from "../components/Organisms/WeddingGift";
import { Message } from "../components/Organisms/Message";
import ReactAudioPlayer from "react-audio-player";

export const HomePage = () => {
  return (
    <div className="w-full h-auto bg-orange-300">
      <LoveStory />
      <Details />
      <Gallery />
      <Schedule />
      <WeddingGift />
      <Message />
      <ReactAudioPlayer src="/audio/Wedding_A_Thousand_Years.mp3" autoPlay />
    </div>
  );
};
