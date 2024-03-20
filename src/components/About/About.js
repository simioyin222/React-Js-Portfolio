import React from 'react';
import styles from './about.module.css';
import { useSpring, animated } from 'react-spring';

function About() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const skills = [
    { name: 'JavaScript', level: '100%' },
    { name: 'React', level: '100%' },
    { name: 'CSS', level: '100%' },
    { name: 'HMTL5', level: '100%' },
    { name: 'User Engagement', level: '50%' },
    { name: 'Creative Design', level: '75%' },
    { name: 'Adobe', level: '80%' },
    { name: 'Canva', level: '80%' },
    { name: 'Figma', level: '20%' },
    { name: 'Angular', level: '50%' },
    { name: 'Full Stack', level: '100%' },
    { name: 'Typescript', level: '50' },
    { name: 'Bootstrap', level: '65%' },
    { name: 'Unit Testing', level: '80%' },
    { name: 'Bootstrap', level: '85%' },
    { name: 'Communication', level: '100%' },
    { name: 'Team Work', level: '100%' },
    { name: 'Front-End', level: '95%' },
    // Add more skills as needed
  ];

  return (
    <animated.div style={props} className={styles.aboutSection}>
      <div className={styles.profilePicContainer}>
        <img src="/img/IMG_3456.JPG" alt="Similoluwa Oyinkolade" className={styles.profilePic}/>
      </div>
      <div className={styles.aboutText}>
        <h2>About Me</h2>
        <p>My name is <em>Similoluwa Oyinkolade</em> I'm a junior software engineer transitioning from tech sales to programming, with a passion for technology and video games fueling my journey. Experienced in full-stack development, frontend development, ui/ux and more, I excel in collaborative environments, driving projects with effective communication and innovative solutions. Having graduated from a software engineering bootcamp, I'm eager to contribute to and grow within coding and programming teams, where my love for building apps and solving problems thrives.</p>
        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillBar}>
                <div className={styles.skillLevel} style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </animated.div>
  );
}

export default About;