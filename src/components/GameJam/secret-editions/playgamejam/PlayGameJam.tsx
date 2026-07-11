import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../../../context/AuthContext';
import { auth } from '../../../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useXMB } from './js/useXMB';
import SupportChatModal from './SupportChatModal';
import './scss/main.css';
import asset0 from './images/vid.mp4';
import asset1 from './images/user.png';
import asset2 from './images/settings.png';
import asset3 from './images/update.png';
import asset4 from './images/display.png';
import asset5 from './images/display.png';
import asset6 from './images/photo.png';
import asset7 from './images/photo.png';
import asset8 from './images/resume.png';
import asset9 from './images/music.png';
import asset10 from './images/music.png';
import asset11 from './images/resume.png';
import asset12 from './images/video.png';
import asset13 from './images/youtube.png';
import asset14 from './images/prime.png';
import asset15 from './images/games.png';
import asset16 from './images/uncharted.png';
import asset17 from './images/gow3.png';
import asset18 from './audio/startup.mp3';
import asset19 from './audio/nav.mp3';
import suporte from './images/atendimento-ao-cliente.png'

const PlayGameJam: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/gamejam/login-playstation');
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };

  useXMB();

  return (
    <>
    {isSupportOpen && <SupportChatModal onClose={() => setIsSupportOpen(false)} />}
    <div className="ps3-theme-container">
      
    <audio id="startup" src={asset18} />
    <audio id="nav" src={asset19} />
    <audio id="my-music" src={asset18} loop />
    <video autoPlay loop muted playsInline className="back-vid" id="vid" src={asset0}></video>
    
    <header>
        <section className="title" id="title">
            <h1>Bem-vindo, Participante.</h1>
            <p style={{ marginTop: '10px' }}>Autenticação concluída com sucesso.</p>
        </section>
    </header>

    <section className="warning">
        <p className="warninghead">DISCLAIMER:</p>
        <p>WS3 - WebStation 3 v9.0 —
Esta interface é uma homenagem ao sistema XMB do PlayStation® 3 e não possui qualquer vínculo com a Sony.</p>
    </section>

    <section className="clock">
        <div className="clock-container">
            <p id="date"></p>
        </div>
    </section>

    <main id="menu">
        <section className="xmb-main">
            
            <div className="xmb-title homeMenu active">
                <img className="home" src="data:image/png;base64,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" alt="" />
                <p className="titletext">Home</p>
                
                <div className="xmb-contents">
                    <div className="submenu one" id="about">
                        <img id ="aboutimage" className="abimg" src="data:image/png;base64,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" alt="" />
                        <p id="about">Welcome!</p>
                        
                        <div className="about-bg">
                            <div className="infowrapper">
                                <h1>Bem-vindo</h1>
                                <p>Os arquivos da fase final já estão disponíveis. Explore o sistema utilizando as setas do teclado e descubra as próximas pistas.</p>
                                <p>A verdadeira jornada começa agora.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="submenu two" id="two" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                        <img className="resimg" src={asset1} alt="" />
                        <p id="twotext">PetComp</p>
                        <p className="subtext" style={{ position: 'absolute', marginLeft: '120px', marginTop: '65px', fontSize: '14px', color: '#dadada' }}>Selecione para sair</p>
                    </div>
                    
                    <div className="submenu three" id="three" onClick={() => setIsSupportOpen(true)} style={{ cursor: 'pointer' }}>
                        <img className="resimg" src={suporte} alt="" style={{ filter: 'grayscale(90%)' }} />
                        <p style={{ position: 'absolute', marginLeft: '120px', fontSize: '1.5rem', textShadow: '2px 2px 5px black' }}>Suporte</p>
                        <p className="subtext" style={{ position: 'absolute', marginLeft: '120px', marginTop: '65px', fontSize: '14px', color: '#dadada' }}>Entre em contato com o suporte</p>
                    </div>

                </div>
            </div>

            <div className="xmb-title settings">
                <img className="settings" src={asset2} alt="" />
                <p className="titletext">Settings</p>
                
                <div className="xmb-contents">
                    <div className="submenu one"  id="about">
                        <img id ="aboutimage" className="abimg" src={asset3} alt="" />
                        <div className="context">
                            <p id="about">System Update</p>
                            <p className="subtext">Atualizar firmware do sistema</p>
                        </div>
                    </div>
                    <div className="submenu two" id="two">
                        <img className="resimg" src={asset4} alt="" />
                        <div className="context">
                            <p id="disptext">Display Settings</p>
                            <p className="subtext">Ajustar configurações de vídeo</p>
                        </div>
                    </div>
                    <div className="submenu three" id="three">
                        <img className="sysimg" src={asset5} alt="" />
                        <div className="context">
                            <p id="systext">Network Settings</p>
                            <p className="subtext">Configurações de rede e internet</p>
                        </div>
                    </div>
                </div>
            </div>

             <div className="xmb-title messages">
                <img className="messages" src={asset6} alt="" />
                <p className="titletext">Photos</p>
                
                <div className="xmb-contents">
                    <div className="submenu one"  id="about">
                        <img id ="aboutimage" className="abimg" src={asset7} alt="" />
                        <p id="about">test</p>
                    </div>
                    <div className="submenu two" id="two">
                        <img className="twoimg" src={asset8} alt="" />
                        <p id="twotext">test</p>
                    </div>
                </div>
            </div>

            <div className="xmb-title music">
                <img className="messages" src={asset9} alt="" />
                <p className="titletext">Music</p>
                
                <div className="xmb-contents">
                    <div className="submenu one"  id="about">
                        <img id ="aboutimage" className="abimg" src={asset10} alt="" />
                        <p id="about">Minha música</p>
                    </div>
                    <div className="submenu two" id="two">
                        <img className="twoimg" src={asset11} alt="" />
                        <p id="twotext">Biggie</p>
                    </div>
                </div>
            </div>

            <div className="xmb-title videos">
                <img className="messages" src={asset12} alt="" />
                <p className="titletext">Video</p>
                
                <div className="xmb-contents">
                    <div className="submenu one"  id="about">
                        <img id ="aboutimage" className="abimg" src={asset13} alt="" />
                        <p id="about">YouTube</p>
                    </div>
                    <div className="submenu two" id="two">
                        <img className="twoimg" src={asset14} alt="" />
                        <p id="twotext">Amazon Prime Video</p>
                    </div>
                </div>
            </div>

            <div className="xmb-title games">
                <img className="messages" src={asset15} alt="" />
                <p className="titletext">Games</p>
                
                <div className="xmb-contents">
                    <div className="submenu one">
                        <img id ="aboutimage" className="abimg" src={asset16} alt="" />
                        <p id="about">Uncharted 3</p>
                    </div>
                    <div className="submenu two" id="two">
                        <img className="twoimg" src={asset17} alt="" />
                        <p id="twotext">God of War 3</p>
                    </div>
                </div>
            </div>

        </section>
    </main>


    </div>
    </>
  );
};

export default PlayGameJam;
