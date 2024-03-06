import React from 'react';
import styles from './about.module.css';
import { useSpring, animated } from 'react-spring';

function About() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props} className={styles.aboutSection}>
      <h2>About Me</h2>
      <p>My name is <em>Similoluwa Oyinkolade</em>, but people usually call me
        Simi. What's really important to know about me is that I moved to
        Chicago not too long ago and I'm loving it so far! I'm a full-time
        streamer and content creator and I enjoy a lot of other things within
        those ranges as well. Currently, I'm working towards becoming a software
        engineer/video game developer. My time at Epicodus has been good so far
        and I'm hopeful for more positive experiences on this long road ahead.</p>
    </animated.div>
  );
}

export default About;