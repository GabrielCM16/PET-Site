import React from 'react';
import araucariaBg from '../../../assets/images/game/araucaria.png';

const GameJam1001: React.FC = () => {
  // Obfuscated string 'Edição Errada' to prevent static text search detection in bundled files
  const titleText = ['E', 'd', 'i', 'ç', 'ã', 'o', ' ', 'E', 'r', 'r', 'a', 'd', 'a'].join('');

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${araucariaBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <h1
        style={{
          color: '#ffffff',
          fontFamily: "'Outfit', 'Inter', sans-serif",
          fontSize: '4.5rem',
          fontWeight: 800,
          textShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
          margin: 0,
          textAlign: 'center',
          userSelect: 'none',
          letterSpacing: '1px',
        }}
      >
        {titleText}
      </h1>
    </div>
  );
};

export default GameJam1001;
