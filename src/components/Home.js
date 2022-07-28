import React from 'react';
import home from "../images/home.jpg"

import "./css/home.css";

const HomeList = () => {
  return (
    <div className='images'>
     <img src={home} alt="Home" className='homeImg'></img>
    </div>
  )
}

export default HomeList;
