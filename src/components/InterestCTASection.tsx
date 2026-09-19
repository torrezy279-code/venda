import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Clock,
  Key,
  CheckCircle2,
  FileCheck2,
} from 'lucide-react';
import { PROPERTY_INFO, FORM_URL } from '../data/propertyData';

export const InterestCTASection: React.FC = () => {
  return (
    <section id="interesse" className="py-24 bg-stone-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-stone-900 via-stone-900/90 to-stone-900 border border-stone-800 rounded-3xl p-8 sm:p-14 shadow-2xl text-center relative overflow-hidden">
          {/* Subtle accent border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Última Unidade Disponível Neste Andar</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Pronto para dar o próximo passo para o seu novo lar?
          </h2>

          <p className="text-stone-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Clique no botão abaixo para preencher o formulário oficial de interesse e receber atendimento exclusivo com agendamento de visita presencial.
          </p>

          {/* Key Recap Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10 text-xs sm:text-sm text-stone-300">
            <span className="px-3 py-1.5 rounded-lg bg-stone-800/80 border border-stone-700">
              📐 142 m² Privativos
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-stone-800/80 border border-stone-700">
              🛏️ 3 Suítes Plenas
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-stone-800/80 border border-stone-700">
              🚗 2 Vagas Demarcadas
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-stone-800/80 border border-stone-700">
              🌅 14º Andar (Sol da Manhã)
            </span>
          </div>

          {/* Primary CTA button */}
          <div className="max-w-md mx-auto mb-8">
            <a
              id="cta-tenho-interesse-main"
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-lg shadow-2xl shadow-amber-500/30 active:scale-[0.98] transition-all group"
            >
              <span>Tenho Interesse</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <p className="text-xs text-stone-400 mt-2.5">
              Link direto para o formulário oficial de cadastro seguro
            </p>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-8 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-400">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Resposta em até 30 minutos</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FileCheck2 className="w-4 h-4 text-amber-400" />
              <span>Documentação 100% regularizada</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Visita privativa e segura</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
