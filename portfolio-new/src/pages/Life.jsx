import { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import LifeModal from '../components/LifeModal';
import './Life.css';

export default function Life() {
    const [lifeData, setLifeData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

    useEffect(() => {
        // Fetch with cache-busting parameter to ensure immediate updates
        fetch(`https://raw.githubusercontent.com/ChamithDilshan/portfolio-assets/main/life/life-data.json?t=${Date.now()}`)
            .then(res => {
                if (!res.ok) throw new Error('Failed to load life data');
                return res.json();
            })
            .then(data => {
                setLifeData(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Error fetching life data:", err);
                setError(err.message);
                setIsLoading(false);
            });
    }, []);
    const categories = ['All', 'Nature', 'Travel', 'Street'];

    const filteredPhotos = selectedCategory === 'All'
        ? lifeData
        : lifeData.filter(photo => photo.category === selectedCategory);

    const openLightbox = (index) => {
        setSelectedPhotoIndex(index);
    };

    const closeLightbox = () => {
        setSelectedPhotoIndex(null);
    };

    const showPrevPhoto = () => {
        setSelectedPhotoIndex((prevIndex) => 
            prevIndex === 0 ? filteredPhotos.length - 1 : prevIndex - 1
        );
    };

    const showNextPhoto = () => {
        setSelectedPhotoIndex((prevIndex) => 
            prevIndex === filteredPhotos.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="page-wrapper life-page">
            <section className="page-header">
                <h1 className="page-header__title gradient-text-life">Life & Photography</h1>
                <p className="page-header__subtitle">A visual journal of personal updates, travel stories, and moments in between.</p>
            </section>

            <section className="section">
                {/* Filters */}
                <div className="life-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`life-filter-btn ${selectedCategory === category ? 'life-filter-btn--active' : ''}`}
                            onClick={() => {
                                setSelectedCategory(category);
                                closeLightbox(); // Close modal to prevent index out of bounds
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                {isLoading && <p style={{textAlign: 'center', margin: '4rem 0'}}>Loading photos...</p>}
                {error && <p style={{textAlign: 'center', color: 'red', margin: '4rem 0'}}>Error loading photos: {error}</p>}
                
                {!isLoading && !error && (
                    <div className="masonry-grid">
                        {filteredPhotos.map((photo, index) => (
                            <ScrollReveal key={photo.id || index} delay={index * 80}>
                                <div className="masonry-item" onClick={() => openLightbox(index)}>
                                    <div className="photography-card">
                                        <div className="photography-card__img-wrapper">
                                            <img 
                                                src={photo.imageUrl} 
                                                alt={`${photo.title} photo by Chamith Ranathunga`} 
                                                className="photography-card__img" 
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="photography-card__overlay">
                                            <div className="photography-card__content">
                                                <span className="photography-card__category">{photo.category}</span>
                                                <h3 className="photography-card__title">{photo.title}</h3>
                                                <p className="photography-card__caption">{photo.shortDescription}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </section>

            {/* Lightbox / Modal */}
            {selectedPhotoIndex !== null && (
                <LifeModal
                    photos={filteredPhotos}
                    currentIndex={selectedPhotoIndex}
                    onClose={closeLightbox}
                    onPrev={showPrevPhoto}
                    onNext={showNextPhoto}
                />
            )}
        </div>
    );
}
