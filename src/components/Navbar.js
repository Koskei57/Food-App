import React, { useState } from 'react';
import "./css/Navbar.css";
import { NavLink } from 'react-router-dom';



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
    
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/food">Food</NavLink>
        <NavLink to="/login">Login</NavLink>
       <div className="nav_box">
          <span className="shop">MyFood </span>
        <div className="cart" >
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>0</span>
        </div>
      </div>
      </nav>
    </>
  )
}

export default Navbar