import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 64,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/codexy', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/codexy', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/codexy', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/codexy', label: 'GitHub' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contato@codexy.com.br', href: 'mailto:contato@codexy.com.br' },
    { icon: Phone, text: '(11) 99999-9999', href: 'tel:+5511999999999' },
    { icon: MapPin, text: 'São Paulo, SP', href: 'https://maps.google.com/?q=São+Paulo,+SP' },
  ];

  const footerLinks = [
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre', href: '#about', isInternal: true },
        { label: 'Projetos', href: '#projects', isInternal: true },
        { label: 'Benefícios', href: '#benefits', isInternal: true },
        { label: 'Fundadores', href: '#founders', isInternal: true },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Blog', href: '/blog', isInternal: false },
        { label: 'FAQ', href: '/faq', isInternal: false },
        { label: 'Suporte', href: '/suporte', isInternal: false },
        { label: 'Termos de Uso', href: '/termos', isInternal: false },
      ],
    },
  ];

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold">
                Codexy
                <span className="text-2xl font-bold text-blue-500">{'</>'}</span>
              </h2>
              <p className="mt-4 text-gray-600 max-w-xs">
                Transformando ideias em realidade digital com tecnologia e criatividade.
              </p>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.isInternal ? (e) => handleClick(e, link.href.slice(1)) : undefined}
                      className="text-gray-400 hover:text-blue-500 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Contato
            </h3>
            <ul className="mt-4 space-y-4">
              {contactInfo.map((info) => (
                <li key={info.text} className="flex items-center">
                  <info.icon size={16} className="text-blue-500" />
                  <a
                    href={info.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors text-sm ml-2"
                  >
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} Codexy. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 