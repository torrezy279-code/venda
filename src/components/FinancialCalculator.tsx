import React, { useState } from 'react';
import {
  Calculator,
  Coins,
  BadgePercent,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { PROPERTY_INFO, FORM_URL } from '../data/propertyData';

export const FinancialCalculator: React.FC = () => {
  const propertyPrice = 1480000;
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(25);
  const [termYears, setTermYears] = useState<number>(30);
  const annualInterestRate = 0.099; // 9.9% a.a.

  // Calculations
  const downPaymentValue = (propertyPrice * downPaymentPercent) / 100;
  const financedAmount = propertyPrice - downPaymentValue;
  const totalMonths = termYears * 12;

  // Monthly interest
  const monthlyRate = Math.pow(1 + annualInterestRate, 1 / 12) - 1;

  // Price table estimate for first installment
  const estimatedFirstInstallment =
    financedAmount *
    ((monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1));

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="simulador" className="py-20 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Condições Facilitadas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
            Simulador de Financiamento & Entrada
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Imóvel pronto para morar com documentação 100% aprovada para os principais bancos (Itaú, Bradesco, Santander e Caixa).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls */}
          <div className="lg:col-span-7 bg-stone-800/90 p-6 sm:p-8 rounded-2xl border border-stone-700/80 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-700 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-400">
                    Valor de Venda do Apartamento
                  </span>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">
                    {PROPERTY_INFO.priceFormatted}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-400">Condomínio / IPTU</span>
                  <div className="text-xs font-mono text-stone-300">
                    {PROPERTY_INFO.condoFormatted} • {PROPERTY_INFO.iptuFormatted}
                  </div>
                </div>
              </div>

              {/* Down Payment Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-stone-200 flex items-center gap-2">
                    <Coins className="w-4 h-4 text-amber-400" />
                    <span>Valor da Entrada ({downPaymentPercent}%)</span>
                  </label>
                  <span className="font-mono text-amber-400 font-bold text-base">
                    {formatCurrency(downPaymentValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="60"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1 font-mono">
                  <span>Mínimo 20% ({formatCurrency(propertyPrice * 0.2)})</span>
                  <span>60% ({formatCurrency(propertyPrice * 0.6)})</span>
                </div>
              </div>

              {/* Term Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-stone-200 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>Prazo de Financiamento</span>
                  </label>
                  <span className="font-mono text-amber-400 font-bold text-base">
                    {termYears} anos ({totalMonths} meses)
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="35"
                  step="5"
                  value={termYears}
                  onChange={(e) => setTermYears(Number(e.target.value))}
                  className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1 font-mono">
                  <span>10 anos</span>
                  <span>20 anos</span>
                  <span>30 anos</span>
                  <span>35 anos</span>
                </div>
              </div>

              {/* Advantages badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-stone-700/60 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Aceita amortização com saldo do FGTS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Assessoria completa de crédito gratuita</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Possibilidade de compor renda familiar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Taxas personalizadas conforme seu perfil bancário</span>
                </div>
              </div>
            </div>
          </div>

          {/* Simulation Summary & CTA */}
          <div className="lg:col-span-5 bg-gradient-to-br from-stone-800 to-stone-900 p-6 sm:p-8 rounded-2xl border-2 border-amber-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider mb-4">
                Resultado da Simulação
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-stone-700/80">
                  <span className="text-xs text-stone-400">Saldo Financiado:</span>
                  <span className="font-mono text-base font-bold text-white">
                    {formatCurrency(financedAmount)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-stone-700/80">
                  <span className="text-xs text-stone-400">Entrada sugerida:</span>
                  <span className="font-mono text-base font-bold text-amber-300">
                    {formatCurrency(downPaymentValue)}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-stone-950/80 border border-amber-500/30">
                  <span className="text-xs text-stone-400 block mb-1">
                    Parcela inicial estimada (SAC / Price):
                  </span>
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-amber-400">
                    {formatCurrency(estimatedFirstInstallment)}
                    <span className="text-xs text-stone-400 font-sans font-normal"> /mês</span>
                  </div>
                  <p className="text-[11px] text-stone-400 mt-2">
                    *Estimativa de taxa de 9,9% a.a. Sujeito à análise de crédito individual e instituição bancária.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                id="simulador-tenho-interesse-cta"
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-base shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all"
              >
                <span>Tenho Interesse nesta Condição</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-center text-xs text-stone-400 mt-2 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Sem compromisso • Resposta ágil pelo formulário
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
