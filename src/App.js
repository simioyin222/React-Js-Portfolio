import React from 'react';
import Navbar from './components/Navbar/Navbar'; // new  component
import About from './components/About/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Interests from './components/Interests';
import ContactForm from './components/ContactForm'; // updated ContactForm
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; //  custom styles outside of modules

function App() {
  return (
    <div>
      <Navbar /> {/* Updated to use Navbar instead of Header for better navigation */}
      <About />
      <Work />
      <Projects /> {/* modal and carousel features */}
      <Interests />
      <ContactForm /> {/* Updated contact form with submission  */}
      {/*  footer component here */}
    </div>
  );
}

export default App;