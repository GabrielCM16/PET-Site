import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logoPetcomp from './../../assets/Logo_PET.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [isCrazy, setIsCrazy] = useState(false); // efeito especial
  const clickCount = useRef(0);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLogoClick = () => {
    clickCount.current += 1;

    console.log("Cliques na logo:", clickCount.current);

    if (!isRotating) {
      setIsRotating(true);
      setTimeout(() => setIsRotating(false), 1000);
    }

    if (clickCount.current >= 5) {
      console.log("Efeito especial ativado!");

      // toca o áudio
      const audio = new Audio('/metalpipe.mp3'); // coloque o arquivo em public/
      audio.play();

      setIsCrazy(true);
      setTimeout(() => {
        setIsCrazy(false);
        clickCount.current = 0;
      }, 3000);
    }
  };

  return (
    <header 
      className={`pet-header ${isMenuOpen ? 'menu-open' : ''} ${isCrazy ? 'crazy-navbar' : ''}`}
    >
      <div className="pet-header-container">
        <Link to="/" className="pet-logo" aria-label="Página inicial">
          <img
            src={logoPetcomp}
            alt="Logo PETComp"
            className={`
              logo-img-header 
              ${isRotating ? 'rotate-logo' : ''} 
              ${isCrazy ? 'crazy-logo' : ''}
            `}
            onClick={handleLogoClick}
          />
        </Link>

        {/* Navbar desktop */}
        <nav className="pet-nav desktop">
          <Link to="/">Início</Link>
          <Link to="/membros">Membros</Link>
          <Link to="/newspetletter">NewsPETLetter</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/sala">Sala</Link>
          <Link to="/faq">Faq</Link>
        </nav>

        {/* Botão hamburguer */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Navbar mobile */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={toggleMenu}>Início</Link>
          <Link to="/membros" onClick={toggleMenu}>Membros</Link>
          <Link to="/newspetletter" onClick={toggleMenu}>NewsPETLetter</Link>
          <Link to="/projetos" onClick={toggleMenu}>Projetos</Link>
          <Link to="/sala" onClick={toggleMenu}>Sala</Link>
          <Link to="/faq" onClick={toggleMenu}>Faq</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
