import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Interests from './components/Interests';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Work />
      <Projects />
      <Interests />
      
    </div>
  );
}

export default App;