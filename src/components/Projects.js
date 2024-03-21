import React, { useState } from 'react';
import Modal from './Modal/Modal'; // Ensure the path is correct
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Projects.module.css'; // Ensure you have this CSS file for styling

function Projects() {
  const [projects] = useState([
    {
      name: 'DailyLife',
      description: 'HTML and CSS practice project from my first week at Epicodus.',
      link: 'https://github.com/simioyin222/DailyLife',
      thumbnail: process.env.PUBLIC_URL + '/img/IMG_3456.JPG', // Using process.env.PUBLIC_URL to get the correct path
    },
    {
      name: 'Simi-Portfolio1',
      description: 'Current real-time portfolio project using HTML and CSS.',
      link: 'https://github.com/simioyin222/SIMI-PORTFOLIO1',
      thumbnail: 'thumbnail2.jpg',
    }
    // Add more projects as needed
  ]);

  // You can still keep the modal logic if you want to show detailed info on click
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const handleClick = (project) => {
    setCurrentProject(project);
    setModalOpen(true); // Or directly navigate to the project.link
  };

  return (
    <div className={styles.projectsContainer}>
      <h3>Projects</h3>
      <div className={styles.gridContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectThumbnail} onClick={() => handleClick(project)}>
            <img src={project.thumbnail} alt={project.name} className={styles.thumbnailImage} />
            <div className={styles.thumbnailOverlay}>
              <div className={styles.projectTitle}>{project.name}</div>
              {/* Add more details in overlay or a button to view more */}
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>{currentProject.name}</h2>
        <p>{currentProject.description}</p>
        <a href={currentProject.link} target="_blank" rel="noopener noreferrer">View Project</a>
        {/* Keep or remove the Slider depending on your design choice */}
      </Modal>
    </div>
  );
}

export default Projects;