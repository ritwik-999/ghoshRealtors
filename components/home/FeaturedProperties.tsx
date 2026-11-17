import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Property } from '@/types/property';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PropertyCard } from '@/components/property/PropertyCard';

interface FeaturedPropertiesProps {
  items: Property[];
}

export function FeaturedProperties({ items }: FeaturedPropertiesProps) {
  return (
    <section className="border-b border-[#EAE5DC] bg-[#F7F5F0] py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <SectionHeading
          kicker="Kolkata Portfolio · Coming Soon"
          title="Upcoming Residences Across Kolkata"
          description="Upcoming residential mandates across Alipore, Ballygunge, Southern Avenue, Park Street, New Town, and EM Bypass. Full property details are coming soon."
          actionLabel="Explore Kolkata Guide"
          actionHref="/city/kolkata"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded border border-[#EAE5DC] bg-[#FFFFFF] p-8 md:flex-row md:items-center">
          <div>
            <p className="label-caps text-[#8C703B]">Kolkata Exclusively</p>
            <h3 className="font-display mt-2 text-2xl font-medium text-[#202321]">
              Comparing Kolkata Enclaves Ahead of Launch?
            </h3>
            <p className="mt-1 text-sm text-[#6B6A65]">
              Explore Alipore, Ballygunge, Southern Avenue, Park Street, New Town, and EM Bypass
              neighbourhood intelligence while project dossiers are prepared.
            </p>
          </div>
          <Link
            href="/city/kolkata"
            className="inline-flex h-12 items-center justify-center gap-2 rounded bg-[#202321] px-6 text-sm font-medium text-[#F7F5F0] whitespace-nowrap shrink-0 transition-colors hover:bg-[#353535]"
          >
            <span>Open Kolkata Monograph</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
