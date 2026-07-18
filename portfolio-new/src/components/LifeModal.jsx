import { useEffect } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './LifeModal.css';

export default function LifeModal({ photos, currentIndex, onClose, onPrev, onNext }) {
    const photo = photos[currentIndex];
    
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    if (!photo) return null;

    return (
        <div className="life-modal-overlay" onClick={onClose}>
            <button className="life-modal-close-btn" onClick={onClose} aria-label="Close modal">
                <FiX size={24} />
            </button>
            
            <button 
                className="life-modal-nav-btn life-modal-nav-btn--prev" 
                onClick={(e) => { e.stopPropagation(); onPrev(); }} 
                aria-label="Previous photo"
            >
                <FiChevronLeft size={28} />
            </button>

            <div className="life-modal-content glass-strong" onClick={(e) => e.stopPropagation()}>
                <div className="life-modal-media-col">
                    <img src={photo.imageUrl} alt={photo.title} className="life-modal-img" />
                </div>
                <div className="life-modal-text-col">
                    <div className="life-modal-header">
                        <span className="life-modal-category">{photo.category}</span>
                        <span className="life-modal-date">{photo.date}</span>
                    </div>
                    <h2 className="life-modal-title">{photo.title}</h2>
                    <div className="life-modal-divider"></div>
                    <div className="life-modal-body">
                        <p>{photo.longDescription}</p>
                    </div>
                </div>
            </div>

            <button 
                className="life-modal-nav-btn life-modal-nav-btn--next" 
                onClick={(e) => { e.stopPropagation(); onNext(); }} 
                aria-label="Next photo"
            >
                <FiChevronRight size={28} />
            </button>
        </div>
    );
}
