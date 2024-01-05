import React from 'react';

function Projects() {
  return (
    <div>
      <h3>Projects</h3>
      <p>
        I want to mention I only have two projects to show off due to still
        learning.
      </p>
      <ul>
        <li>
          This project "PracticeW1" it uses HTML and CSS. This project is
          practice project that I have been using all week to learn and practice
          at my first week at Epicodus.
          <a href="https://github.com/simioyin222/PracticeW1">
            <span className="work-highlight">click here</span>
          </a>
        </li>
        <li>
          This project "Simi-Portfolio1" it uses HTML and CSS. This project is
          what I am currently in real time working on and hopefully submitting
          for 100%.
          <a href="https://github.com/simioyin222/SIMI-PORTFOLIO1">
            <span className="work-highlight">click here</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;