import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getLocationsByCity } from '@/data/locations';
import { properties } from '@/data/properties';
import { LocationCard } from '@/components/city/LocationCard';
import { PropertyCatalogClient } from '@/components/property/PropertyCatalogClient';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [{ slug: 'kolkata' }];
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cityName = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    title: `${cityName} Luxury Residences & Neighbourhood Monograph`,
    description: `Explore curated architectural estates across Alipore, Ballygunge, Southern Avenue, Park Street, New Town, and EM Bypass in ${cityName}.`,
    openGraph: {
      title: `${cityName} Luxury Residences | Aurelia Estates`,
      description: `Curated neighbourhood benchmarks and architectural estates in ${cityName}.`,
    },
  };
}

export default async function CityLandingPage({ params }: CityPageProps) {
  const { slug } = await params;
  const citySlug = slug.toLowerCase();
  const cityLocations = getLocationsByCity(citySlug);
  const effectiveLocations =
    cityLocations.length > 0 ? cityLocations : getLocationsByCity('kolkata');
  const cityProperties = properties.filter((p) => p.citySlug === citySlug);
  const displayProperties = cityProperties.length > 0 ? cityProperties : properties;
  const cityName = slug.toLowerCase() === 'kolkata' ? 'Kolkata' : slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="bg-[#F7F5F0]">
      {/* City Monograph Header */}
      <section className="border-b border-[#EAE5DC] py-14 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="label-caps text-[#8C703B]">City Monograph · West Bengal</p>
              <h1 className="font-display mt-3 text-[40px] font-normal leading-[48px] tracking-[-0.015em] text-[#202321] text-balance lg:text-[54px] lg:leading-[62px]">
                {cityName}: Six Residential Enclaves of Enduring Character
              </h1>
              <p className="mt-5 text-base leading-[26px] text-[#353535]">
                From the colonnaded heritage plots of Alipore and leafy cul-de-sacs of Ballygunge
                to the cantilevered water courts of New Town, our {cityName} practice tracks
                street-level provenance, solar orientation, and per-square-foot benchmarks across
                the city’s prime residential corridors.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#city-enclaves"
                  className="inline-flex h-11 items-center justify-center rounded bg-[#202321] px-6 text-sm font-medium text-[#F7F5F0] transition-colors hover:bg-[#353535]"
                >
                  Inspect Enclaves
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded border border-[#202321] px-6 text-sm font-medium text-[#202321] transition-colors hover:bg-[#202321] hover:text-[#F7F5F0]"
                >
                  Book City Tour
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded border border-[#EAE5DC] bg-[#EFECE5]">
                <Image
                  src="/images/prop-alipore-manor.jpg"
                  alt="Restored neo-classical Alipore residence in Kolkata"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enclaves Grid */}
      <section id="city-enclaves" className="border-b border-[#EAE5DC] bg-[#F8F3EA]/60 py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <SectionHeading
            kicker="Neighbourhood Ledger"
            title={`${cityName} Micro-Markets`}
            description="Compare architectural fabric, median per-square-foot rates, and arterial connectivity before shortlisting."
          />

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {effectiveLocations.map((loc) => {
              const count = displayProperties.filter(
                (p) => p.neighborhood.toLowerCase() === loc.name.toLowerCase()
              ).length;
              return <LocationCard key={loc.slug} location={loc} listingCount={count} />;
            })}
          </div>
        </div>
      </section>

      {/* City Properties Catalog */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <SectionHeading
            kicker="Active Mandates"
            title={`Residences Available in ${cityName}`}
          />

          <div className="mt-10">
            <PropertyCatalogClient allProperties={displayProperties} pageSize={6} />
          </div>
        </div>
      </section>
    </div>
  );
}
