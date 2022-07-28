import React from 'react';
import home from "../images/home.jpg"
import Footer from '../components/Footer';

import "./css/home.css";

const HomeList = () => {
  return (
    <div className='images'>
      <p>Feeling Hungry ?
        <br/>
        Well look no further, we've got you
        <br/>
        Try out our amazing meals ranging from different categories of foods
        </p>
      <img src={home} alt="Home" className='homeImg'></img>
      <Footer/>
    </div>
  )
}

export default HomeList;
