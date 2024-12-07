import React, { useState, useEffect } from 'react'
import './Project.css'
import projectsData from '../../data/projects.json'

const Project = () => {
    const { projects } = projectsData
    const [flippedCards, setFlippedCards] = useState({})
    const [selectedTag, setSelectedTag] = useState('all')
    const [filteredProjects, setFilteredProjects] = useState(projects)
    
    // Separate programming languages from other tags
    const programmingTags = ['React', 'Node.js', 'TypeScript', 'C#', 'UE5', 'Unity']
    const otherTags = ['PCG', 'Storytelling', 'Level Design']
    
    // Get unique tags from all projects, separated by category
    const allProgrammingTags = ['all', ...new Set(projects.flatMap(project => 
        project.tags.filter(tag => programmingTags.includes(tag))
    ))]
    const allOtherTags = [...new Set(projects.flatMap(project => 
        project.tags.filter(tag => otherTags.includes(tag))
    ))]

    useEffect(() => {
        if (selectedTag === 'all') {
            setFilteredProjects(projects)
        } else {
            const filtered = projects.filter(project => 
                project.tags.includes(selectedTag)
            )
            setFilteredProjects(filtered)
        }
    }, [selectedTag, projects])

    const handleCardClick = (projectName) => {
        setFlippedCards(prev => ({
            ...prev,
            [projectName]: !prev[projectName]
        }))
    }

    return (
        <div className="project">
            <div className="project__filter">
                <div className="filter-section">
                    <span className="filter-label">Technologies</span>
                    <div className="filter-tags">
                        {allProgrammingTags.map((tag) => (
                            <button
                                key={tag}
                                className={`filter-tag ${selectedTag === tag ? 'active' : ''}`}
                                onClick={() => setSelectedTag(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
                
                {allOtherTags.length > 0 && (
                    <>
                        <div className="filter-divider">
                            <span></span>
                        </div>

                        <div className="filter-section">
                            <span className="filter-label">Categories</span>
                            <div className="filter-tags">
                                {allOtherTags.map((tag) => (
                                    <button
                                        key={tag}
                                        className={`filter-tag ${selectedTag === tag ? 'active' : ''}`}
                                        onClick={() => setSelectedTag(tag)}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
            
            <div className="project__content">
                {filteredProjects.map((project) => (
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
