import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Compass,
  TreePine,
  Coffee,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { NEARBY_POINTS, PROPERTY_INFO, FORM_URL } from '../data/propertyData';

export const LocationSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const filters = ['Todos', 'Parque', 'Gastronomia', 'Compras', 'Educação', 'Saúde'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Parque':
        return <TreePine className="w-4 h-4 text-emerald-600" />;
      case 'Gastronomia':
        return <Coffee className="w-4 h-4 text-amber-600" />;
      case 'Compras':
        return <ShoppingBag className="w-4 h-4 text-blue-600" />;
      case 'Educação':
        return <GraduationCap className="w-4 h-4 text-purple-600" />;
      case 'Saúde':
      default:
        return <HeartPulse className="w-4 h-4 text-rose-600" />;
    }
  };

  const filteredPoints =
    activeFilter === 'Todos'
      ? NEARBY_POINTS
      : NEARBY_POINTS.filter((p) => p.category === activeFilter);

  return (
    <section id="localizacao" className="py-20 bg-stone-100/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Localização Privilegiada</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            O privilégio de fazer tudo a pé
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Em uma rua arborizada, segura e silenciosa, cercada pelas melhores opções de gastronomia, compras e lazer da cidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Nearby List & Highlights */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
                Pontos de Interesse Próximos
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Distâncias calculadas para pedestres e veículos
              </p>

              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-4 pb-3 border-b border-stone-100">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      activeFilter === f
                        ? 'bg-amber-500 text-stone-950 font-semibold'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* List */}
              <div className="space-y-3">
                {filteredPoints.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 hover:border-amber-300 transition-colors flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center shrink-0 mt-0.5">
                        {getCategoryIcon(item.category)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-stone-900">
                          {item.name}
                        </h4>
                        <p className="text-xs text-stone-500 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-900 rounded-full">
                      {item.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety & Mobility Callout */}
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-300/40 text-stone-900">
              <div className="flex items-center gap-2.5 mb-2 font-bold text-amber-900">
                <Navigation className="w-5 h-5 text-amber-700" />
                <span>Mobilidade Estratégica</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Acesso imediato às principais avenidas sem pegar o trânsito do centro. Ponto ideal com segurança ostensiva privada e monitoramento 24h na vizinhança.
              </p>
            </div>
          </div>

          {/* Map Simulation & Address Card */}
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
            {/* Visual Stylized Map Card */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-200 border border-stone-300 mb-6 flex items-center justify-center">
              {/* Map Illustration Elements */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `
                    radial-gradient(#d6d3d1 2px, transparent 2px),
                    linear-gradient(to right, #e7e5e4 1px, transparent 1px),
                    linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
                  `,
                  backgroundSize: '32px 32px, 64px 64px, 64px 64px',
                }}
              />

              {/* Stylized streets */}
              <div className="absolute w-full h-8 bg-amber-100/80 -rotate-12 border-y border-amber-300/60" />
              <div className="absolute h-full w-8 bg-amber-100/80 rotate-45 border-x border-amber-300/60" />
              <div className="absolute w-3/4 h-6 bg-stone-300/80 top-1/3 left-0 -rotate-3" />

              {/* Pin for Grand Horizon */}
              <div className="relative z-10 flex flex-col items-center animate-bounce">
                <div className="px-3.5 py-1.5 rounded-full bg-stone-950 text-amber-400 border border-amber-400/50 shadow-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap">
                  <MapPin className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Grand Horizon • 14º Andar</span>
                </div>
                <div className="w-2.5 h-2.5 bg-stone-950 rotate-45 -mt-1" />
              </div>

              {/* Compass Rose */}
              <div className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-lg border border-stone-200 text-stone-600 text-xs flex items-center gap-1 font-mono">
                <Compass className="w-4 h-4 text-amber-600" />
                <span>Sol da Manhã</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div>
                  <h4 className="font-serif text-lg font-bold text-stone-900">
                    {PROPERTY_INFO.name}
                  </h4>
                  <p className="text-xs text-stone-500">
                    {PROPERTY_INFO.neighborhood} • {PROPERTY_INFO.city}
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  Área Nobre & Residencial
                </span>
              </div>

              <div className="pt-4">
                <a
                  id="localizacao-tenho-interesse-cta"
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-sm shadow-md hover:from-amber-400 hover:to-amber-500 transition-all active:scale-[0.98]"
                >
                  <span>Tenho Interesse e Quero Receber a Localização Exata</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-center text-[11px] text-stone-400 mt-2">
                  Por segurança e privacidade dos moradores, o endereço exato com número é enviado após preenchimento do formulário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
