import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para transformar sua ideia em realidade. Entre em contato conosco!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Enviar Mensagem
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">contato@codexy.com.br</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Telefone</h3>
                <p className="mt-1 text-gray-600">+55 (11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Localização</h3>
                <p className="mt-1 text-gray-600">São Paulo, SP - Brasil</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Horário de Atendimento</h3>
              <p className="text-gray-600">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 13h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;