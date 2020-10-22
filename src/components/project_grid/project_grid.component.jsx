import React from 'react';
import ProjectCard from '../project_card/projectcard.component';
import './projectgrid.styles.scss'


import PROJECTS from '../../utils/project.utils'

export const ProjectGrid = ()=>(
    <div className = "card-list">
        {PROJECTS.map((team)=>(<ProjectCard id = {team.id} name = {team.name} photo = {team.photo} link = {team.link} position = {team.position}/>))}
    </div>
)

export default ProjectGrid; 