import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import ScrollLink from '../components/ScrollLink';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="-mt-32">
            <div className="mb-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              <h2 className="text-5xl md:text-7xl font-bold">
                <span className="text-black">Codexy</span>
                <span className="text-blue-600">{'/>'}</span>
              </h2>
            </div>
            <TypeAnimation
              sequence={[
                'Transformando ideias em realidade digital',
                1500,
                'Inovação com propósito',
                1500,
                'Tecnologia com criatividade',
                1500,
              ]}
              wrapper="h1"
              speed={40}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              repeat={Infinity}
              cursor={true}
            />
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Desenvolvemos soluções digitais modernas e intuitivas, unindo tecnologia
              e criatividade para transformar sua presença online.
            </p>
            <div>
              <ScrollLink
                to="contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Comece seu projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </ScrollLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;