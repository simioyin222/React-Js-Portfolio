import React, { useState } from 'react';

function Projects() {
  const [projects] = useState([
    {
      name: 'DailyLife',
      description: 'HTML and CSS practice project from my first week at Epicodus.',
      link: 'https://github.com/simioyin222/DailyLife'
    },
    {
      name: 'Simi-Portfolio1',
      description: 'Current real-time portfolio project using HTML and CSS.',
      link: 'https://github.com/simioyin222/SIMI-PORTFOLIO1'
    }
  ]);

  return (
    <div>
      <h3>Projects</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            {project.name}: {project.description}
            <a href={project.link}>View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;