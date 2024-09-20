import React, { useState, useEffect } from 'react';
import '../styles/LandingPage.css';

const greetings = ['Hi', 'Hola', 'Bonjour', 'Hallo', 'Ciao', 'こんにちは', '안녕하세요', '你好', 'Привет', 'مرحبا'];

const LandingPage = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
	const interval = setInterval(() => {
	  setFade(true);
	  setTimeout(() => {
		setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
		setFade(false);
	  }, 500); // Duration of the fade-out effect
	}, 3000);

	return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
	const projectsSection = document.getElementById('projects');
	if (projectsSection) {
	  projectsSection.scrollIntoView({ behavior: 'smooth' });
	}
  };

  return (
	<section id="landing-page" className="landing-page">
	  <h1>
		<span className={fade ? 'fade-out' : 'fade-in'}>{greetings[greetingIndex]}</span>, I'm Rohit
	  </h1>
	  <p>Welcome to my portfolio website.</p>
	  <button onClick={handleScroll} className="cta-button">View My Work</button>
	</section>
  );
};

export default LandingPage;