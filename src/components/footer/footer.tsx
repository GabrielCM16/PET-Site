import React from 'react';
import InstagramIcon from './../../assets/instagram.png';
import MailIcon from './../../assets/mail.png';

import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section about">
          <h3 className="footer-title">PETComp</h3>
          <p>
            Programa de Educação Tutorial em Ciência da Computação da Unioeste – Campus Cascavel.
            Promovendo conhecimento, pesquisa e extensão.
          </p>
        </div>

        <div className="footer-section links">
          <h3 className="footer-title">Links Úteis</h3>
          <ul>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/projetos">Projetos</a></li>
            <li><a href="/eventos">Eventos</a></li>
          </ul>
        </div>

        <div className="footer-section contato">
          <h3 className="footer-title">Contato</h3>
          <p>Email: <a href="mailto:petcomp.cascavel@gmail.com">petcomp.cascavel@gmail.com</a></p>
          <p>Telefone: (45) 99999-9999</p>
          <p>Endereço: Rua Universitária, 1619. Cascavel, PR. Brasil. Bloco F, Sala 15</p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/petcomp_unioeste/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="mailto:petcomp.cascavel@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <img
                src={MailIcon}
                alt="Email"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © <a href="https://www.youtube.com/@trestroxa" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
            2025
          </a> PETComp Unioeste - Todos os direitos reservados.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
