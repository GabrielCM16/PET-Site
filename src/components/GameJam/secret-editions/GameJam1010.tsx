import React from 'react';
import bagreImg from '../../../assets/images/game/araucaria.png';

const GameJam1010: React.FC = () => {
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
      }}
    >
      <img
        src={bagreImg}
        alt="Bagre"
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

export default GameJam1010;
