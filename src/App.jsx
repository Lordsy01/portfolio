import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects'; 
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects /> {/* You'll need to fill this in */}
        </section>
        <section id="experience">
          <Experience /> {/* You'll need to fill this in */}
        </section>
        <section id="footer">
          <Footer /> 
        </section>
          
      </div>
    </div>
  );
}

export default App;