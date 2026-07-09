import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NotFound.css";

// Imports das imagens do jogo
import Tini1 from "./../../assets/images/game/tini1.png";
import Tini2 from "./../../assets/images/game/tini2.png";
import Tini3 from "./../../assets/images/game/tini3.png";
import Tini4 from "./../../assets/images/game/tini4.png";
import N1 from "./../../assets/images/game/neadertal1.png";
import N2 from "./../../assets/images/game/neadertal2.png";
import N3 from "./../../assets/images/game/neadertal3.png";
import N4 from "./../../assets/images/game/neadertal4.png";
import N5 from "./../../assets/images/game/neadertal5.png";
import N6 from "./../../assets/images/game/neadertal6.png";
import N7 from "./../../assets/images/game/neadertal7.png";

const tiniFrames = [Tini1, Tini2, Tini3, Tini4];
const neandertalFrames = [N1, N2, N3, N4, N5, N6, N7];

const NotFound = () => {
  const [tiniIdx, setTiniIdx] = useState(0);
  const [neandertalIdx, setNeandertalIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTiniIdx((prev) => (prev + 1) % tiniFrames.length);
      setNeandertalIdx((prev) => (prev + 1) % neandertalFrames.length);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notfound-container">
      <div className="notfound-glow"></div>

      <div className="notfound-content">
        <span className="notfound-badge">
          ERROR 404
        </span>

        <h1 className="notfound-title">
          Página não encontrada
        </h1>

        <p className="notfound-description">
          O recurso solicitado não existe,
          foi movido ou está fora de operação.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="notfound-button primary">
            Voltar para o início
          </Link>
          <Link to="/projetos" className="notfound-button secondary">
            Explorar projetos
          </Link>
        </div>

        <div className="notfound-code">
          &lt;/404&gt;
        </div>
      </div>

      {/* Animação discreta no rodapé */}
      <div className="notfound-floor">
        <div className="notfound-chase">
          <img 
            src={neandertalFrames[neandertalIdx]} 
            alt="Neandertal" 
            className="notfound-sprite neandertal" 
          />
          <img 
            src={tiniFrames[tiniIdx]} 
            alt="Tini" 
            className="notfound-sprite tini" 
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
