import heroImage from '../assets/images/hero_apartment_living_1789843581145.jpg';
import balconyImage from '../assets/images/gourmet_balcony_view_1789843593536.jpg';
import suiteImage from '../assets/images/master_suite_luxury_1789843604152.jpg';
import poolImage from '../assets/images/rooftop_pool_view_1789843615269.jpg';

import { GalleryImage, Amenity, NearbyPoint, FAQItem } from '../types';

export const FORM_URL = 'https://forms.gle/CKv8GjxDY6rERfQF6';

export const PROPERTY_INFO = {
  name: 'Edifício Grand Horizon',
  tagline: 'Onde a sofisticação encontra a tranquilidade em cada metro quadrado.',
  subtitle: 'Apartamento de Alto Padrão à Venda',
  neighborhood: 'Jardins / Bairro Nobre',
  city: 'São Paulo - SP',
  priceFormatted: 'R$ 1.480.000',
  condoFormatted: 'R$ 1.180/mês',
  iptuFormatted: 'R$ 310/mês',
  privateArea: '142 m²',
  totalArea: '215 m²',
  suites: 3,
  bathrooms: 4,
  parkingSpaces: 2,
  floor: '14º Andar (Posição Sol da Manhã)',
  formUrl: FORM_URL,
};

export const KEY_METRICS = [
  { label: 'Área Privativa', value: '142 m²', detail: 'Planta inteligente' },
  { label: 'Suítes Plenas', value: '3 Suítes', detail: 'Todas com armários planejados' },
  { label: 'Vagas de Garagem', value: '2 Vagas', detail: 'Demarcadas + Depósito' },
  { label: 'Posição Solar', value: 'Sol da Manhã', detail: 'Excelente ventilação cruzada' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'living',
    title: 'Living Ampliado Integrado',
    category: 'Living & Varanda',
    imageUrl: heroImage,
    description: 'Pé-direito amplo, piso em porcelanato acetinado 120x120cm e iluminação natural abundante.',
  },
  {
    id: 'varanda',
    title: 'Varanda Gourmet com Churrasqueira',
    category: 'Living & Varanda',
    imageUrl: balconyImage,
    description: 'Bancada em granito São Gabriel, churrasqueira a carvão e fechamento retrátil de vidro.',
  },
  {
    id: 'suite',
    title: 'Suíte Master com Painel Ripado',
    category: 'Suítes',
    imageUrl: suiteImage,
    description: 'Espaço para cama King Size, persianas automatizadas e preparação para ar condicionado.',
  },
  {
    id: 'pool',
    title: 'Rooftop Lounge com Piscina Infinita',
    category: 'Lazer & Condomínio',
    imageUrl: poolImage,
    description: 'Vista deslumbrante em 360° da cidade, deck molhado e espreguiçadeiras anatômicas.',
  },
  {
    id: 'cozinha',
    title: 'Cozinha Conceito Aberto',
    category: 'Cozinha & Banho',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
    description: 'Ilha central em quartzo branco, marcenaria sob medida e ponto de água para geladeira e filtro.',
  },
  {
    id: 'banheiro-master',
    title: 'Banheiro da Suíte Master',
    category: 'Cozinha & Banho',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80',
    description: 'Cuba dupla esculpida em mármore, dois chuveiros de teto e nichos iluminados.',
  },
  {
    id: 'academia',
    title: 'Espaço Fitness Profissional',
    category: 'Lazer & Condomínio',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80',
    description: 'Equipamentos modernos Life Fitness, climatizado e com vista panorâmica para o jardim.',
  },
  {
    id: 'salao-festas',
    title: 'Espaço Gourmet & Salão de Festas',
    category: 'Lazer & Condomínio',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    description: 'Ambiente acústico decorado e equipado com chopeira embutida, adega e lounge externo.',
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: '1',
    title: 'Piscina no Rooftop',
    category: 'Lazer',
    icon: 'Waves',
    description: 'Piscina aquecida com borda infinita e solarium no 25º andar.',
  },
  {
    id: '2',
    title: 'Espaço Fitness Completo',
    category: 'Bem-estar',
    icon: 'Dumbbell',
    description: 'Aparelhos de última geração para musculação e cardio.',
  },
  {
    id: '3',
    title: 'Portaria Blindada 24h',
    category: 'Segurança',
    icon: 'ShieldCheck',
    description: 'Controle de acesso por biometria facial e monitoramento por IA.',
  },
  {
    id: '4',
    title: 'Varanda com Churrasqueira',
    category: 'Lazer',
    icon: 'Flame',
    description: 'Churrasqueira a carvão privativa com duto individual e exaustão mecânica.',
  },
  {
    id: '5',
    title: 'Coworking Climatizado',
    category: 'Facilidades',
    icon: 'Laptop',
    description: 'Estações individuais de trabalho e sala para reuniões com link de fibra.',
  },
  {
    id: '6',
    title: 'Vaga para Carro Elétrico',
    category: 'Facilidades',
    icon: 'Zap',
    description: 'Infraestrutura com medição individual para recarga automotiva.',
  },
  {
    id: '7',
    title: 'Pet Place & Banho Pet',
    category: 'Facilidades',
    icon: 'Dog',
    description: 'Área cercada e equipada para lazer e higiene do seu melhor amigo.',
  },
  {
    id: '8',
    title: 'Spa & Sauna Seca',
    category: 'Bem-estar',
    icon: 'Sparkles',
    description: 'Área de relaxamento com sauna seca, jacuzzi e duchas de hidromassagem.',
  },
];

