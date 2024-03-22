import React from 'react';
import styles from './about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faCss3Alt, faHtml5, faAdobe, faCanva, faFigma, faAngular, faBootstrap} from '@fortawesome/free-brands-svg-icons';

function About() {
  const skills = [
      { name: 'JavaScript', icon: faJsSquare },
      { name: 'React', icon: faReact },
      { name: 'CSS', icon: faCss3Alt },
  { name: 'HTML5', icon: faHtml5 },
    { name: 'Figma', icon: faFigma },
    { name: 'Angular', icon: faAngular },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'Full Stack', level: '100%' },
    { name: 'Typescript', level: '50' },
    { name: 'Unit Testing', level: '80%' },
    { name: 'Bootstrap', level: '85%' },
    { name: 'Communication', level: '100%' },
    { name: 'Team Work', level: '100%' },
    { name: 'Front-End', level: '95%' },
    // Add more skills as needed
  ];

  return (
    <div className={styles.aboutSection}>
      <div className={styles.profilePicContainer}>
        <img src="/img/IMG_3456.JPG" alt="Similoluwa Oyinkolade" className={styles.profilePic}/>
      </div>
      <div className={styles.aboutText}>
        <h2>About Me</h2>
        <p className={`${styles.introText} ${styles.aboutParagraph}`}>My name is <em>Similoluwa Oyinkolade</em> I'm a junior software engineer transitioning from tech sales to programming, with a passion for technology and video games fueling my journey. Experienced in full-stack development, frontend development, ui/ux and more, I excel in collaborative environments, driving projects with effective communication and innovative solutions. Having graduated from a software engineering bootcamp, I'm eager to contribute to and grow within coding and programming teams, where my love for building apps and solving problems thrives.</p>
        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <FontAwesomeIcon icon={skill.icon} size="2x" />
                        <div className={styles.skillName}>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
}

export default About;