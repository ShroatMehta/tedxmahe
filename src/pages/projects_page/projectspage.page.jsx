import React from "react"
import './projectspage.style.scss'
import ProjectGrid from '../../components/project_grid/project_grid.component'
export const ProjectPage = () =>(
    <div className = "Project-page">
    
    <div className = "project-page">
        <h1 className = "title">Projects</h1>
        <ProjectGrid className = 'project-grid'/>
    </div>
        
    </div>
)

export default ProjectPage;