import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center">
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="section-title">Sobre a CODEXY</h1>
          <p className="section-subtitle">
            Tecnologia com criatividade, inovação com propósito
          </p>
        </div>

        <div className="grid gap-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 mb-6">
              A CODEXY surgiu da paixão por tecnologia e design, idealizada por Pedro Gribogy e
              Kauam Marcelino, dois jovens empreendedores determinados a fazer diferente. Unidos
              pela criatividade e pelo espírito inovador, criamos a empresa com o objetivo de
              transformar a forma como sites e conteúdos digitais são produzidos — utilizando o
              poder da Inteligência Artificial para alcançar resultados únicos.
            </p>

            <p className="text-gray-300 mb-6">
              Vivemos em uma era onde a tecnologia avança a passos largos, e acreditamos que a
              criatividade humana, aliada à inteligência artificial, é a chave para criar experiências
              únicas, impactantes e eficientes. Foi com esse espírito que fundamos a CODEXY — uma
              empresa que não apenas acompanha as tendências do mercado digital, mas as antecipa
              e as molda.
            </p>

            <p className="text-gray-300 mb-6">
              Na CODEXY, desenvolvemos sites modernos e intuitivos, logotipos com identidade forte,
              vídeos que comunicam com clareza e emoção, e imagens pensadas estrategicamente
              para o marketing digital. Cada projeto é tratado como único, com atenção aos detalhes e
              total compromisso com a excelência.
            </p>

            <p className="text-gray-300">
              Acreditamos que inovar é mais do que aplicar novas ferramentas — é desafiar o comum,
              pensar além e buscar o extraordinário. Estamos em constante evolução, sempre
              aprendendo, aprimorando e explorando novos caminhos para entregar o melhor
              resultado possível a cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;