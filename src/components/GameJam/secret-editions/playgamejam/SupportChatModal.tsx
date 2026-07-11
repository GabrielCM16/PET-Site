import React, { useEffect, useState, useRef } from 'react';
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

const SupportChatModal: React.FC<SupportChatModalProps> = ({ onClose }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        setMessages([
            { id: 1, text: "Bem-vindo ao Suporte da PlayStation®Network.", sender: 'agent', time: timeString },
            { id: 2, text: "Olá! Como posso ajudar você hoje?", sender: 'agent', time: timeString }
        ]);
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    
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

    const handleSend = () => {
        if (!inputText.trim()) return;

        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const userMsg: Message = {
            id: Date.now(),
            text: inputText,
            sender: 'user',
            time: timeString
        };

        setMessages(prev => [...prev, userMsg]);
        setInputText('');

        setTimeout(() => {
            const agentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const agentMsg: Message = {
                id: Date.now() + 1,
                text: "mensagem respondida",
                sender: 'agent',
                time: agentTime
            };
            setMessages(prev => [...prev, agentMsg]);
        }, 1000);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.stopPropagation();
            handleSend();
        }
    };

    return (
        <div className="psn-modal-overlay">
            <div className="psn-chat-container">
                <div className="psn-chat-header">
                    <h2>Suporte PSN</h2>
                    <button className="psn-close-btn" onClick={onClose}>X</button>
                </div>
                
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
            </div>
        </div>
    );
};

export default SupportChatModal;
