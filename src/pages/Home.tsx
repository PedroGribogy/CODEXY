import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="section-container">
        <div className="space-y-12 animate-fade-in">
          {/* Logo */}
          <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
            <h2 className="text-gradient text-7xl md:text-8xl font-bold tracking-tighter">
              Codexy<span className="text-blue-400">{'</>'}</span>
            </h2>
          </div>

          {/* Animated Text */}
          <div className="text-5xl md:text-6xl font-bold tracking-tight">
            <TypeAnimation
              sequence={[
                'All it needs, is to be',
                1500,
                'eye catching',
                2000,
                'innovative',
                1500,
                'transformative',
                1500,
              ]}
              wrapper="div"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            We use AI for everything and integrated it seamlessly into
            your business to boost your ideas and help you grow.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="secondary-button w-full sm:w-auto text-center cursor-pointer"
            >
              What we do
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="primary-button w-full sm:w-auto text-center group cursor-pointer"
            >
              Let's do it!
              <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;