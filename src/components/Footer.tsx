import { type FC, type MouseEvent } from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, type LucideIcon } from 'lucide-react';

interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

interface FooterLink {
  href: string;
  label: string;
}

interface FooterGroup {
  title: string;
  links: FooterLink[];
}

interface ContactInfo {
  icon: LucideIcon;
  text: string;
  href: string;
}

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      href: 'https://facebook.com',
      icon: Facebook,
      label: 'Facebook',
    },
    {
      href: 'https://twitter.com',
      icon: Twitter,
      label: 'Twitter',
    },
    {
      href: 'https://instagram.com',
      icon: Instagram,
      label: 'Instagram',
    },
  ];

  const footerLinks: FooterGroup[] = [
    {
      title: 'Empresa',
      links: [
        { href: '#about', label: 'Sobre' },
        { href: '#projects', label: 'Projetos' },
        { href: '#benefits', label: 'Benefícios' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { href: '/blog', label: 'Blog' },
        { href: '/docs', label: 'Documentação' },
        { href: '/support', label: 'Suporte' },
      ],
    },
  ];

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      text: 'contato@codexy.com',
      href: 'mailto:contato@codexy.com',
    },
    {
      icon: Phone,
      text: '+55 (11) 99999-9999',
      href: 'tel:+5511999999999',
    },
    {
      icon: MapPin,
      text: 'São Paulo, SP',
      href: 'https://maps.google.com',
    },
  ];

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Codexy
                <span className="text-2xl font-bold text-blue-500">{'</>'}</span>
              </h2>
              <p className="mt-4 text-gray-300 max-w-xs">
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
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.href.startsWith('#') ? (e) => scrollToSection(e, link.href.slice(1)) : undefined}
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
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
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

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {currentYear} Codexy. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 