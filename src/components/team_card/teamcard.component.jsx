import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import './teamcard.styles.scss'
export const TeamCard = ({name,photo,link,position})=>(
    <div className = 'card-container' >
    <a href = {link} target="_blank">
    <div className = 'image-container' onClick style={
        {
            backgroundImage:`url(${photo})`,
            backgroundPosition:'center',
            backgroundSize:'cover'
        }  
    }>
    <FontAwesomeIcon className = "linkedin" size = "5x" icon={faLinkedinIn}/>
       </div> 
       </a>
        <h2 className = "name">{name}</h2>
        <h3 className = "position">{position}</h3>
        
    </div>
)
export default TeamCard;
