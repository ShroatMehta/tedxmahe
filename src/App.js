import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage.page';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'; 
import Team from './components/team/team';
import Registrationform from './components/register/registrationform';




function App() {
  return (
    
    <div className="App">

     <HomePage/>
      
      
      
     
      
    </div>
    
  );
}

export default App;
