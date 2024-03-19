import React from 'react';
import styles from './about.module.css';
import { useSpring, animated } from 'react-spring';

function About() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const skills = [
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '70%' },
    { name: 'CSS', level: '85%' },
    // Add more skills as needed
  ];

  return (
    <animated.div style={props} className={styles.aboutSection}>
      <div className={styles.profilePicContainer}>
        <img src="/img/IMG_3456.JPG" alt="Similoluwa Oyinkolade" className={styles.profilePic}/> 
        <div className={styles.skills}>
          <h3>Skills</h3>
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
      <div className={styles.aboutText}>
        <h2>About Me</h2>
        <p>My name is <em>Similoluwa Oyinkolade</em>, but people usually call me Simi...</p>
      </div>
    </animated.div>
  );
}

export default About;