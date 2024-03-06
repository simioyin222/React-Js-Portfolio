import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from './Modal/Modal'; // Adjust the path as necessary
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const [projects] = useState([
    // Assume each project now has an array of image URLs for the carousel
    {
      name: 'DailyLife',
      description: 'HTML and CSS practice project from my first week at Epicodus.',
      link: 'https://github.com/simioyin222/DailyLife',
      images: ['image1.jpg', 'image2.jpg'], // Add your image URLs here
    },
    {
      name: 'Simi-Portfolio1',
      description: 'Current real-time portfolio project using HTML and CSS.',
      link: 'https://github.com/simioyin222/SIMI-PORTFOLIO1',
      images: ['image3.jpg', 'image4.jpg'], // Add your image URLs here
    }
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  return (
    <div>
      <h3>Projects</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index} onClick={() => openModal(project)}>
            {project.name}
          </li>
        ))}
      </ul>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>{currentProject.name}</h2>
        <p>{currentProject.description}</p>
        <a href={currentProject.link} target="_blank" rel="noopener noreferrer">View Project</a>
        <Slider {...settings}>
          {currentProject.images && currentProject.images.map((img, index) => (
            <div key={index}>
              <img src={img} alt="Project" style={{ width: '100%' }} />
            </div>
          ))}
        </Slider>
      </Modal>
    </div>
  );
}

export default Projects;