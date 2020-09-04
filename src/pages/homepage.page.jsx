import React from "react";
import Sidebar  from "../components/sidebar/sidebar.component.jsx";
import {Gif} from '../utils/Countdown_Logo.gif';
import  "./homepage.styles.scss";
import "../components/sidebar/sidebar.styles.scss"

export const HomePage = () => (
  <div className="homepage">
    <Sidebar />
    
    <section className = "info">
      <div className = 'gif'>
            <h1 className = "uptext">WE CAN CHANGE CLIMATE CHANGE.</h1>
            <img className = "countdown-logo" src  ={require('../utils/Countdown_Logo.gif')}   alt = "sf" />
            <h1 className = "date">10th to 18th October</h1>
            <span className = "hashtag">#JoinTheCountdown</span>
  
      </div>
    </section>
    <section className = "about">
      <h1>ABOUT</h1>
        <div para1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      <h1>Who are we?</h1>
        <div para1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      <h1>How can you help?</h1>
        <div para1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </section>
      <section className = "photos">
      <img src = {require('../utils/left.png')}/>
      <img src = {require('../utils/globe.png')}/>
      <img src = {require('../utils/right.png')}/>
    </section>
  </div>
  
);
