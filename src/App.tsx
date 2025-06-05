import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Benefits from './pages/Benefits';
import Founders from './pages/Founders';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Benefits />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;