import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTheme } from './components/context/ThemeContext'; 
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Testimonials from './components/Testimonials/Testimonials';
import Blog from './components/Blog/Blog';
import ContactForm from './components/ContactForm'; 
import Loading from './components/Loading'; 
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
      <PageTransition>
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
      </PageTransition>
    </Router>
  );
}

function PageTransition({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // adjust time as needed
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
}

export default App;