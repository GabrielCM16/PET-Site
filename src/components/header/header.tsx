import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logoPetcomp from './../../assets/Logo_PET.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLogoClick = () => {
    if (!isRotating) {
      setIsRotating(true);
      setTimeout(() => setIsRotating(false), 1000); // Duração da animação
    }
  };

  return (
    <header className={`pet-header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="pet-header-container">
        <Link to="/" className="pet-logo" aria-label="Página inicial">
          <img
            src={logoPetcomp}
            alt="Logo PETComp"
            className={`logo-img-header ${isRotating ? 'rotate-logo' : ''}`}
            onClick={handleLogoClick}
          />
        </Link>

        <nav className="pet-nav desktop">
          <Link to="/">Início</Link>
          <Link to="/membros">Membros</Link>
          <Link to="/newspetletter">NewsPETLetter</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/sala">Sala</Link>
          <Link to="/faq">Faq</Link>
        </nav>

        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>

      </div>

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
