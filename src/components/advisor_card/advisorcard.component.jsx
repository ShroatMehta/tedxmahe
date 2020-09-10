import React from 'react'
import '../advisor_card/advisorcard.styles.scss'
export const AdvisorCard = ({name,photo,link,position})=>(
    <div className = 'card-container-2' >
    <a href = {link} target="_blank">
    <div className = 'image-container-2' onClick style={
        {
            backgroundImage:`url(${photo})`,
            backgroundPosition:'center',
            backgroundSize:'cover'
        }  
    }>

       </div> 
       </a>
        <h2 className = "name">{name}</h2>
        <h3 className = "position">{position}</h3>
        
    </div>
)
export default AdvisorCard;
