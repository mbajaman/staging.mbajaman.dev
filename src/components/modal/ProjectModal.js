import React, { useState } from 'react';
import './ProjectModal.css';
import githubIcon from '../../assets/social-icons/github.svg';
import youtubeIcon from '../../assets/social-icons/youtube.svg';
import itchIcon from '../../assets/social-icons/itchio.svg';
const ProjectModal = ({ project, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Function to get image URL dynamically
    const getImageUrl = (imagePath) => {
        try {
            return require(`../../${imagePath}`)
        } catch (err) {
            return 'https://placehold.co/600x400/png'
        }
    }

    // Get all image URLs
    const images = project.images?.map(path => getImageUrl(path)) || [];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                
                <div className="modal-gallery">
                    <button className="gallery-nav prev" onClick={prevImage}>&lt;</button>
                    <img src={images[currentImageIndex]} alt={`${project.name} ${currentImageIndex + 1}`} />
                    <button className="gallery-nav next" onClick={nextImage}>&gt;</button>
                    <div className="gallery-dots">
                        {images.map((_, index) => (
                            <span 
                                key={index} 
                                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="modal-details">
                    <h2>{project.name}</h2>
                    
                    <div className="modal-tags">
                        {project.tags.map(tag => (
                            <span key={tag} className="modal-tag">{tag}</span>
                        ))}
                    </div>

                    <div className="modal-description">
                        <h3>Overview</h3>
                        <p>{project.description}</p>
                        
                        <h3>Details</h3>
                        <ul>
                            {project.details.map(detail => (
                                <li key={detail}>{detail}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="modal-links">
                        {project.itchLink && (
                            <a 
                                href={project.itchLink} 
                                className="modal-button secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="modal-button-icon" src={itchIcon} alt="itch.io" />
                                itch.io
                            </a>
                        )}
                        <a 
                            href={project.githubLink} 
                            className="modal-button secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="modal-button-icon" src={githubIcon} alt="GitHub" />
                            GitHub
                        </a>
                        {project.youtubeLink && (
                            <a 
                                href={project.youtubeLink} 
                                className="modal-button secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                        >
                            <img className="modal-button-icon" src={youtubeIcon} alt="YouTube" />
                            YouTube
                        </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal; 