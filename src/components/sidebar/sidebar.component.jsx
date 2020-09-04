import React from 'react'
import './sidebar.styles.scss'
export const Sidebar = () =>(
    
    <aside className = "sidebar-container">
        <div className = 'content'>
            <h1 className ="nav-item">Home</h1>
            <h1 className ="nav-item">About</h1>
            <h1 className ="nav-item">Contact</h1>
            <h1 className ="nav-item">Team</h1>
            <h1 className ="nav-item last">Register</h1>
        </div>
    </aside>
)