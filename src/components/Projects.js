import React from 'react';
import '../styles/Projects.css';

const projects = [
  { title: 'Project 1', description: 'Description of project 1', image: 'path/to/image1.jpg' },
  { title: 'Project 2', description: 'Description of project 2', image: 'path/to/image2.jpg' },
  // Add more projects as needed
];

const Projects = () => {
  return (
	<section id="projects" className="projects">
	  <h2>My Projects</h2>
	  <div className="project-grid">
		{projects.map((project, index) => (
		  <div key={index} className="project-item">
			<img src={project.image} alt={project.title} />
			<h3>{project.title}</h3>
			<p>{project.description}</p>
		  </div>
		))}
	  </div>
	</section>
  );
};

export default Projects;