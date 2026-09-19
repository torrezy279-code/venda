import React from 'react';
import {
  Flame,
  Maximize,
  Wind,
  Shield,
  Layers,
  Sparkles,
  Bath,
  Sun,
  KeyRound,
  ArrowRight,
} from 'lucide-react';
import balconyImg from '../assets/images/gourmet_balcony_view_1789843593536.jpg';
import suiteImg from '../assets/images/master_suite_luxury_1789843604152.jpg';
import { FORM_URL, PROPERTY_INFO } from '../data/propertyData';

export const PropertyHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Flame,
      title: 'Varanda Gourmet Integrada',
      description:
        'Churrasqueira a carvão privativa, bancada de apoio em granito nobre, ponto de chopeira e fechamento com cortina de vidro retrátil.',
      badge: 'Destaque',
    },
    {
      icon: Sun,
      title: 'Orientação Sol da Manhã',
      description:
        'Localizado no 14º andar com vista perene para o horizonte. Excelente claridade natural e conforto térmico em todas as estações.',
      badge: '14º Andar',
    },
    {
      icon: Bath,
      title: '3 Suítes Amplas & Planejadas',
      description:
        'Suíte master com closet espaçoso, banheiro com pia dupla esculpida em mármore e esquadrias com atenuação acústica de padrão europeu.',
      badge: 'Privacidade',
    },
    {
      icon: Layers,
      title: 'Acabamentos Nobres',
      description:
        'Porcelanato retificado 120x120cm nas áreas sociais, piso vinílico amadeirado nos dormitórios e rodapés embutidos de 15cm.',
      badge: 'Alto Padrão',
    },
    {
      icon: Wind,
      title: 'Climatização & Automação',
      description:
        'Pontos de ar-condicionado tipo split já tubulados em todos os quartos e salas, além de fiação preparada para automação de iluminação e som.',
      badge: 'Tecnologia',
    },
    {
      icon: KeyRound,
      title: '2 Vagas Livres + Depósito',
      description:
        'Vagas de garagem cobertas, fixas e demarcadas em local de fácil manobra, acompanhadas de armário de depósito privativo no subsolo.',
      badge: 'Comodidade',
    },
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-stone-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Padrão Construtivo Superior</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Cada detalhe pensado para o seu máximo conforto
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Conheça os diferenciais exclusivos que fazem desta unidade no {PROPERTY_INFO.name} uma das oportunidades mais raras do mercado imobiliário.
          </p>
        </div>

        {/* 2 Feature Cards with Images + Grid of Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Varanda Gourmet */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow group">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={balconyImg}
                alt="Varanda gourmet com churrasqueira"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                Varanda Gourmet
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                Convivência e Lazer Privativo
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
                A varanda gourmet é uma verdadeira extensão do living room. Equipada com churrasqueira tradicional a carvão e fechamento integral de vidro retrátil, ela permite momentos inesquecíveis com família e amigos com a vista da cidade ao fundo.
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-stone-500 border-t border-stone-100 pt-4">
                <span>✓ Churrasqueira a carvão</span>
                <span>✓ Vista livre permanente</span>
                <span>✓ Cortina de vidro</span>
              </div>
            </div>
          </div>

          {/* Card 2: Suíte Master */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow group">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={suiteImg}
                alt="Suíte Master do apartamento"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                Suíte Master
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                Seu Refúgio Particular de Paz
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
                Dormitório amplo com iluminação embutida suave, cabeceira ripada em madeira nobre, closet completo sob medida e banheiro com acabamentos contemporâneos para proporcionar descanso absoluto após a rotina.
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-stone-500 border-t border-stone-100 pt-4">
                <span>✓ Amplo closet planejado</span>
                <span>✓ Persianas elétricas</span>
                <span>✓ Ar-condicionado split</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-stone-200 shadow-sm hover:border-amber-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* In-section Conversion Strip */}
        <div className="mt-12 bg-gradient-to-r from-stone-900 to-stone-950 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800">
          <div>
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
              Pronto para Visitas
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
              Deseja conhecer todos os detalhes pessoalmente?
            </h3>
            <p className="text-stone-300 text-sm mt-1 max-w-xl">
              Agende um horário exclusivo com assessoria personalizada e receba o dossiê completo da unidade.
            </p>
          </div>
          <a
            id="highlights-tenho-interesse-cta"
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md transition-all active:scale-[0.98]"
          >
            <span>Tenho Interesse na Visita</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
