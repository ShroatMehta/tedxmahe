import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.styles.scss'
export const Sidebar = (history,match) =>(
    
    <aside className = "sidebar-container">
        <div className = 'content'>
            <Link className = 'link' to = '/'>
            <h1 className ="nav-item">Home</h1>
            </Link>
            <h1 className ="nav-item">About</h1>
            <Link className = 'link' to = '/team'>
            <Link className = 'link' to = '/projects'>
            <h1 className ="nav-item">Projects</h1>
            </Link>
            <h1 className ="nav-item">Team</h1>
            </Link>
            <Link className = 'link' to = '/register'>
            <h1 className ="nav-item">Register</h1>
            </Link>
        </div>
    </aside>
)

export default Sidebar