import React from 'react';
import '../styles/Projects.css';

const projects = [
  { id: 1, title: 'Automated Data Manipulation Tool', description: 'Built as a project for the Biomedical Microdevices and Nanotechnology Lab. It is a tool which automatically assesses and configures data values to return them with an error percentage below 5%.', url: 'https://github.com/nikammrohit/Automated-ZView'},
  { id: 2, title: 'Realtime Messaging Application', description: 'A realtime chat app made with React and Node.js with a clean and simple UI. This application can register new users, and allows exisiting users to message others with realtime updates.', url: 'https://github.com/nikammrohit/Chat-App' },
  { id: 3, title: 'Facial Recognition Software', description: 'A facial recognition program which will be able to locate and identify faces within an image using OpenCV', url: 'https://github.com/nikammrohit/Image-Facial-Recognition' },
  { id: 4, title: 'Expense Tracker Web Application', description: 'A simple web application to track and manage personal expenses using Flask and SQLite. This project allows users to add, view, and delete expenses, providing a straightforward interface for financial management.', url: 'https://github.com/nikammrohit/Expense-Tracker' },
  { id: 5, title: 'Task Manager IOS App', description: 'A simple yet visually engaging iOS To-Do List application that helps users manage tasks efficiently. Built with Swift and UIKit, this app uses animations to enhance the user experience and improve task management flow.', url: 'https://github.com/nikammrohit/Animated-To-Do-App' },
  { id: 6, title: 'Movie Catalog Website', description: 'A small searchable movie catelog build using ReactJS', url: 'https://github.com/nikammrohit/Small-Movie-Catelog' },
  // Add more projects as needed
];

const Projects = () => {
  return (
	<section id="projects" className="my-projects">
	  <h2>My Projects</h2>
	  <div className="projects-container">
		{projects.map((project, index) => (
		  <a key={project.id} href={project.url} className={`project-card ${index % 5 === 0 ? 'large' : ''}`} target="_blank" rel="noopener noreferrer">
			<h3>{project.title}</h3>
			<p>{project.description}</p>
		  </a>
		))}
	  </div>
	</section>
  );
};

export default Projects;