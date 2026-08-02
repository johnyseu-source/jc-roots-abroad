'use client';

import Header from '@/components/Header';
import HeroRefined from '@/components/HeroRefined';
import LogoShowcase from '@/components/LogoShowcase';
import ProductGallery from '@/components/ProductGallery';
import CraftProcess from '@/components/CraftProcess';
import BrandStory from '@/components/BrandStory';
import Testimonials from '@/components/Testimonials';
import DesignCustomizer from '@/components/DesignCustomizer';
import ServicesMenu from '@/components/ServicesMenu';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroRefined />
      <LogoShowcase />
      <ProductGallery />
      <CraftProcess />
      <BrandStory />
      <Testimonials />
      <DesignCustomizer />
      <ServicesMenu />
      <Footer />
    </main>
  );
}
