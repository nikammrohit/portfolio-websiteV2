import React from 'react';
import '../styles/Header.css';

const Header = () => {
	return (
		<header className="header">
			<div className="logo">
				<a href="#landing-page">My Portfolio</a>
				<div className="glowing-lines">
        			<div className="line red"></div>
        			<div className="line yellow"></div>
        			<div className="line green"></div>
      			</div>
			</div>
			<nav className="nav">
				<ul>
					<li><a href="#about">About</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;