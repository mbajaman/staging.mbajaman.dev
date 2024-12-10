import React from 'react'
import Project from '../../components/project/Project'
import './Work.css'

const Work = () => {
    return (
        <div id="work" className="work-container section-tracker">           
            <main className="work-content">
                <h1 className="work-title">My Projects</h1>
                <Project />
            </main>
        </div>
    )
}

export default Work
