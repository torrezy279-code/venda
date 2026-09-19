import React, { useState, useEffect } from 'react';
import { Building2, Sparkles, ArrowUpRight, PhoneCall } from 'lucide-react';
import { FORM_URL } from '../data/propertyData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-900/90 backdrop-blur-md shadow-lg py-3.5 border-b border-stone-800'
          : 'bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-colors">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white">
                GRAND HORIZON
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <p className="text-[10px] tracking-widest uppercase text-stone-300 font-medium">
              Residência Exclusiva • 142m²
            </p>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-200">
          <a
            href="#caracteristicas"
            className="hover:text-amber-400 transition-colors"
          >
            O Apartamento
          </a>
          <a
            href="#galeria"
            className="hover:text-amber-400 transition-colors"
          >
            Galeria
          </a>
          <a
            href="#lazer"
            className="hover:text-amber-400 transition-colors"
          >
            Lazer & Condomínio
          </a>
          <a
            href="#localizacao"
            className="hover:text-amber-400 transition-colors"
          >
            Localização
          </a>
          <a
            href="#simulador"
            className="hover:text-amber-400 transition-colors"
          >
            Simulador
          </a>
          <a
            href="#duvidas"
            className="hover:text-amber-400 transition-colors"
          >
            Dúvidas
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            id="header-tenho-interesse-btn"
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-semibold text-xs sm:text-sm shadow-md hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/20 active:scale-[0.98] transition-all whitespace-nowrap"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
