import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage.page.jsx';
import Sidebar from './components/sidebar/sidebar.component';
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import TeamPage from './pages/team_page/teampage.page';
import RegisterPage from './pages/register/registerpage.page';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Switch>
          <Route path = "/" exact component = {HomePage}/>
          <Route path = "/team" exact component = {TeamPage}/>
          <Route path = "/register" exact component = {RegisterPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
