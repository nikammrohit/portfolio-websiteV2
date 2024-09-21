import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import '../App.css';

function App() {
  return (
	<div className="App">
	  <Header />
	  <div className="content-wrapper">
		<LandingPage />
	  </div>
	  <Contact />
	  <Footer />
	</div>
  );
}

export default App;