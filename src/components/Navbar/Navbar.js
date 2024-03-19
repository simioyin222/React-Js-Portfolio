import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <h1>Simi Portfolio</h1>
      <div className={styles.links}>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/interests">Interests</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/testimonials">Testimonials</Link>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </nav>
  );
}

export default Navbar;