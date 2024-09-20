import React from 'react';
import '../styles/Projects.css';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of project 1' },
  { id: 2, title: 'Project 2', description: 'Description of project 2' },
  { id: 3, title: 'Project 3', description: 'Description of project 3' },
  { id: 4, title: 'Project 4', description: 'Description of project 4' },
  { id: 5, title: 'Project 5', description: 'Description of project 5' },
  // Add more projects as needed
];

const Projects = () => {
  return (
	<section id="projects" className="my-projects">
	  <h2>My Projects</h2>
	  <div className="projects-container">
		{projects.map((project) => (
		  <div key={project.id} className="project-card">
			<h3>{project.title}</h3>
			<p>{project.description}</p>
		  </div>
		))}
	  </div>
	</section>
  );
};

export default Projects;