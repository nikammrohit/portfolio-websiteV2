import React from 'react';
import '../styles/Projects.css';

const projects = [
  { id: 1, title: 'Automated Data Manipulation Tool', description: 'Description of project 1', url: 'https://github.com/nikammrohit/Automated-ZView'},
  { id: 2, title: 'Realtime Messaging Application', description: 'Description of project 2', url: 'https://github.com/nikammrohit/Chat-App' },
  { id: 3, title: 'Facial Recognition Software', description: 'Description of project 3', url: 'https://github.com/nikammrohit/Image-Facial-Recognition' },
  { id: 4, title: 'Expense Tracker Web Application', description: 'Description of project 4', url: 'https://github.com/nikammrohit/Expense-Tracker' },
  { id: 5, title: 'Task Manager IOS App', description: 'Description of project 5', url: 'https://github.com/nikammrohit/Animated-To-Do-App' },
  { id: 6, title: 'Movie Catalog Website', description: 'Description of project 6', url: 'https://github.com/nikammrohit/Small-Movie-Catelog' },
  // Add more projects as needed
];

const Projects = () => {
  return (
	<section id="projects" className="my-projects">
	  <h2>My Projects</h2>
	  <div className="projects-container">
		{projects.map((project) => (
		  <a key={project.id} href={project.url} className="project-card" target="_blank" rel="noopener noreferrer">
			<h3>{project.title}</h3>
			<p>{project.description}</p>
		  </a>
		))}
	  </div>
	</section>
  );
};

export default Projects;