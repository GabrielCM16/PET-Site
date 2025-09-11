import React from "react";
import "./footer.css";
import Sus from "./sus";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Sus />
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
            <a href="https://www.youtube.com/@petcomputacao-unioeste7552">Canal do YouTube</a>
            <a href="/newspetletter">Blog do PETComp</a>
          </div>

          <div className="footer-section">
            <h4>Extensões</h4>
            <a href="/newspetletter">NewsPETLetter</a>
            <a href="/projetos">Projetos</a>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <div className="app-buttons">
              <a href="/sala">Sala PETComp</a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjgGkCxffJvQxttPZzhCzCvBPnLVGPfdtdVswhCVLKwGShzwVhqsXxhjvsnPQFLCrfxJWW">petcomp.cascavel@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            ©{' '}
            <a
              href="https://linktr.ee/ogrupodobolo"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none', cursor: 'default' }}
            >
              2025
            </a>{' '}
            PETComp. Todos os direitos reservados.
          </p>



          <div className="social-icons" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a href="https://www.instagram.com/petcomp_unioeste/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram" width="30" height="30" style={{ filter: 'invert(0.5)' }} />
            </a>
            <a href="https://github.com/petcompgroup" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" alt="GitHub" width="30" height="30" style={{ filter: 'invert(0.5)' }} />
            </a>
            <a href="https://www.youtube.com/@petcomputacao-unioeste7552" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/youtube.svg" alt="YouTube" width="30" height="30" style={{ filter: 'invert(0.5)' }} />
            </a>
            <a href="https://www.facebook.com/petcomp/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" alt="Facebook" width="30" height="30" style={{ filter: 'invert(0.5)' }} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
