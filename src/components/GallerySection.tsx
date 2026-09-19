import React, { useState } from 'react';
import {
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { GALLERY_IMAGES, FORM_URL } from '../data/propertyData';
import { GalleryImage } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    'Todas',
    'Living & Varanda',
    'Suítes',
    'Cozinha & Banho',
    'Lazer & Condomínio',
  ];

  const filteredImages =
    activeCategory === 'Todas'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === 0
        ? filteredImages.length - 1
        : selectedImageIndex - 1
    );
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === filteredImages.length - 1
        ? 0
        : selectedImageIndex + 1
    );
  };

  const selectedImage: GalleryImage | null =
    selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  return (
    <section id="galeria" className="py-20 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Tour Visual Completo</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
              Explore cada detalhe do apartamento
            </h2>
            <p className="text-stone-400 text-base max-w-xl">
              Fotografias em alta resolução dos cômodos, varanda gourmet e das sofisticadas áreas de lazer do condomínio.
            </p>
          </div>

          <a
            id="gallery-tenho-interesse-top"
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm shadow-md transition-all self-start md:self-auto"
          >
            <span>Tenho Interesse</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-stone-800 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedImageIndex(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative aspect-video sm:aspect-4/3 rounded-xl overflow-hidden cursor-pointer bg-stone-800 border border-stone-700/60"
            >
              <img
                src={image.imageUrl}
                alt={image.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Tag & Overlay Content */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="w-8 h-8 rounded-full bg-stone-900/80 backdrop-blur-sm text-white flex items-center justify-center">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="inline-block text-[10px] tracking-wider font-semibold text-amber-400 uppercase bg-stone-900/80 px-2 py-0.5 rounded mb-1 backdrop-blur-sm">
                  {image.category}
                </span>
                <h3 className="text-white text-sm font-bold truncate">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && selectedImageIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 backdrop-blur-md p-4">
            <div className="relative max-w-5xl w-full flex flex-col items-center">
              {/* Top Controls */}
              <div className="w-full flex items-center justify-between text-white pb-3 border-b border-stone-800 mb-4">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-300">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-stone-400">
                    {selectedImageIndex + 1} de {filteredImages.length} • {selectedImage.category}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    id="modal-tenho-interesse-cta"
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500 text-stone-950 text-xs font-bold hover:bg-amber-400"
                  >
                    <span>Tenho Interesse</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedImageIndex(null)}
                    className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Main Image View */}
              <div className="relative w-full aspect-video sm:aspect-16/10 max-h-[70vh] rounded-xl overflow-hidden bg-stone-900 flex items-center justify-center">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-full object-contain"
                />

                {/* Left/Right buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-amber-500 hover:text-stone-950 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-amber-500 hover:text-stone-950 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Caption & Mobile CTA */}
              <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <p className="text-stone-300 text-sm max-w-2xl">
                  {selectedImage.description}
                </p>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md"
                >
                  <span>Tenho Interesse nesta unidade</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
