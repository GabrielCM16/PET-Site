import React from 'react';

import MailIcon from './../../assets/mail.png';
import InstaIcon from './../../assets/instagram.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4 text-center">
      <h2 className="h4 mb-3">Alguma dúvida? Entre em contato:</h2>
      <div className="d-flex justify-content-center gap-4">
        <a href="mailto:petcomp.cascavel@gmail.com" aria-label="Email">
          <img
            src={MailIcon}
            alt="Email"
            style={{ width: 30, height: 30, filter: 'brightness(0) invert(1)' }}
          />
        </a>
        <a
          href="https://www.instagram.com/petcomp_unioeste/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img
            src={InstaIcon}
            alt="Instagram"
            style={{ width: 28, height: 28, filter: 'brightness(0) invert(1)' }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
