import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Login from "./Login";
import "./css/Navbar.css";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  }
  window.addEventListener("scroll", changeBackground);  
  return (
    <nav>
       <div className="nav_box">
        <span className="shop">
          MyFood
        </span>
        <div className="cart" >
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>0</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar