import React, { useEffect, useState } from 'react';
import './PhotosModal.css';

// Import default images to use in the carousel
import img1 from './images/frame_0039.jpg';
import img2 from './images/logo.png';
import img3 from './images/personagens.png';

interface PhotosModalProps {
    onClose: () => void;
}

const PhotosModal: React.FC<PhotosModalProps> = ({ onClose }) => {
    const images = [img1, img2, img3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        document.body.classList.add('psn-modal-open');
        
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            document.body.classList.remove('psn-modal-open');
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const nextImage = () => {
        setCurrentIndex(prev => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        e.currentTarget.style.setProperty('--x', `${x}%`);
        e.currentTarget.style.setProperty('--y', `${y}%`);
    };

    return (
        <div className="photos-modal-overlay">
            <div className="photos-modal-container">
                <div className="photos-modal-header">
                    <h2>Artes</h2>
                    <button className="photos-close-btn" onClick={onClose}>X</button>
                </div>
                
                <div className="photos-carousel-single">
                    <button className="photos-arrow left" onClick={prevImage}>&#10094;</button>
                    
                    <div className="photos-item-single" onMouseMove={handleMouseMove}>
                        <img src={images[currentIndex]} alt={`Arte ${currentIndex + 1}`} />
                    </div>

                    <button className="photos-arrow right" onClick={nextImage}>&#10095;</button>
                </div>
            </div>
        </div>
    );
};

export default PhotosModal;
