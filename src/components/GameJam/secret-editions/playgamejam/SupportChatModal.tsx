import React, { useEffect, useState, useRef } from 'react';
import { db } from '../../../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './SupportChatModal.css';

interface SupportChatModalProps {
    onClose: () => void;
}

type Message = {
    id: number;
    text: string;
    sender: 'agent' | 'user';
    time: string;
}

const genericResponses = [
    "Consulta inválida.",
    "Reformule sua pergunta.",
    "Informação indisponível.",
    "Pergunta não reconhecida."
];

const SupportChatModal: React.FC<SupportChatModalProps> = ({ onClose }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    // Estados para o fluxo de conclusão
    const [isCompleted, setIsCompleted] = useState(false);
    const [teamName, setTeamName] = useState('');
    const [confirmationCode, setConfirmationCode] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        setMessages([
            { id: 1, text: "Bem-vindo ao Suporte da PlayStation®Network.", sender: 'agent', time: timeString },
            { id: 2, text: "Olá! Como posso ajudar você hoje?", sender: 'agent', time: timeString }
        ]);
    }, []);

    useEffect(() => {
        if (!isCompleted) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isCompleted]);
    
    useEffect(() => {
        document.body.classList.add('psn-modal-open');
        
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            document.body.classList.remove('psn-modal-open');
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const predefinedQuestions: { [key: string]: string } = {
        "quem sou eu": "Você é um participante autenticado.",
        "quem e voce": "Sou o Assistente Virtual da A&B Game Jam.",
        "quem e vc": "Sou o Assistente Virtual da A&B Game Jam.",
        "o que voce faz": "Respondo perguntas autorizadas.",
        "o que vc faz": "Respondo perguntas autorizadas.",
        "voce e uma ia": "Sou um sistema de consulta.",
        "vc e uma ia": "Sou um sistema de consulta.",
        "voce e humano": "Não.",
        "vc e humano": "Não.",
        "onde estou": "No ambiente final do enigma.",
        "o que e este lugar": "Ambiente de validação da A&B Game Jam.",
        "como termino o enigma": "A resposta deve ser encontrada por você.",
        "qual e a resposta": "Não posso responder.",
        "qual a resposta": "Não posso responder.",
        "me de uma dica": "Faça a pergunta certa.",
        "posso ganhar uma dica": "Faça a pergunta certa.",
        "dica": "Faça a pergunta certa."
    };

    const checkSecret = (input: string) => {
        const t = [97, 32, 109, 97, 105, 111, 114, 32, 101, 100, 105, 99, 97, 111, 32, 106, 97, 32, 114, 101, 97, 108, 105, 122, 97, 100, 97];
        const s = String.fromCharCode(...t);
        return input === s;
    };

    const handleSend = () => {
        const userText = inputText.trim();
        if (!userText) return;

        const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const normalizedInput = userText.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            
        const cleanedInput = normalizedInput.replace(/[?.,!]/g, "").trim();

        const userMsg: Message = {
            id: Date.now(),
            text: userText,
            sender: 'user',
            time: timeString
        };

        setMessages(prev => [...prev, userMsg]);
        setInputText('');

        setTimeout(() => {
            const agentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            let agentResponseText = "";
            let triggerCompletion = false;

            if (checkSecret(normalizedInput)) {
                agentResponseText = "Resposta correta. Desbloqueando registro do sistema...";
                triggerCompletion = true;
            } else if (predefinedQuestions[cleanedInput] !== undefined) {
                agentResponseText = predefinedQuestions[cleanedInput];
            } else if (normalizedInput.includes("game jam")) {
                agentResponseText = "O que ela é?";
            } else {
                const randomIndex = Math.floor(Math.random() * genericResponses.length);
                agentResponseText = genericResponses[randomIndex];
            }

            const agentMsg: Message = {
                id: Date.now() + 1,
                text: agentResponseText,
                sender: 'agent',
                time: agentTime
            };
            setMessages(prev => [...prev, agentMsg]);
            
            if (triggerCompletion) {
                setTimeout(() => {
                    setIsCompleted(true);
                }, 2000);
            }
        }, 1000 + Math.random() * 1500);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.stopPropagation();
            handleSend();
        }
    };
    
    const handleSaveTeam = async () => {
        if (!teamName.trim()) return;
        setIsSaving(true);
        const code = Math.random().toString(36).substring(2, 6).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
        
        try {
            await addDoc(collection(db, "enigmaFinal"), {
                nome: teamName,
                completedAt: serverTimestamp(),
                userAgent: navigator.userAgent,
                confirmationCode: code
            });
            setConfirmationCode(code);
        } catch (e) {
            console.error("Erro ao salvar documento:", e);
            alert("Ocorreu um erro ao salvar sua equipe. Tente novamente ou contate a organização.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="psn-modal-overlay">
            <div className="psn-chat-container">
                <div className="psn-chat-header">
                    <h2>Suporte PSN</h2>
                    <button className="psn-close-btn" onClick={onClose}>X</button>
                </div>
                
                {isCompleted ? (
                    <div className="psn-chat-messages completion-screen" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
                        {confirmationCode ? (
                            <div className="completion-success" style={{ animation: 'fadeIn 1s ease-in-out' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '10px', color: '#4caf50' }}>🎉 Parabéns!</h2>
                                <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#fff' }}>Sua conclusão foi registrada.</p>
                                <p style={{ color: '#ccc' }}>Código de confirmação:</p>
                                <h3 style={{ fontSize: '2.5rem', margin: '10px 0', letterSpacing: '3px', color: '#fff', backgroundColor: '#333', padding: '10px 20px', borderRadius: '8px' }}>{confirmationCode}</h3>
                                <p style={{ color: '#aaa', fontSize: '0.9rem', marginTop: '20px' }}>Apresente este código à organização para validar sua participação.</p>
                            </div>
                        ) : (
                            <div className="completion-form" style={{ animation: 'fadeIn 1s ease-in-out', width: '100%', maxWidth: '300px' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#4caf50' }}>🎉 Parabéns!</h2>
                                <p style={{ marginBottom: '15px', color: '#fff' }}>Informe o nome da equipe:</p>
                                <input 
                                    type="text" 
                                    value={teamName}
                                    onChange={(e) => setTeamName(e.target.value)}
                                    placeholder="Nome da Equipe"
                                    className="psn-chat-input"
                                    style={{ width: '100%', marginBottom: '20px', textAlign: 'center', fontSize: '1.1rem' }}
                                    disabled={isSaving}
                                />
                                <button 
                                    className="psn-send-btn" 
                                    onClick={handleSaveTeam} 
                                    disabled={isSaving || !teamName.trim()}
                                    style={{ width: '100%', padding: '15px', fontSize: '1.1rem' }}
                                >
                                    {isSaving ? "Registrando..." : "Salvar Equipe"}
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <div className="psn-chat-messages">
                            {messages.map(msg => (
                                <div key={msg.id} className={`psn-message ${msg.sender}`}>
                                    <p>{msg.text}</p>
                                    <p className="psn-time">{msg.time}</p>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        
                        <div className="psn-chat-input-area">
                            <input 
                                type="text" 
                                placeholder="Digite uma mensagem..." 
                                className="psn-chat-input"
                                value={inputText}
                                onChange={e => setInputText(e.target.value)}
                                onKeyDown={handleInputKeyDown}
                            />
                            <button className="psn-send-btn" onClick={handleSend}>Enviar</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SupportChatModal;
