import React, { useState } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Placeholder images - replace these with actual project images
    const images = [
        'https://placehold.co/600x400/png',
        'https://placehold.co/600x400/png',
        'https://placehold.co/600x400/png'
    ];

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
                        
                        <h3>Key Features</h3>
                        <ul>
                            <li>Feature 1: Lorem ipsum dolor sit amet</li>
                            <li>Feature 2: Consectetur adipiscing elit</li>
                            <li>Feature 3: Sed do eiusmod tempor incididunt</li>
                        </ul>

                        <h3>Technical Details</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div className="modal-links">
                        <a 
                            href={project.link} 
                            className="modal-button primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </a>
                        <a 
                            href={project.github || '#'} 
                            className="modal-button secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal; 