import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Extracurriculars from './components/Extracurriculars';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

import React from 'react';
import './App.css';


const App = () => {
  return (
    <div classname = "App">
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <Achievements />
      <Extracurriculars />
      <ContactMe />
      <Footer />
    </div>
  );

};

export default App;