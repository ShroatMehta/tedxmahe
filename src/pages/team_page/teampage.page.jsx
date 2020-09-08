import React from "react"
import TeamGrid from "../../components/team_grid/team_grid.component"
import './teampage.styles.scss'
export const TeamPage = () =>(
    <div className = "team-page">
        <h1 className = "title">Meet the team</h1>
        <TeamGrid className = 'team-grid'/>
    </div>
)

export default TeamPage;