import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, useTheme } from './components/context/ThemeContext'; 
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Testimonials from './components/Testimonials/Testimonials';
import Blog from './components/Blog/Blog';
import ContactForm from './components/ContactForm'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <Navbar toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/" element={<Navigate replace to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;