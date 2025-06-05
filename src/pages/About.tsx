import React from 'react';

const About = () => {
  return (
    <div id="about" className="min-h-screen pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre a CODEXY</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia com criatividade, inovação com propósito
          </p>
        </div>

        <div className="grid gap-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              A CODEXY surgiu da paixão por tecnologia e design, idealizada por Pedro Gribogy e
              Kauam Marcelino, dois jovens empreendedores determinados a fazer diferente. Unidos
              pela criatividade e pelo espírito inovador, criamos a empresa com o objetivo de
              transformar a forma como sites e conteúdos digitais são produzidos — utilizando o
              poder da Inteligência Artificial para alcançar resultados únicos.
            </p>

            <p className="text-gray-600 mb-6">
              Vivemos em uma era onde a tecnologia avança a passos largos, e acreditamos que a
              criatividade humana, aliada à inteligência artificial, é a chave para criar experiências
              únicas, impactantes e eficientes. Foi com esse espírito que fundamos a CODEXY — uma
              empresa que não apenas acompanha as tendências do mercado digital, mas as antecipa
              e as molda.
            </p>

            <p className="text-gray-600 mb-6">
              Na CODEXY, desenvolvemos sites modernos e intuitivos, logotipos com identidade forte,
              vídeos que comunicam com clareza e emoção, e imagens pensadas estrategicamente
              para o marketing digital. Cada projeto é tratado como único, com atenção aos detalhes e
              total compromisso com a excelência.
            </p>

            <p className="text-gray-600">
              Acreditamos que inovar é mais do que aplicar novas ferramentas — é desafiar o comum,
              pensar além e buscar o extraordinário. Estamos em constante evolução, sempre
              aprendendo, aprimorando e explorando novos caminhos para entregar o melhor
              resultado possível a cada cliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;