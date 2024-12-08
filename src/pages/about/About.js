import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './About.css'

// Import placeholder image - replace with your actual image
import placeholderImage from '../../assets/profile.jpg'

const About = () => {
    return (
        <div className="about-container">
            <Navbar />
            
            <main className="about-content">
                <div className="about-section">
                    <div className="about-image">
                        <img src={placeholderImage} alt="Mohammed Bajaman" />
                        <div className="image-overlay"></div>
                    </div>
                    
                    <div className="about-text">
                        <h1>About Me</h1>
                        <p className="subtitle">Software Engineer & Game Developer</p>
                        
                        <div className="about-description">
                            <p>
                                Hello! I'm Mohammed, a software engineer and game developer 
                                based in Vancouver, BC. I specialize in creating solutions 
                                through code, whether it's developing scalable software applications 
                                or creating fun to play games.
                            </p>
                            
                            <p>
                                With a background in software engineering, IT, game dev and AI, 
                                I bring a unique perspective to problem-solving. I enjoy learning
                                new things and applying them to real-world problems.
                            </p>
                            <p><i>Psst click the icons below to learn more about me!</i></p>

                            <div className="quick-info">
                                <div className="info-item">
                                    <span className="label">Location</span>
                                    <span className="value">Vancouver, BC</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">Email</span>
                                    <span className="value">mohammed_bajaman@hotmail.com</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">Degree</span>
                                    <span className="value">BTech (opt. Games Development)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default About
