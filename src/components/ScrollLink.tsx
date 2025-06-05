import React from 'react';
import { Link } from 'react-scroll';

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children, className = '' }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-80} // Ajuste conforme necessário para compensar a altura do navbar
      duration={800}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
};

export default ScrollLink; 