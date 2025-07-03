import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-section">
            <h4>Institucional</h4>
            <a href="https://suporte.kirvano.com/hc/central-de-ajuda/pt_BR">Central de ajuda</a>
            <a href="https://forms.kirvano.com/denuncia-de-plagio/">Canal de Denúncias</a>
          </div>

          <div className="footer-section">
            <h4>Aprenda com a Kirvano</h4>
            <a href="https://www.youtube.com/@kirvanobr/">Canal do YouTube</a>
            <a href="https://blog.kirvano.com/">Blog da Kirvano</a>
          </div>

          <div className="footer-section">
            <h4>Termos e Condições de Uso</h4>
            <a href="https://app.kirvano.com/terms-of-use#terms-of-use">Termos Gerais de Uso</a>
            <a href="https://app.kirvano.com/terms-of-use#content-policy">Política de Conteúdo</a>
       
          </div>

          <div className="footer-section">
            <h4>Baixe nosso app</h4>
           
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Kirvano. Todos os direitos reservados.</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/kirvanobr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://www.linkedin.com/company/kirvano/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://www.youtube.com/channel/UCLB5miwVtZ2RQWFJMfVnKuA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YouTube</a>
            <a href="https://www.facebook.com/kirvano.com.br" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
          </div>

          

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
