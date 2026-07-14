import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase';
import './css/styles.css';
import backgroundBg from './Imagens/Background.jpg';
import sonyLogo from './Imagens/Logo.svg';
import playstationLogo from './Imagens/Playstation.svg';

const LoginPlaystation: React.FC = () => {
  const [id, setId] = useState<string>('WintryHeart6883');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const emailToLogin = id.includes('@') ? id : `${id}@enigma.com`;
      await signInWithEmailAndPassword(auth, emailToLogin, password);
      
      navigate('/gamejam/playgamejam');
    } catch (err: any) {
      console.error("Login Error:", err);
      setError("Falha no login. Verifique as credenciais.");
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = id.trim() !== '' && password.trim() !== '' && !isLoading;

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
          <button 
            onClick={() => navigate(-1)} 
            style={{ alignSelf: 'flex-start', background: 'none', border: 'none', color: '#0070cc', cursor: 'pointer', marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}
          >
            &#8592; Voltar
          </button>
          <h1>Inicie uma sessão no PlayStation</h1>

          <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Input de ID de início de sessão */}
            <input
              type="text"
              id="email-input"
              placeholder="ID de início de sessão (endereço de correio eletrónico)"
              value={id}
              onChange={(e) => setId(e.target.value)}
              disabled={true}
            />

            {/* Input de Senha */}
            <input
              type="password"
              id="password-input"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />

            {error && <div style={{ color: 'red', marginTop: '10px', marginBottom: '10px' }}>{error}</div>}

            {/* Botão Iniciar sessão */}
            <button
              type="submit"
              id="btn-seguinte"
              className={`btn-seguinte ${isFormValid ? 'active' : ''}`}
              disabled={!isFormValid}
            >
              {isLoading ? 'Iniciando sessão...' : 'Iniciar sessão'}
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
