import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>Simi Portfolio</h1>
      <div className={styles.links}>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/interests">Interests</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;