import React from 'react';
import '../styles/Header.css';

const Header = () => {
	return (
		<header className="header">
			<div className="logo">
				<a href="#landing-page">My Portfolio</a>
			</div>
			<nav className="nav">
				<ul>
					<li>
						<a href="#about">About</a>
						<div className="glowing-lines">
							<div className="line red"></div>
						</div>
					</li>
					<li>
						<a href="#projects">Projects</a>
						<div className="glowing-lines">
							<div className="line yellow"></div>
						</div>
					</li>
					<li>
						<a href="#contact">Contact</a>
						<div className="glowing-lines">
							<div className="line green"></div>
						</div>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;