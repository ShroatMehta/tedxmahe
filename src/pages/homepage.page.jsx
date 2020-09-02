import React from "react";
import { Sidebar } from "../components/sidebar/sidebar.component";
import {Gif} from '../utils/Countdown_Logo.gif';
import  "./homepage.styles.scss";

export const HomePage = () => (
  <div className="homepage">
    <Sidebar />

    <section className = "info">
        <div className = 'gif'>
            <h1 className = "uptext">WE CAN CHANGE CLIMATE CHANGE.</h1>
            <img className = "countdown-logo" src  ='https://i.imgur.com/5JkOF5t.gif'  alt = "sf" />
        </div>
    </section>
  </div>
);
