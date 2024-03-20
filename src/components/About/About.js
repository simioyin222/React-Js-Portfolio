import React from 'react';
import styles from './about.module.css';
import { useSpring, animated } from 'react-spring';

function About() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const skillsColumn1 = [
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '70%' },
    { name: 'CSS', level: '85%' },
  ];

  const skillsColumn2 = [
    { name: 'HTML', level: '90%' },
    { name: 'Node.js', level: '75%' },
    { name: 'UX/UI Design', level: '80%' },
  ];

  return (
    <animated.div style={props} className={styles.aboutSection}>
      <div className={styles.profilePicContainer}>
        <img src="/img/IMG_3456.JPG" alt="Similoluwa Oyinkolade" className={styles.profilePic}/>
      </div>
      <div className={styles.skills}>
        <h3>Skills</h3>
        <div className={styles.skillsRow}>
          <div className={styles.skillsColumn}>
            {skillsColumn1.map((skill, index) => (
              <div key={index} className={styles.skill}>
                <div className={styles.skillName}>{skill.name}</div>
                <div className={styles.skillBar}>
                  <div className={styles.skillLevel} style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.skillsColumn}>
            {skillsColumn2.map((skill, index) => (
              <div key={index} className={styles.skill}>
                <div className={styles.skillName}>{skill.name}</div>
                <div className={styles.skillBar}>
                  <div className={styles.skillLevel} style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.aboutText}>
        <h2>About Me</h2>
        <p className="intro-text">
          <em>Simi</em> here - from tech sales to Frontend Engineer & UI/UX Designer fueled by a love for tech, gaming, and animations. Skilled in HTML, CSS, JavaScript, React, with a knack for crafting intuitive, engaging user experiences. My journey through Epicodus honed my coding skills, blending creativity with tech to design solutions that resonate. Passionate about collaboration and innovation, I'm driven to create impactful digital experiences.
        </p>
      </div>
    </animated.div>
  );
}

export default About;