import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertyHighlights } from './components/PropertyHighlights';
import { FloorPlanSection } from './components/FloorPlanSection';
import { GallerySection } from './components/GallerySection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { LocationSection } from './components/LocationSection';
import { FinancialCalculator } from './components/FinancialCalculator';
import { FAQSection } from './components/FAQSection';
import { InterestCTASection } from './components/InterestCTASection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col selection:bg-amber-500 selection:text-stone-950 pb-16 md:pb-0">
      <Header />
      <main className="flex-1">
        <Hero />
        <PropertyHighlights />
        <FloorPlanSection />
        <GallerySection />
        <AmenitiesSection />
        <LocationSection />
        <FinancialCalculator />
        <FAQSection />
        <InterestCTASection />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}
