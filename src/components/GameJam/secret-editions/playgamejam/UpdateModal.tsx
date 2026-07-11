import React, { useEffect, useState } from 'react';
import './UpdateModal.css';

interface UpdateModalProps {
    onClose: () => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({ onClose }) => {
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        document.body.classList.add('psn-modal-open');
        
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' || e.key === 'Enter') {
                onClose();
            }
        };
        
        const addListenerTimeout = setTimeout(() => {
            window.addEventListener('keydown', handleKeyDown);
        }, 50);

        const timer = setTimeout(() => {
            setIsChecking(false);
        }, 4000);
        
        return () => {
            document.body.classList.remove('psn-modal-open');
            clearTimeout(addListenerTimeout);
            window.removeEventListener('keydown', handleKeyDown);
            clearTimeout(timer);
        };
    }, [onClose]);

    return (
        <div className="update-modal-overlay">
            <div className="update-modal-container">
                <div className="update-modal-header">
                    <h2>Atualização do sistema</h2>
                    <button className="update-close-btn" onClick={onClose}>X</button>
                </div>
                
                <div className="update-modal-content">
                    {isChecking ? (
                        <>
                            <div className="update-spinner"></div>
                            <p className="update-text">Procurando atualizações...</p>
                        </>
                    ) : (
                        <p className="update-text">A versão mais recente do software do sistema já está instalada.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;
