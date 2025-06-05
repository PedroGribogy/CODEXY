import React from 'react';
import { ExternalLink, Code, Palette, Globe, Calendar, Users, Star } from 'lucide-react';
import { Link } from 'react-scroll';
import FlipCard from '../components/FlipCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Moderno',
      description: 'Plataforma de comércio eletrônico com design responsivo e experiência de usuário otimizada.',
      tags: ['React', 'Node.js', 'Tailwind CSS'],
      icon: <Globe className="w-6 h-6 text-primary" />,
      details: {
        completionDate: 'Março 2024',
        clientSatisfaction: '4.9/5',
        teamSize: '6 desenvolvedores',
        features: [
          'Integração com múltiplos meios de pagamento',
          'Sistema de recomendação baseado em IA',
          'Painel administrativo completo',
          'Analytics em tempo real'
        ]
      }
    },
    {
      title: 'Sistema de Gestão',
      description: 'Sistema integrado para gerenciamento empresarial com dashboard interativo.',
      tags: ['TypeScript', 'React', 'PostgreSQL'],
      icon: <Code className="w-6 h-6 text-primary" />,
      details: {
        completionDate: 'Janeiro 2024',
        clientSatisfaction: '4.8/5',
        teamSize: '4 desenvolvedores',
        features: [
          'Relatórios personalizados',
          'Gestão de estoque automatizada',
          'Integração com APIs fiscais',
          'Dashboard em tempo real'
        ]
      }
    },
    {
      title: 'Portfólio Criativo',
      description: 'Site portfólio para artista digital com galeria interativa e animações suaves.',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      icon: <Palette className="w-6 h-6 text-primary" />,
      details: {
        completionDate: 'Fevereiro 2024',
        clientSatisfaction: '5.0/5',
        teamSize: '3 desenvolvedores',
        features: [
          'Galeria 3D interativa',
          'Sistema de blog integrado',
          'Animações personalizadas',
          'Otimização SEO avançada'
        ]
      }
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center">
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="section-title">
            Nossos Projetos
          </h1>
          <p className="section-subtitle">
            Conheça alguns dos projetos que desenvolvemos, combinando tecnologia
            e criatividade para entregar soluções únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div className="h-[400px]">
              <FlipCard
                key={project.title}
                frontContent={
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      {project.icon}
                      <ExternalLink className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                }
                backContent={
                  <div className="p-6">
                    <div className="flex flex-col h-full">
                      <h4 className="text-lg font-semibold text-primary mb-4">Detalhes do Projeto</h4>
                      <div className="space-y-4 flex-grow">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="text-muted-foreground">Concluído em: {project.details.completionDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-primary" />
                          <span className="text-muted-foreground">Satisfação do Cliente: {project.details.clientSatisfaction}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="text-muted-foreground">Equipe: {project.details.teamSize}</span>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-medium text-primary mb-2">Principais Recursos:</h5>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {project.details.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-medium text-primary mb-2">Tecnologias Utilizadas:</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-medium text-primary mb-2">Impacto do Projeto:</h5>
                          <p className="text-muted-foreground text-sm">
                            Este projeto trouxe resultados significativos para o cliente, incluindo aumento de conversão, 
                            melhoria na experiência do usuário e otimização de processos internos.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Inicie seu projeto
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;