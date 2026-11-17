import React from 'react';
import type { Metadata } from 'next';
import { properties } from '@/data/properties';
import { PropertyCatalogClient } from '@/components/property/PropertyCatalogClient';

export const metadata: Metadata = {
  title: 'Search Architectural Residences',
  description:
    'Search luxury apartments, penthouses, courtyard villas, and heritage bungalows in Kolkata by enclave, budget, and configuration.',
};

interface SearchPageProps {
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

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolved = await searchParams;

  const activeParts = [
    resolved.type && resolved.type !== 'all' ? resolved.type : null,
    resolved.location && resolved.location !== 'all' ? resolved.location : null,
    resolved.config && resolved.config !== 'all' ? resolved.config : null,
    resolved.q ? `“${resolved.q}”` : null,
  ].filter(Boolean);

  return (
    <section className="bg-[#F7F5F0] py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <header className="border-b border-[#EAE5DC] pb-8">
          <p className="label-caps text-[#8C703B]">Portfolio Search</p>
          <h1 className="font-display mt-3 text-[36px] font-normal leading-tight tracking-[-0.01em] text-[#202321] text-balance md:text-[48px] md:leading-[56px]">
            {activeParts.length > 0
              ? `Results for ${activeParts.join(' · ')}`
              : 'Search Curated Residences'}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-[#6B6A65]">
            Refine your parameters below to isolate residences matching your spatial, budget, and
            neighbourhood requirements.
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
