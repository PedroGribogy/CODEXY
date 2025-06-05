import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, Events } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'projects', label: 'Projetos' },
    { id: 'benefits', label: 'Benefícios' },
    { id: 'founders', label: 'Fundadores' },
    { id: 'contact', label: 'Contato' },
  ];

  React.useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      setIsOpen(false);
    });

    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, []);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="flex-shrink-0 cursor-pointer"
          >
            <h1 className="text-2xl font-bold text-black">
              Codexy
              <span className="text-2xl font-bold text-blue-600">{'</>'}</span>
            </h1>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  activeClass="text-blue-600"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              activeClass="text-blue-600"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-500 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;