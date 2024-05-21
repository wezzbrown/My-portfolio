import React from 'react';
// import './App.css';
import Image4 from '../assets/image/image4.png'


const Header = () => {
  return (
    <header className="header">
      <h1>WEZZDEV</h1>
      <div className='port-header'>

      <nav>
        <ul>

          <li><a href="#profile">Profile</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      </div>
      {/* <img src={Image4} alt="Profile" className="header-pic" /> */}
    </header>
  );
};

export default Header;

