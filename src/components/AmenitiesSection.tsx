import React, { useState } from 'react';
import {
  Waves,
  Dumbbell,
  ShieldCheck,
  Flame,
  Laptop,
  Zap,
  Dog,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import poolImg from '../assets/images/rooftop_pool_view_1789843615269.jpg';
import { AMENITIES, FORM_URL } from '../data/propertyData';

export const AmenitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Lazer', 'Bem-estar', 'Segurança', 'Facilidades'];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves':
        return <Waves className="w-6 h-6 text-amber-500" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-500" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-500" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-amber-500" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Dog':
        return <Dog className="w-6 h-6 text-amber-500" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-amber-500" />;
    }
  };

  const filteredAmenities =
    activeCategory === 'Todos'
      ? AMENITIES
      : AMENITIES.filter((a) => a.category === activeCategory);

  return (
    <section id="lazer" className="py-20 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner with Rooftop Pool Image */}
        <div className="relative rounded-3xl overflow-hidden mb-16 border border-stone-800 shadow-2xl">
          <div className="aspect-[21/9] min-h-[340px] sm:min-h-[420px] relative">
            <img
              src={poolImg}
              alt="Piscina com borda infinita no rooftop"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent" />
            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-center max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider w-fit mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Condomínio Clube Resort</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Lazer de resort exclusivo sem sair de casa
              </h2>
              <p className="text-stone-300 text-sm sm:text-base mb-6 leading-relaxed">
                Piscina com borda infinita aquecida no 25º andar, solarium panorâmico, academia com padrão internacional e segurança de ponta para toda a família.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  id="amenities-hero-cta"
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-lg transition-all active:scale-[0.98]"
                >
                  <span>Tenho Interesse no Condomínio</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
              Áreas Comuns Entregues Equipadas e Decoradas
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Estrutura Completa de Bem-estar & Conveniência
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAmenities.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/60 hover:border-amber-500/50 hover:bg-stone-800 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  {getIcon(item.icon)}
                </div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="font-serif text-lg font-bold text-white">
                    {item.title}
                  </h4>
                </div>
                <span className="inline-block text-[10px] uppercase tracking-wider font-semibold text-amber-400/90 mb-2">
                  {item.category}
                </span>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
