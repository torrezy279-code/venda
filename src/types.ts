export interface PropertyFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface Amenity {
  id: string;
  title: string;
  category: 'Lazer' | 'Bem-estar' | 'Segurança' | 'Facilidades';
  icon: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Living & Varanda' | 'Suítes' | 'Cozinha & Banho' | 'Lazer & Condomínio';
  imageUrl: string;
  description: string;
}

export interface NearbyPoint {
  category: 'Parque' | 'Gastronomia' | 'Educação' | 'Compras' | 'Saúde';
  name: string;
  distance: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
