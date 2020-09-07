import React from 'react';
import './register.css';
import { Sidebar } from "../sidebar/sidebar.component.jsx";

const Form = () => {
    
    return(
        <div >
            <Sidebar/>
            <div className="form1">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScfnmAizI30iQfwkKiHaFnxXZCJqlJFnJpO1V1u253qCkv1og/viewform?embedded=true" width="600" height="100" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

            </div>

        </div>
        
       
    );
};

export default Form;
