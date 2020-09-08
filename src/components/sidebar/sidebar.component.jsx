import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.styles.scss'
export const Sidebar = (history,match) =>(
    
    <aside className = "sidebar-container">
        <div className = 'content'>
            <h1 className ="nav-item">Home</h1>
            <h1 className ="nav-item">About</h1>
            <Link className = 'link' to = '/team'>
            <h1 className ="nav-item">Team</h1>
            </Link>
            <h1 className ="nav-item">contact</h1>
            <h1 className ="nav-item last">Register</h1>
        </div>
    </aside>
)

export default Sidebar