export const NEARBY_POINTS: NearbyPoint[] = [
  {
    category: 'Parque',
    name: 'Parque Ibirapuera / Burle Marx',
    distance: '4 min a pé',
    description: 'Pista de caminhada, lago e natureza para seu dia a dia.',
  },
  {
    category: 'Gastronomia',
    name: 'Polo Gastronômico & Cafés',
    distance: '300m',
    description: 'Padarias artesanais, bistrôs premiados e adegas selecionadas.',
  },
  {
    category: 'Compras',
    name: 'Supermercado Gourmet St. Marche',
    distance: '3 min de carro',
    description: 'Praticidade diária com conveniência e hortifrúti fresco.',
  },
  {
    category: 'Educação',
    name: 'Colégios Bilíngues e Faculdades',
    distance: '6 min',
    description: 'Instituições de ensino de excelência a poucos minutos de casa.',
  },
  {
    category: 'Saúde',
    name: 'Hospital e Clínicas Médicas Especializadas',
    distance: '5 min',
    description: 'Atendimento médico de referência com tranquilidade para a família.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'O apartamento aceita financiamento imobiliário e FGTS?',
    answer:
      'Sim! Toda a documentação e escritura estão 100% regularizadas e desimpedidas, permitindo aprovação de financiamento em qualquer instituição bancária (Itaú, Bradesco, Caixa, Santander, BB), além de uso do FGTS.',
  },
  {
    question: 'Como funciona o agendamento de visitas presenciais?',
    answer:
      'Basta clicar no botão "Tenho Interesse" e preencher o formulário rápido. Nossa equipe entrará em contato em minutos via WhatsApp ou telefone para agendar o melhor dia e horário de acordo com sua conveniência.',
  },
  {
    question: 'Os armários planejados e aparelhos de ar condicionado ficam?',
    answer:
      'Sim, todos os armários planejados em marcenaria de alta densidade nas 3 suítes, cozinha e banheiros permanecem no imóvel. Equipamentos de ar condicionado inverter também estão inclusos na negociação.',
  },
  {
    question: 'Estuda permuta por outro imóvel ou veículo?',
    answer:
      'Podemos avaliar automóveis de liquidez imediata ou imóveis de menor valor como parte de pagamento mediante análise prévia. Indique essa preferência no formulário de interesse.',
  },
  {
    question: 'Qual é a posição solar e o andar da unidade?',
    answer:
      'Fica no 14º andar com vista livre e panorâmica permanente, com incidência do Sol da Manhã na varanda e suítes, proporcionando luminosidade perfeita e conforto térmico o ano todo.',
  },
];
