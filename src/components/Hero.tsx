import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Compass,
  BedDouble,
  Car,
  Maximize2,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import heroImage from '../assets/images/hero_apartment_living_1789843581145.jpg';
import { PROPERTY_INFO, FORM_URL, KEY_METRICS } from '../data/propertyData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Living Room do Apartamento Grand Horizon"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-stone-950/40 to-stone-950/90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Oportunidade Única • Pronto Para Morar</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-5">
            O seu novo padrão de vida no{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
              Edifício Grand Horizon
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg lg:text-xl text-stone-200 font-normal leading-relaxed mb-8 max-w-2xl">
            Apartamento de alto padrão com <strong>142m² privativos</strong>, <strong>3 suítes plenas</strong>, varanda gourmet integrada com churrasqueira e acabamentos nobres no 14º andar com vista livre e permanente.
          </p>

          {/* Highlights bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-stone-300 text-sm">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Sol da manhã e excelente ventilação cruzada</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>2 vagas demarcadas e cobertas + depósito</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Condomínio clube com piscina no rooftop</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Documentação 100% pronta para financiamento</span>
            </div>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              id="hero-tenho-interesse-cta"
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-[length:200%_auto] hover:bg-right transition-all duration-300 text-stone-950 font-bold text-base shadow-xl shadow-amber-500/20 active:scale-[0.98]"
            >
              <span>Tenho Interesse no Imóvel</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#galeria"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700 font-medium text-base backdrop-blur-sm transition-all"
            >
              <span>Ver Fotos do Imóvel</span>
            </a>
          </div>

          {/* Price & Security guarantee */}
          <div className="flex items-center gap-3 mt-6 text-xs text-stone-400">
            <ShieldCheck className="w-4 h-4 text-amber-400/80" />
            <span>Atendimento privativo e seguro direto com os responsáveis</span>
          </div>
        </div>

        {/* Quick Metric Bar */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/60 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Maximize2 className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-300">Área Privativa</span>
            </div>
            <div className="text-2xl font-bold text-white font-serif">142 m²</div>
            <p className="text-xs text-stone-400 mt-0.5">Planta inteligente e integrada</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/60 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <BedDouble className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-300">Suítes Plenas</span>
            </div>
            <div className="text-2xl font-bold text-white font-serif">3 Suítes</div>
            <p className="text-xs text-stone-400 mt-0.5">Com closet na master</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/60 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Car className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-300">Garagem</span>
            </div>
            <div className="text-2xl font-bold text-white font-serif">2 Vagas</div>
            <p className="text-xs text-stone-400 mt-0.5">Demarcadas + depósito privativo</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/60 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Compass className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-300">Orientação</span>
            </div>
            <div className="text-2xl font-bold text-white font-serif">Sol da Manhã</div>
            <p className="text-xs text-stone-400 mt-0.5">14º andar • Vista panorâmica</p>
          </div>
        </div>
      </div>
    </section>
  );
};
