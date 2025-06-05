import { type FC } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Benefits from './pages/Benefits';
import Founders from './pages/Founders';
import Contact from './pages/Contact';

const App: FC = () => {
  return (
    <div className="relative">
      {/* Background Video Container */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        >
          <source src="/video-fundo.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"
          style={{ zIndex: -1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="flex flex-col">
          <Home />
          <About />
          <Projects />
          <Benefits />
          <Founders />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;