import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './Home.css'

// Import Media
import workGif from './work.gif'

// Import icons
import backendIcon from '../../assets/server-icon.svg'
import webIcon from '../../assets/www.svg'
import gameIcon from '../../assets/game-icon.svg'
import uiIcon from '../../assets/ui-icon.svg'

const Home = () => {
    const roles = [
        'Full Stack Developer',
        2000, // Delay in milliseconds
        'Game Developer',
        2000,
        'IT Solutions Analyst',
        2000,
        'Software Engineer',
        2000,
        'Unity Developer',
        2000,
    ];

    const skillCards = [
        {
            icon: uiIcon,
            title: "Software Engineering",
            description: "Building scalable and efficient software solutions"
        },
        {
            icon: gameIcon,
            title: "Game Development",
            description: "Developing engaging gaming experiences"
        },
        {
            icon: backendIcon,
            title: "IT Solutions",
            description: "Building and securing IT applications"
        },
        {
            icon: webIcon,
            title: "Web Development",
            description: "Crafting modern and responsive web applications"
        }
    ];

    return (
        <div className="home-container">
            <Navbar />
            
            <main className="home-content">
                <div className="hero-section">
                    <div className="hero-text">
                        <h1>
                            Hello, I'm
                            <span className="highlight"> Mohammed</span>
                        </h1>
                        <h2>
                            a <span className="typewriter">
                                <TypeAnimation
                                    sequence={roles}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    cursor={true}
                                />
                            </span>
                        </h2>
                        <p className="subtitle">
                            Passionate about creating elegant solutions through code. 
                            Specializing in software engineering, game development, and IT solutions.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/portfolio" className="primary-button">
                                View My Work
                            </Link>
                            <Link to="/contact" className="secondary-button">
                                Let's Connect
                            </Link>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img src={workGif} alt="Developer working" />
                    </div>

                    <div className="timeline-indicator">
                        <div className="dot active"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>

                <section className="skills-section">
                    <h2 className="section-title">Skill-Set</h2>
                    
                    <div className="skills-grid">
                        {skillCards.map((card, index) => (
                            <div className="skill-card" key={index}>
                                <img 
                                    src={card.icon} 
                                    alt={card.title}
                                    className="skill-icon"
                                />
                                <h4>{card.title}</h4>
                                <p>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    )
}

export default Home