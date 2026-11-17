import React from 'react';
import { getFeaturedProperties, testimonials } from '@/data/properties';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutCompanySection } from '@/components/home/AboutCompanySection';
import { FeaturedProperties } from '@/components/home/FeaturedProperties';
import { HandoverTrustSection } from '@/components/home/HandoverTrustSection';
import { Testimonials } from '@/components/home/Testimonials';

export default function HomePage() {
  const featured = getFeaturedProperties();

  return (
    <>
      <HeroSection />
      <AboutCompanySection />
      <FeaturedProperties items={featured} />
      <HandoverTrustSection />
      <Testimonials items={testimonials} />
    </>
  );
}
