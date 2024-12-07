import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './Work.css'

const Work = () => {
    return (
        <div className="work-container">
            <Navbar />
            
            <main className="work-content">
                <div className="work-placeholder">
                    <h1>Portfolio Work</h1>
                    <p>Coming Soon</p>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Work
