import React from 'react'
import './projectcard.styles.scss'
export const ProjectCard = ({name,photo,link,position})=>(
    <div className = 'project-container'>
        <h2 className = "name">{name}</h2>
    <a href = {link} target="_blank">
    
    <div className = 'image-container' onClick style={
        {
            backgroundImage:`url(${photo})`,
            backgroundPosition:'center',
            backgroundSize:'cover'
        }  
    }>
       </div> 
       </a>
        
        <p className = "position">{position}</p>
        
    </div>
)
export default ProjectCard;
