import React from 'react';
import { Code2, Rocket, Palette, Clock, Shield, HeartHandshake, Check, ArrowRight } from 'lucide-react';
import FlipCard from '../components/FlipCard';

const Benefits = () => {
  const benefits = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Tecnologia Moderna',
      description: 'Utilizamos as mais recentes tecnologias e frameworks para criar soluções robustas e escaláveis.',
      details: {
        technologies: [
          'React 18 com Server Components',
          'Next.js 14 para SSR/SSG',
          'TypeScript para type safety',
          'TailwindCSS para estilos modernos'
        ],
        advantages: [
          'Performance otimizada',
          'SEO amigável',
          'Código limpo e manutenível',
          'Atualizações constantes'
        ]
      }
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Rápido Desenvolvimento',
      description: 'Processo de desenvolvimento ágil e eficiente para entregar seu projeto no prazo.',
      details: {
        technologies: [
          'CI/CD automatizado',
          'Testes automatizados',
          'Code reviews rigorosos',
          'Deploy contínuo'
        ],
        advantages: [
          'Entregas mais rápidas',
          'Menos bugs em produção',
          'Feedback constante',
          'Qualidade garantida'
        ]
      }
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design Único',
      description: 'Criamos designs exclusivos e personalizados que refletem a identidade da sua marca.',
      details: {
        technologies: [
          'Figma para prototipagem',
          'Design System próprio',
          'Animações customizadas',
          'UI/UX modernos'
        ],
        advantages: [
          'Identidade visual única',
          'Experiência memorável',
          'Interfaces intuitivas',
          'Design responsivo'
        ]
      }
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Suporte Contínuo',
      description: 'Oferecemos suporte técnico contínuo e manutenção para garantir o funcionamento perfeito.',
      details: {
        technologies: [
          'Monitoramento 24/7',
          'Backup automático',
          'Sistema de tickets',
          'Análise de performance'
        ],
        advantages: [
          'Resposta rápida',
          'Manutenção preventiva',
          'Atualizações de segurança',
          'Suporte especializado'
        ]
      }
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Segurança Garantida',
      description: 'Implementamos as melhores práticas de segurança para proteger seus dados e usuários.',
      details: {
        technologies: [
          'HTTPS/SSL',
          'Autenticação 2FA',
          'Criptografia de dados',
          'Firewall avançado'
        ],
        advantages: [
          'Proteção contra ataques',
          'Dados seguros',
          'Conformidade LGPD',
          'Backups criptografados'
        ]
      }
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: 'Parceria Duradoura',
      description: 'Construímos relacionamentos de longo prazo com nossos clientes, sendo parceiros no seu sucesso.',
      details: {
        technologies: [
          'Reuniões periódicas',
          'Relatórios detalhados',
          'Planejamento estratégico',
          'Consultoria contínua'
        ],
        advantages: [
          'Alinhamento constante',
          'Crescimento conjunto',
          'Resultados mensuráveis',
          'Transparência total'
        ]
      }
    }
  ];

  return (
    <section id="benefits" className="relative min-h-screen flex items-center justify-center">
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="section-title">
            Por que escolher a Codexy?
          </h1>
          <p className="section-subtitle">
            Descubra como podemos transformar sua presença digital com soluções inovadoras e personalizadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div className="h-[400px]">
              <FlipCard
                key={benefit.title}
                frontContent={
                  <div className="p-8">
                    <div className="text-primary mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                }
                backContent={
                  <div className="p-6">
                    <div className="flex flex-col h-full">
                      <h4 className="text-lg font-semibold text-primary mb-4">Mais Detalhes</h4>
                      <div className="space-y-4 flex-grow">
                        <div>
                          <h5 className="font-medium text-primary mb-2 flex items-center gap-2">
                            <Code2 className="w-4 h-4" />
                            Tecnologias Utilizadas
                          </h5>
                          <ul className="space-y-1">
                            {benefit.details.technologies.map((tech, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Check className="w-4 h-4 text-primary" />
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-primary mb-2 flex items-center gap-2">
                            <ArrowRight className="w-4 h-4" />
                            Vantagens
                          </h5>
                          <ul className="space-y-1">
                            {benefit.details.advantages.map((advantage, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Check className="w-4 h-4 text-primary" />
                                {advantage}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-medium text-primary mb-2 flex items-center gap-2">
                            <Rocket className="w-4 h-4" />
                            Resultados Esperados
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Ao implementar estas soluções, você pode esperar uma melhoria significativa na performance,
                            escalabilidade e manutenibilidade do seu projeto, além de uma experiência de usuário mais
                            fluida e moderna.
                          </p>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-medium text-primary mb-2 flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            Suporte e Manutenção
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Oferecemos suporte contínuo e atualizações regulares para garantir que sua solução
                            permaneça atualizada e segura, com monitoramento 24/7 e backups automáticos.
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
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Comece seu projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;