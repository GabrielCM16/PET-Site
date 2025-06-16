import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo_PETComp.png';
import './header.css';

const Header: React.FC = () => {
  const navMenuRef = useRef<HTMLElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
  const toggleButton = toggleButtonRef.current;
  const navMenu = navMenuRef.current;

  if (!toggleButton || !navMenu) return;

  const handleToggle = () => {
    navMenu.classList.toggle('open');
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navMenu &&
      toggleButton &&
      !navMenu.contains(event.target as Node) &&
      !toggleButton.contains(event.target as Node)
    ) {
      navMenu.classList.remove('open');
    }
  };

  // Fechar menu ao clicar em um link
  const links = navMenu.querySelectorAll('a');
  links.forEach((link) =>
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    })
  );

  toggleButton.addEventListener('click', handleToggle);
  document.addEventListener('click', handleClickOutside);

  return () => {
    toggleButton.removeEventListener('click', handleToggle);
    document.removeEventListener('click', handleClickOutside);
    links.forEach((link) =>
      link.removeEventListener('click', () => {
        navMenu.classList.remove('open');
      })
    );
  };
}, []);


  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo Petcomp" />
      </Link>

      <button id="menu-toggle" aria-label="Abrir menu" ref={toggleButtonRef}>
        ☰
      </button>

      <nav id="nav-menu" className="closed" ref={navMenuRef}>
        <Link to="/">INÍCIO</Link>
        <div></div>
        <Link to="/membros">MEMBROS ATUAIS</Link>
        <div></div>
        <Link to="/ex-membros">EX-MEMBROS</Link>
        <div></div>
        <Link to="/sala">SALA</Link>
        <div></div>
        <Link to="/projetos">PROJETOS</Link>
      </nav>
    </header>
  );
};

export default Header;
