import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bagreimg from "./../../assets/images/game/bagre.png";

const Bagre: React.FC = () => {
  const navigate = useNavigate();

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

    // Ocultar barra de rolagem ao entrar
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      onClick={() => navigate("/")}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        cursor: "pointer",
        zIndex: 99999,
        overflow: "hidden",
        animation: "redFlash 1.5s ease-out 1",
      }}
    >
      <style>
        {`
          @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(0px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(2px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(2px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }
          @keyframes redFlash {
            0% { background-color: #ff0000; }
            10% { background-color: #000000; }
            20% { background-color: #ff0000; }
            30% { background-color: #000000; }
            100% { background-color: #000000; }
          }
          .shake-image {
            animation: shake 0.15s infinite;
            max-width: 90vw;
            max-height: 90vh;
            width: auto;
            height: auto;
            object-fit: contain;
            filter: drop-shadow(0 0 20px rgba(255, 0, 0, 0.6));
          }
        `}
      </style>

      <img
        src={bagreimg}
        alt="Bagre"
        className="shake-image"
      />

      <audio id="audio1" src="/sounds/grito.mp3" autoPlay />
      <audio id="audio2" src="/sounds/fundosuspeito.mp3" />
      
      <div 
        style={{
          position: "absolute",
          bottom: "20px",
          color: "#444",
          fontSize: "12px",
          fontFamily: "sans-serif",
          pointerEvents: "none"
        }}
      >
        Clique em qualquer lugar para voltar
      </div>
    </div>
  );
};

export default Bagre;
