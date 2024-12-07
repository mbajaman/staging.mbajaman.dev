import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './Home.css'

// Import Media
import workGif from './work.gif'

// Import icons
import backendIcon from '../../assets/skill-icons/server-icon.svg'
import webIcon from '../../assets/skill-icons/www.svg'
import gameIcon from '../../assets/skill-icons/game-icon.svg'
import uiIcon from '../../assets/skill-icons/ui-icon.svg'
import githubIcon from '../../assets/social-icons/github.svg'
import linkedinIcon from '../../assets/social-icons/linkedin.svg'
import itchIcon from '../../assets/social-icons/itchio.svg'

const Home = () => {
    const roles = [
        'Software Engineer',
        2000,
        'Game Developer',
        2000,
        'IT Solutions Analyst',
        2000,
        'Unity Developer',
        2000,
        'Full Stack Developer',
        2000,
        'UE5 Developer',
        2000
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

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/mbajaman', icon: githubIcon },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mbajaman/', icon: linkedinIcon },
        { name: 'Itch', url: 'https://mbajaman.itch.io/', icon: itchIcon }
    ];

    const [activeSection, setActiveSection] = useState(0);

    // Add scroll event listener to track sections
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section-tracker');
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setActiveSection(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home-container">
            <Navbar />
            
            <main className="home-content">
                <div className="hero-section section-tracker">
                    <div className="hero-social-links-vertical">
                        {socialLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <img src={link.icon} alt={link.name} />
                            </a>
                        ))}
                    </div>
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
                        <div className="hero-actions">
                            <div className="cta-buttons">
                                <Link to="/portfolio" className="primary-button">
                                    View My Work
                                </Link>
                                <Link to="https://www.linkedin.com/in/mbajaman/" className="secondary-button">
                                    Let's Connect
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img src={workGif} alt="Developer working" />
                    </div>
                </div>

                <section className="skills-section section-tracker">
                    <h2 className="section-title">Skills</h2>
                    
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

                <div className="timeline-indicator">
                    {[0, 1].map((index) => (
                        <div
                            key={index}
                            className={`dot ${activeSection === index ? 'active' : ''}`}
                            onClick={() => {
                                const sections = document.querySelectorAll('.section-tracker');
                                sections[index].scrollIntoView({ behavior: 'smooth' });
                            }}
                        />
                    ))}
                </div>
            </main>
            
            <Footer />
        </div>
    )
}

export default Home