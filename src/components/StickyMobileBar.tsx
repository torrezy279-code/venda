import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PROPERTY_INFO, FORM_URL } from '../data/propertyData';

export const StickyMobileBar: React.FC = () => {
  return (
    <aside aria-label="Ações rápidas no celular" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-lg border-t border-stone-800 px-4 py-3 shadow-2xl safe-area-bottom">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="leading-tight">
          <div className="flex items-center gap-1 text-[11px] text-amber-400 font-semibold uppercase">
            <Sparkles className="w-3 h-3" />
            <span>142m² • 3 Suítes</span>
          </div>
          <div className="text-sm font-bold text-white font-serif">
            {PROPERTY_INFO.priceFormatted}
          </div>
        </div>

        <a
          id="sticky-mobile-tenho-interesse-btn"
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-xs shadow-lg active:scale-95 transition-all whitespace-nowrap"
        >
          <span>Tenho Interesse</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
