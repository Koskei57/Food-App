import React, { useState } from 'react';
import "./css/Navbar.css";
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    const [nav, setNav] = useState(false);
    
  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNav(true);
    } else {
      setNav(false);
    }
  }
  window.addEventListener("scroll", changeBackground);  
  return (
    
    <>
    
      <nav>
       
        <div className="nav_box">
        <span  className="shop">MyFood </span>
        <NavLink className="navlink" to="/"><i class="fi fi-sr-home"></i>Home</NavLink>
        <NavLink className="navlink" to="/food">Food</NavLink>
        <NavLink className="navlink" to="/login" >Login</NavLink>
        <NavLink className="navlink" to="/foodlist">Catalogue</NavLink>
         
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