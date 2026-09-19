import React from 'react';
import { Building2, Sparkles, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PROPERTY_INFO, FORM_URL } from '../data/propertyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-base font-bold text-white tracking-wider">
                {PROPERTY_INFO.name}
              </span>
              <p className="text-[11px] text-stone-400">
                {PROPERTY_INFO.subtitle} • {PROPERTY_INFO.neighborhood}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-stone-300">
            <a href="#hero" className="hover:text-amber-400 transition-colors">
              Início
            </a>
            <a href="#caracteristicas" className="hover:text-amber-400 transition-colors">
              O Apartamento
            </a>
            <a href="#galeria" className="hover:text-amber-400 transition-colors">
              Galeria
            </a>
            <a href="#lazer" className="hover:text-amber-400 transition-colors">
              Condomínio
            </a>
            <a href="#simulador" className="hover:text-amber-400 transition-colors">
              Financiamento
            </a>
            <a
              id="footer-tenho-interesse-link"
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-stone-500">
          <p>
            © {new Date().getFullYear()} {PROPERTY_INFO.name}. Todos os direitos reservados. Venda direta e intermediada por profissionais credenciados CRECI.
          </p>
          <div className="flex items-center gap-2 text-stone-400">
            <ShieldCheck className="w-4 h-4 text-amber-500/80" />
            <span>Formulário seguro via Google Forms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
