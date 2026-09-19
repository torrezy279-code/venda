import React, { useState } from 'react';
import {
  Compass,
  Layers,
  Sparkles,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react';
import { PROPERTY_INFO, FORM_URL } from '../data/propertyData';

interface RoomDetail {
  name: string;
  area: string;
  description: string;
  items: string[];
}

export const FloorPlanSection: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<number>(0);

  const rooms: RoomDetail[] = [
    {
      name: 'Living Integrado & Jantar',
      area: '34,5 m²',
      description:
        'Conceito aberto com integração total à varanda gourmet. Espaço ideal para sala de estar ampla e mesa de jantar para 8 a 10 lugares.',
      items: [
        'Piso em porcelanato 120x120cm retificado',
        'Ponto para home theater e iluminação embutida',
        'Janelões do chão ao teto com grande luminosidade',
      ],
    },
    {
      name: 'Varanda Gourmet Panorâmica',
      area: '18,2 m²',
      description:
        'Churrasqueira a carvão com duto individual em inox, bancada de granito São Gabriel e fechamento com cortina de vidro.',
      items: [
        'Ponto para frigobar ou chopeira',
        'Bancada com cuba em inox e torneira gourmet',
        'Tomadas 220V e duto de exaustão silencioso',
      ],
    },
    {
      name: 'Suíte Master com Closet',
      area: '19,8 m²',
      description:
        'Dormitório amplo com espaço para cama King Size, circulação livre e closet planejado com iluminação interna.',
      items: [
        'Banheiro privativo com cuba dupla esculpida',
        'Persianas elétricas integradas com blackout',
        'Ponto elétrico e dreno para ar-condicionado',
      ],
    },
    {
      name: 'Suíte 02 & Suíte 03',
      area: '13,5 m² cada',
      description:
        'Suítes completas e silenciosas, perfeitas para filhos ou home office privativo de alto padrão.',
      items: [
        'Janelas acústicas com atenuação sonora',
        'Banheiros privativos com ventilação natural',
        'Piso laminado de alta resistência térmica',
      ],
    },
    {
      name: 'Cozinha Gourmet & Área de Serviço',
      area: '16,0 m²',
      description:
        'Espaço funcional e elegante com ilha central em pedra nobre, área de serviço ventilada e despensa.',
      items: [
        'Bancadas em Quartzo Branco resistente a manchas',
        'Ponto de água para geladeira side-by-side e filtro',
        'Área de serviço separada com banheiro de apoio',
      ],
    },
  ];

  return (
    <section id="planta" className="py-20 bg-stone-50 border-b border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            <span>Engenharia & Arquitetura</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            Planta Inteligente de 142 m² Privativos
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Aproveitamento milimétrico de cada metro quadrado, sem corredores perdidos e com máxima incidência de luz natural.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Architectural Layout Representation */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Esquema Arquitetônico do 14º Andar
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200">
                Sol da Manhã • 142m² Úteis
              </span>
            </div>

            {/* Stylized Architectural Blueprint Diagram */}
            <div className="relative bg-stone-900 text-white rounded-xl p-6 sm:p-8 overflow-hidden shadow-inner border border-stone-800">
              {/* Blueprint Grid Background Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative z-10 grid grid-cols-12 gap-3 min-h-[300px]">
                {/* Varanda Gourmet */}
                <div
                  onClick={() => setSelectedRoom(1)}
                  className={`col-span-12 sm:col-span-5 p-4 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    selectedRoom === 1
                      ? 'border-amber-400 bg-amber-500/20 text-white'
                      : 'border-stone-700 bg-stone-800/80 text-stone-300 hover:border-stone-500'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Varanda Gourmet
                    </span>
                    <span className="text-[11px] font-mono opacity-80">18.2 m²</span>
                  </div>
                  <p className="text-[11px] text-stone-300 mt-2">
                    Churrasqueira a carvão + Fechamento de vidro
                  </p>
                </div>

                {/* Living Integrado */}
                <div
                  onClick={() => setSelectedRoom(0)}
                  className={`col-span-12 sm:col-span-7 p-4 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    selectedRoom === 0
                      ? 'border-amber-400 bg-amber-500/20 text-white'
                      : 'border-stone-700 bg-stone-800/80 text-stone-300 hover:border-stone-500'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Living 3 Ambientes
                    </span>
                    <span className="text-[11px] font-mono opacity-80">34.5 m²</span>
                  </div>
                  <p className="text-[11px] text-stone-300 mt-2">
                    Estar + Jantar + Hall Social Privativo
                  </p>
                </div>

                {/* Cozinha & Área */}
                <div
                  onClick={() => setSelectedRoom(4)}
                  className={`col-span-12 sm:col-span-4 p-4 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    selectedRoom === 4
                      ? 'border-amber-400 bg-amber-500/20 text-white'
                      : 'border-stone-700 bg-stone-800/80 text-stone-300 hover:border-stone-500'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Cozinha & Serviço
                    </span>
                    <span className="text-[11px] font-mono opacity-80">16.0 m²</span>
                  </div>
                  <p className="text-[11px] text-stone-300 mt-2">
                    Ilha central + Despensa
                  </p>
                </div>

                {/* Suíte Master */}
                <div
                  onClick={() => setSelectedRoom(2)}
                  className={`col-span-12 sm:col-span-4 p-4 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    selectedRoom === 2
                      ? 'border-amber-400 bg-amber-500/20 text-white'
                      : 'border-stone-700 bg-stone-800/80 text-stone-300 hover:border-stone-500'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Suíte Master
                    </span>
                    <span className="text-[11px] font-mono opacity-80">19.8 m²</span>
                  </div>
                  <p className="text-[11px] text-stone-300 mt-2">
                    Com closet e banho spa
                  </p>
                </div>

                {/* Suítes 02 & 03 */}
                <div
                  onClick={() => setSelectedRoom(3)}
                  className={`col-span-12 sm:col-span-4 p-4 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    selectedRoom === 3
                      ? 'border-amber-400 bg-amber-500/20 text-white'
                      : 'border-stone-700 bg-stone-800/80 text-stone-300 hover:border-stone-500'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Suítes 02 & 03
                    </span>
                    <span className="text-[11px] font-mono opacity-80">27.0 m²</span>
                  </div>
                  <p className="text-[11px] text-stone-300 mt-2">
                    Dormitórios silenciosos
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-amber-400" />
                  Clique nos cômodos acima para ver detalhes das medidas
                </span>
                <span className="hidden sm:inline">2 vagas + depósito inclusos</span>
              </div>
            </div>
          </div>

          {/* Interactive Room Details Box */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Cômodo Selecionado
                </span>
                <span className="text-xl font-mono font-bold text-stone-900">
                  {rooms[selectedRoom].area}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
                {rooms[selectedRoom].name}
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                {rooms[selectedRoom].description}
              </p>

              <div className="space-y-2.5 mb-8">
                <span className="text-xs font-bold uppercase text-stone-500 tracking-wider">
                  Diferenciais do Ambiente:
                </span>
                {rooms[selectedRoom].items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action button linking to form */}
            <div className="pt-6 border-t border-stone-100">
              <a
                id="planta-tenho-interesse-cta"
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-sm shadow-md hover:from-amber-400 hover:to-amber-500 transition-all active:scale-[0.98]"
              >
                <span>Tenho Interesse nesta Planta</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] text-stone-500 mt-2">
                Receba o arquivo PDF da planta humanizada com todas as cotas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
