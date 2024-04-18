import React, { useState, useEffect } from 'react';
import "./Navbar.css";

export default function Navbar() {
  const [showNavList, setShowNavList] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowNavList(window.innerWidth <= 480);
    };

    // Call handleResize on initial load
    handleResize();

    // Add event listener to window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
     <div className='outer-nav'>
    <nav className="nav">
  <input type="checkbox" id="nav-check" />
  
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span />
      <span />
      <span />
    </label>
  </div>

  <div className="nav-headerA">  
  <img className='logo-image' src="logo.png" alt="" />
  </div>
  <div className="nav-header">
    <div className="nav-title">Logo</div>
  </div>
  {showNavList && (
    <ul className="nav-list">
      <li>
        <a href="#">SHOP</a>
      </li>
      <li>
        <a href="#">SKILLS</a>
      </li>
      <li>
        <a href="#">STORIES</a>
      </li>
      <li>
        <a href="#">ABOUT</a>
      </li>
      <li>
        <a href="#">CONTACT US</a>
      </li>
    </ul>
  )}
  <div className="nav-headerB" >
    <div className="nav-ti">
      <div className='images-container'>
    <img className='sub-logo' src="icons8-search-24.png" alt="" />
    <img className='sub-logo' src="icons8-heart-50.png" alt="" />
    <img className='sub-logo' src="icons8-bag-48.png" alt="" />
    <img className='sub-logo' src="icons8-user-48.png" alt="" />
      </div>
   <div>
   <p className='home'>HOME</p>
   </div>
    </div>
  </div>
</nav>
</div>
<div className='nav-down-small'>
  <p>SHOP</p>
  <p>SKILLS</p>
  <p>STORIES</p>
  <p>ABOUT</p>
  <p>CONTACT US</p>
</div>
    </>
  );
}
