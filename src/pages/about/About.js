import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './About.css'

const About = () => {
    return (
        <div className="about-container">
            <Navbar />
            
            <main className="about-content">
                <div className="about-placeholder">
                    <h1>About Me</h1>
                    <p>Work in Progress</p>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default About
