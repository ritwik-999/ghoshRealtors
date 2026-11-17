import React from 'react';
import type { Metadata } from 'next';
import { properties } from '@/data/properties';
import { PropertyCatalogClient } from '@/components/property/PropertyCatalogClient';

export const metadata: Metadata = {
  title: 'All Architectural Residences',
  description:
    'Browse verified bungalows, penthouses, sky villas, and lakefront residences across Kolkata.',
  openGraph: {
    title: 'All Architectural Residences | Aurelia Estates',
    description:
      'Browse verified bungalows, penthouses, sky villas, and lakefront residences across Kolkata.',
  },
};

interface PropertiesPageProps {
  searchParams: Promise<{
    type?: string;
    location?: string;
    budget?: string;
    config?: string;
    q?: string;
    sort?: string;
    saved?: string;
  }>;
}

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const resolved = await searchParams;

  return (
    <section className="bg-[#F7F5F0] py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <header className="border-b border-[#EAE5DC] pb-8">
          <p className="label-caps text-[#8C703B]">Complete Portfolio</p>
          <h1 className="font-display mt-3 text-[36px] font-normal leading-tight tracking-[-0.01em] text-[#202321] text-balance md:text-[48px] md:leading-[56px]">
            Architectural Residences in Kolkata
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#6B6A65]">
            Filter by neighbourhood enclave, architectural typology, budget bracket, or revisit
            your saved shortlist for private viewing requests.
          </p>
        </header>

        <div className="mt-10">
          <PropertyCatalogClient
            allProperties={properties}
            pageSize={6}
            initialFilters={{
              type: resolved.type,
              location: resolved.location,
              budget: resolved.budget,
              config: resolved.config,
              q: resolved.q,
              sort: resolved.sort,
              onlySaved: resolved.saved === '1',
            }}
          />
        </div>
      </div>
    </section>
  );
}
