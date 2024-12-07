import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Project from '../../components/project/Project'
import './Work.css'

const Work = () => {
    return (
        <div className="work-container">
            <Navbar />
            
            <main className="work-content">
                <h1 className="work-title">My Projects</h1>
                <Project />
            </main>

            <Footer />
        </div>
    )
}

export default Work
