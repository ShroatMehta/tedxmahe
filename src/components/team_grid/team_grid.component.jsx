import React from 'react';
import TeamCard from '../team_card/teamcard.component';
import AdvisorCard from '../advisor_card/advisorcard.component';
import './teamgrid.styles.scss'


import TEAM from '../../utils/team.utils';
import ADVISOR from '../../utils/advisor.utils';


export const TeamGrid = ()=>(
    <div>
        <h1 className="title">Advisory Board</h1>
        <div className = "card-list-2">
       
       {ADVISOR.map((team)=>(<AdvisorCard id = {team.id} name = {team.name} photo = {team.photo} link = {team.link} position = {team.position}/>))}
   </div>
   <h1 className="title">Organisers</h1>
   <div className = "card-list">
       {TEAM.map((team)=>(<TeamCard id = {team.id} name = {team.name} photo = {team.photo} link = {team.link} position = {team.position}/>))}
   </div>
            
    </div>
    
)

export default TeamGrid;