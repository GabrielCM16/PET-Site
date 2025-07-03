import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-section">
            <h4>Institucional</h4>
            <a href="https://www.unioeste.br/portal/pro-reitoria-de-graduacao">Pró-Reitoria de Graduação</a>
            <a href="https://www.unioeste.br/portal/prograd-outros/cursos-campus-todos/cascavelcursos?campi=0&curso=CSC0050">Curso de Ciência da Computação</a>
            <a href="http://sigpet.mec.gov.br/primeiro-acesso">SIGPET</a>
          </div>

          <div className="footer-section">
            <h4>Aprenda com o PETComp</h4>
            <a href="https://www.youtube.com/@kirvanobr/">Canal do YouTube</a>
            <a href="https://blog.kirvano.com/">Blog do PETComp</a>
          </div>

          <div className="footer-section">
            <h4>Termos e Condições de Uso</h4>
            <a href="https://app.kirvano.com/terms-of-use#terms-of-use">Termos Gerais de Uso</a>
            <a href="https://app.kirvano.com/terms-of-use#content-policy">Política de Conteúdo</a>
          </div>

          <div className="footer-section">
            <h4>Baixe nosso app</h4>
            <div className="app-buttons">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" />
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 PETComp. Todos os direitos reservados.</p>

          <div className="social-icons">
            <a href="https://www.instagram.com/petcomp_unioeste/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="" alt="Instagram" />
            </a>
            <a href="https://github.com/petcompgroup" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
            </a>
            <a href="https://www.youtube.com/@petcomputacao-unioeste7552" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
            </a>
            <a href="https://www.facebook.com/petcomp/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
