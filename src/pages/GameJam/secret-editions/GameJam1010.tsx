import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fundoPs3Atari from './fundo_ps3_atari.png';
import fundoPs3 from './fundo_ps3.png';
import fundoAtari from './fundo_atari.png';

const GameJam1010: React.FC = () => {
  const navigate = useNavigate();
  const [isPs3Hovered, setIsPs3Hovered] = useState(false);
  const [isAtariHovered, setIsAtariHovered] = useState(false);

  // Obfuscated navigation strings to prevent simple string searches in bundle analysis
  const handlePs3Click = () => {
    const pathParts = ['/', 'g', 'a', 'm', 'e', 'j', 'a', 'm', '/', 'l', 'o', 'g', 'i', 'n', '-', 'p', 'l', 'a', 'y', 's', 't', 'a', 't', 'i', 'o', 'n'];
    navigate(pathParts.join(''));
  };

  const handleAtariClick = () => {
    const urlParts = ['h', 't', 't', 'p', 's', ':', '/', '/', 'e', 'n', 'i', 'g', 'm', 'a', '.', 'g', 'r', 'u', 'p', 'o', 'd', 'o', 'b', 'o', 'l', 'o', '.', 'c', 'o', 'm', '.', 'b', 'r'];
    window.open(urlParts.join(''), '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        userSelect: 'none',
      }}
    >
      {/* Aspect-Ratio-Preserving Wrapper Container */}
      <div
        style={{
          position: 'relative',
          width: 'min(100vw, calc(100vh * 2730 / 1536))',
          height: 'min(100vh, calc(100vw * 1536 / 2730))',
          aspectRatio: '2730 / 1536',
        }}
      >
        {/* Base Background Image */}
        <img
          src={fundoPs3Atari}
          alt="Console Dashboard"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* PS3 Overlay Image */}
        <img
          src={fundoPs3}
          alt="PS3 Highlight"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 2,
            pointerEvents: 'none',
            opacity: isPs3Hovered ? 1 : 0,
            filter: isPs3Hovered ? 'brightness(1.25) drop-shadow(0 0 15px rgba(0, 162, 255, 0.8))' : 'none',
            transition: 'opacity 0.25s ease, filter 0.25s ease',
          }}
        />

        {/* Atari Overlay Image */}
        <img
          src={fundoAtari}
          alt="Atari Highlight"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 3,
            pointerEvents: 'none',
            opacity: isAtariHovered ? 1 : 0,
            filter: isAtariHovered ? 'brightness(1.25) drop-shadow(0 0 15px rgba(255, 90, 0, 0.8))' : 'none',
            transition: 'opacity 0.25s ease, filter 0.25s ease',
          }}
        />

        {/* PS3 Hotspot Trigger */}
        <div
          onClick={handlePs3Click}
          onMouseEnter={() => setIsPs3Hovered(true)}
          onMouseLeave={() => setIsPs3Hovered(false)}
          style={{
            position: 'absolute',
            left: '13.59%',
            top: '32.29%',
            width: '11.54%',
            height: '23.63%',
            zIndex: 10,
            cursor: 'pointer',
            background: 'transparent',
          }}
          title="PlayStation 3"
        />

        {/* Atari Hotspot Trigger */}
        <div
          onClick={handleAtariClick}
          onMouseEnter={() => setIsAtariHovered(true)}
          onMouseLeave={() => setIsAtariHovered(false)}
          style={{
            position: 'absolute',
            left: '65.13%',
            top: '51.24%',
            width: '10.29%',
            height: '6.90%',
            zIndex: 10,
            cursor: 'pointer',
            background: 'transparent',
          }}
          title="Atari"
        />
      </div>
    </div>
  );
};

export default GameJam1010;

