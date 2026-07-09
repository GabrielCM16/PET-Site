import React, { useState } from 'react';
import './css/styles.css';
import backgroundBg from './Imagens/Background.jpg';
import sonyLogo from './Imagens/Logo.svg';
import playstationLogo from './Imagens/Playstation.svg';

const LoginPlaystation: React.FC = () => {
  const [id, setId] = useState<string>('login123');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ação do login - não faz nada por padrão conforme os requisitos
  };

  const isFormValid = id.trim() !== '' && password.trim() !== '';

  return (
    <div className="ps-login-wrapper">
      {/* Imagem de fundo */}
      <img src={backgroundBg} className="background-image" alt="PlayStation Background" />

      {/* Cabeçalho */}
      <div className="cabecalho">
        <img src={sonyLogo} className="logo-sony" alt="Sony" />
      </div>

      {/* Container Principal */}
      <div className="container">
        {/* Lado Esquerdo (Logo PlayStation) */}
        <div className="left-side">
          <img src={playstationLogo} className="logo-playstation" alt="PlayStation Logo" />
        </div>

        {/* Lado Direito (Formulário) */}
        <div className="right-side">
          <h1>Inicie uma sessão no PlayStation</h1>

          <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Input de ID de início de sessão */}
            <input
              type="text"
              id="email-input"
              placeholder="ID de início de sessão (endereço de correio eletrónico)"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

            {/* Input de Senha */}
            <input
              type="password"
              id="password-input"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Botão Iniciar sessão */}
            <button
              type="submit"
              id="btn-seguinte"
              className={`btn-seguinte ${isFormValid ? 'active' : ''}`}
              disabled={!isFormValid}
            >
              Iniciar sessão
            </button>
          </form>

          {/* Links e botões meramente decorativos (conforme solicitado pelo usuário, sem href e com cursor padrão) */}
          <a
            onClick={(e) => e.preventDefault()}
            style={{
              cursor: 'default',
              pointerEvents: 'none',
              color: 'rgb(0, 132, 240)',
            }}
          >
            Sobre a conta da Sony
          </a>

          <a
            onClick={(e) => e.preventDefault()}
            style={{
              cursor: 'default',
              pointerEvents: 'none',
              color: 'rgb(0, 132, 240)',
            }}
          >
            Está a ter dificuldade em iniciar uma sessão?
          </a>

          <button
            id="criar-conta"
            className="btn-criar-conta"
            onClick={(e) => e.preventDefault()}
            style={{
              cursor: 'default',
              pointerEvents: 'none',
            }}
          >
            Criar uma conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPlaystation;
