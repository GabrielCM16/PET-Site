import React, { useEffect } from "react";
import bagreimg from "./../../assets/bagre.png";

const Bagre: React.FC = () => {
  useEffect(() => {
    const audio1 = document.getElementById("audio1") as HTMLAudioElement;
    const audio2 = document.getElementById("audio2") as HTMLAudioElement;

    if (audio1 && audio2) {
      audio1.play().catch(() => {
        console.log("Autoplay bloqueado pelo navegador");
      });

      audio1.onended = () => {
        audio2.loop = true;
        audio2.play();
      };
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f0f3",
      }}
    >
      <img
        src={bagreimg}
        alt="Bagre"
        style={{ maxWidth: "700px", width: "100%", height: "auto" }}
      />

      <audio id="audio1" src="/grito.mp3" autoPlay />
      <audio id="audio2" src="/fundosuspeito.mp3" />
    </div>
  );
};

export default Bagre;
