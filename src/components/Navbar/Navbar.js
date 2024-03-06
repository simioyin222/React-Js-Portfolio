import React from 'react';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>Simi Portfolio</h1>
      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#work">Work</a>
        <a href="#interests">Interests</a>
      </div>
    </nav>
  );
}

export default Navbar;