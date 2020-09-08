import React from 'react';
import TeamCard from '../team_card/teamcard.component';
import './teamgrid.styles.scss'


import TEAM from '../../utils/team.utils'

export const TeamGrid = ()=>(
    <div className = "card-list">
        {TEAM.map((team)=>(<TeamCard id = {team.id} name = {team.name} photo = {team.photo} link = {team.link}/>))}
    </div>
)

export default TeamGrid;