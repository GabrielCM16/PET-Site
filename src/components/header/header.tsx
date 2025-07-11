import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logoPetcomp from './../../assets/Logo_PET.png'; // ajuste o caminho se necessário

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={`pet-header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="pet-header-container">
        <Link to="/" className="pet-logo" aria-label="Página inicial">
          <img src={logoPetcomp} alt="Logo PETComp" className="logo-img-header" />
        </Link>

        <nav className="pet-nav desktop">
          <Link to="/">Início</Link>
          <Link to="/membros">Membros</Link>
          <Link to="/newspetletter">NewsPETLetter</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/sala">Sala</Link>
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
        </div>
      )}
    </header>
  );
};

export default Header;
