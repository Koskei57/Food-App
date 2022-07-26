import React, { useState } from 'react';
import { Link } from 'react-scroll';

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
    // useEffect(() => {
    //     setFood();
    // })
    
  return (
    <div className={nav ? "nav active" : "nav"}>
      <Link to='main' className='logo' >
      </Link>
      <input className='menu-btn' type="checkbox"></input>
    
    </div>
  )
}

export default Navbar