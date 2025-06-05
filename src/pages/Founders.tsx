import React from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, GraduationCap, Code, Palette } from 'lucide-react';
import FlipCard from '../components/FlipCard';

const Founders = () => {
  const founders = [
    {
      name: 'Pedro Gribogy',
      role: 'Co-Fundador & Desenvolvedor',
      bio: 'Apaixonado por tecnologia e inovação, Pedro lidera o desenvolvimento técnico da CODEXY, trazendo sua expertise em desenvolvimento web e inteligência artificial para criar soluções únicas.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'pedro@codexy.com.br'
      },
      details: {
        education: 'Mestrado em Ciência da Computação',
        experience: '8 anos de experiência',
        achievements: [
          'Prêmio Inovação Digital 2023',
          'Palestrante em conferências tech',
          '15+ projetos de IA entregues',
          'Especialista em React e Node.js'
        ],
        skills: [
          'Desenvolvimento Full Stack',
          'Arquitetura de Software',
          'Machine Learning',
          'DevOps & Cloud'
        ]
      }
    },
    {
      name: 'Kauan Marcelino',
      role: 'Co-Fundador & Designer',
      bio: 'Com um olhar criativo e inovador, Kauam é responsável pela identidade visual e experiência do usuário nos projetos da CODEXY, combinando design moderno com funcionalidade.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'kauam@codexy.com.br'
      },
      details: {
        education: 'Bacharel em Design Digital',
        experience: '6 anos de experiência',
        achievements: [
          'Prêmio Design Brasil 2023',
          'Mentor de UX/UI Design',
          '30+ identidades visuais criadas',
          'Especialista em Design Systems'
        ],
        skills: [
          'UI/UX Design',
          'Design de Produto',
          'Motion Design',
          'Design Thinking'
        ]
      }
    }
  ];

  return (
    <div id="founders" className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Nossos Fundadores
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça os visionários por trás da CODEXY, unindo tecnologia e criatividade
            para transformar o mercado digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((founder) => (
            <div className="h-[500px]">
              <FlipCard
                key={founder.name}
                height="h-[500px]"
                frontContent={
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary">
                          {founder.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {founder.name}
                      </h3>
                      <p className="text-primary font-medium">
                        {founder.role}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-center mb-6">
                      {founder.bio}
                    </p>

                    <div className="flex justify-center space-x-4">
                      <a
                        href={founder.social.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a
                        href={founder.social.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a
                        href={`mailto:${founder.social.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                }
                backContent={
                  <div className="p-6">
                    <div className="flex flex-col h-full">
                      <h4 className="text-lg font-semibold text-primary mb-6">Mais Sobre {founder.name}</h4>
                      <div className="space-y-6 flex-grow">
                        <div className="flex items-center gap-3">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <div>
                            <h5 className="font-medium text-primary">Formação</h5>
                            <p className="text-muted-foreground">{founder.details.education}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Briefcase className="w-5 h-5 text-primary" />
                          <div>
                            <h5 className="font-medium text-primary">Experiência</h5>
                            <p className="text-muted-foreground">{founder.details.experience}</p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="w-5 h-5 text-primary" />
                            <h5 className="font-medium text-primary">Conquistas</h5>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {founder.details.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            {founder.name.includes('Pedro') ? (
                              <Code className="w-5 h-5 text-primary" />
                            ) : (
                              <Palette className="w-5 h-5 text-primary" />
                            )}
                            <h5 className="font-medium text-primary">Especialidades</h5>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {founder.details.skills.map((skill, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founders;