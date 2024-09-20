import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
	<header className="header">
	  <div className="logo">
		<a href="/">MyLogo</a>
	  </div>
	  <nav className="nav">
		<ul>
		  <li><a href="#projects">My Projects</a></li>
		  <li><a href="#about">About Me</a></li>
		  <li><a href="#contact">Contact Me</a></li>
		</ul>
	  </nav>
	</header>
  );
};

export default Header;