import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {

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

          <Link
            to="/"
            className="notfound-button primary"
          >
            Voltar para o início
          </Link>

          <Link
            to="/projetos"
            className="notfound-button secondary"
          >
            Explorar projetos
          </Link>

        </div>

        <div className="notfound-code">
          &lt;/404&gt;
        </div>

      </div>

    </div>
  );
};

export default NotFound;

