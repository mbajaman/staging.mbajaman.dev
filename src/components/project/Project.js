import React, { useState } from 'react'
import './Project.css'
import projectsData from '../../data/projects.json'

const Project = () => {
    const { projects } = projectsData
    const [flippedCards, setFlippedCards] = useState({})

    const handleCardClick = (projectName) => {
        setFlippedCards(prev => ({
            ...prev,
            [projectName]: !prev[projectName]
        }))
    }

    return (
        <div className="project">
            <div className="project__content">
                {projects.map((project) => (
                    <div 
                        className={`project-card ${flippedCards[project.name] ? 'flipped' : ''}`}
                        key={project.name}
                        onClick={() => handleCardClick(project.name)}
                    >
                        <div className="project-card__inner">
                            <div className="project-card__front">
                                <div className="project-card__tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="project-card__tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="project-card__image">
                                    <img 
                                        src={`https://placehold.co/600x400/png`} 
                                        alt={project.name}
                                    />
                                </div>
                                <h3 className="project-card__title">{project.name}</h3>
                            </div>
                            <div className="project-card__back">
                                <h3 className="project-card__title">{project.name}</h3>
                                <p className="project-card__description">{project.description}</p>
                                <a 
                                    href={project.link} 
                                    className="project-card__link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project
