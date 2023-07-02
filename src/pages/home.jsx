import React, { useContext, useState } from "react";
import Jumbotron from "../images/jumbotron.png";
import Connect from "../images/Connect.png";
import Discovery from "../images/Discovery.png";
import CardHome from "../component/cardHome";
import MusicPlayer from "../component/musicPlayer";
import { UserContext } from "../context/userContext";

const Home = () => {
  const [music, setMusic] = useState("");
  const [state, _] = useContext(UserContext);

  const handleCard = (music) => {
    if (new Date(state.user.due_date).getTime() < new Date().getTime()) {
      alert("waktunya berlangganan habis");
    } else if (state.user.status_user == "active") {
      setMusic(music);
    } else {
      alert("Silakan Melakukan Pembayaran");
    }
  };
  console.log("user date", new Date(state.user.due_date).getTime());
  console.log("dushd", new Date().getTime());

  return (
    <>
      <div className="bg-black">
        <div className="w-full">
          <div className="relative">
            <img src={Jumbotron} />
          </div>
          <div>
            <img src={Connect} className="absolute top-32 left-96" />
            <img src={Discovery} className="absolute top-44 left-80 h-12" />
          </div>
          <div className="mt-5 text-center">
            <h1 className="text-xl text-red-500 font-medium">
              Dengarkan Dan Rasakan
            </h1>
          </div>
          <div className="mt-10 px-10 pb-10 grid grid-cols-5 gap-5">
            <CardHome onClick={handleCard} />
          </div>
          {music && <MusicPlayer music={music} />}
        </div>
      </div>
    </>
  );
};

export default Home;
