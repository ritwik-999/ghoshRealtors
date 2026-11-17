import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { getPropertyBySlug, properties } from '@/data/properties';
import { PropertyGallery } from '@/components/property/PropertyGallery';
import { PropertyActionBar } from '@/components/property/PropertyActionBar';
import { EnquiryForm } from '@/components/property/EnquiryForm';
import { PropertyCard } from '@/components/property/PropertyCard';

interface PropertyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PropertyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) {
    return { title: 'Residence Not Found' };
  }

  return {
    title: `Coming Soon — ${property.neighborhood}, ${property.city}`,
    description: `Upcoming residential release in ${property.neighborhood}, ${property.city}. Full property details, floorplans, and pricing are coming soon.`,
    openGraph: {
      title: `Coming Soon — ${property.neighborhood}, ${property.city} | Aurelia Estates`,
      description: `Upcoming residential release in ${property.neighborhood}, ${property.city}. Property details coming soon.`,
      images: [
        {
          url: property.heroImage,
          width: 1200,
          height: 900,
          alt: `Coming Soon — ${property.neighborhood}, ${property.city}`,
        },
      ],
    },
  };
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const related = properties
    .filter((p) => p.id !== property.id)
    .sort((a, b) =>
      a.neighborhood === property.neighborhood ? -1 : b.neighborhood === property.neighborhood ? 1 : 0
    )
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'Coming Soon',
    description: `Upcoming residential release in ${property.neighborhood}, ${property.city}. Property details coming soon.`,
    image: property.heroImage,
    url: `/properties/${property.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.city,
      addressRegion: 'WB',
      addressCountry: 'IN',
    },
  };

  const specificationRows = [
    { label: 'Destination City', value: 'Kolkata' },
    { label: 'Enclave', value: property.neighborhood },
    { label: 'Architectural Typology', value: property.propertyType },
    { label: 'Configuration', value: 'Coming Soon' },
    { label: 'Super Built-Up & Carpet Area', value: 'Coming Soon' },
    { label: 'Floor Plate & Orientation', value: 'Coming Soon' },
    { label: 'Possession Timeline', value: 'Coming Soon' },
    { label: 'WBRERA & Title Dossier', value: 'Coming Soon' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="bg-[#F7F5F0] py-10 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#6B6A65]">
            <Link href="/" className="hover:text-[#202321]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <Link href="/city/kolkata" className="hover:text-[#202321]">
              Kolkata
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <Link
              href={`/search?location=${encodeURIComponent(property.neighborhood)}`}
              className="hover:text-[#202321]"
            >
              {property.neighborhood}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="font-medium text-[#202321]">Coming Soon</span>
          </nav>

          {/* Header Summary */}
          <header className="border-b border-[#EAE5DC] pb-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B6A65]">
                  <span className="rounded-full bg-[#F4EFE6] px-3 py-1 font-semibold uppercase tracking-[0.06em] text-[#8C703B]">
                    Coming Soon
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{property.neighborhood}, Kolkata</span>
                  <span aria-hidden="true">·</span>
                  <span>{property.propertyType}</span>
                </div>

                <h1 className="font-display mt-4 text-[36px] font-normal leading-tight tracking-[-0.01em] text-[#202321] text-balance md:text-[48px] md:leading-[56px]">
                  Coming Soon
                </h1>
                <p className="mt-2 text-base text-[#6B6A65]">
                  {property.neighborhood}, Kolkata — Full residence dossier releasing shortly.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-end">
                <div className="lg:text-right">
                  <p className="label-caps text-[#6B6A65]">Guide Valuation</p>
                  <p className="font-display mt-1 text-3xl font-medium text-[#202321] md:text-4xl">
                    Coming Soon
                  </p>
                </div>
                <PropertyActionBar
                  propertyId={property.id}
                  propertyTitle="Coming Soon"
                  neighborhood={property.neighborhood}
                  priceCrores={property.priceCrores}
                />
              </div>
            </div>
          </header>

          {/* Contiguous Two-Column Architectural Dossier */}
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column */}
            <div className="space-y-12 lg:col-span-7">
              <PropertyGallery
                title={`Coming Soon — ${property.neighborhood}`}
                items={property.gallery.map((item, idx) => ({
                  ...item,
                  caption: `Architectural preview plate ${idx + 1} · Full property details coming soon`,
                }))}
              />

              {/* Key Metric Strip */}
              <div className="grid grid-cols-2 gap-6 border-y border-[#EAE5DC] py-6 sm:grid-cols-4">
                <div>
                  <p className="label-caps text-[#6B6A65]">Configuration</p>
                  <p className="mt-1.5 text-base font-semibold text-[#202321]">Coming Soon</p>
                </div>
                <div>
                  <p className="label-caps text-[#6B6A65]">Area</p>
                  <p className="mt-1.5 text-base font-semibold text-[#202321]">Coming Soon</p>
                </div>
                <div>
                  <p className="label-caps text-[#6B6A65]">Floorplans</p>
                  <p className="mt-1.5 text-base font-semibold text-[#202321]">Coming Soon</p>
                </div>
                <div>
                  <p className="label-caps text-[#6B6A65]">Possession</p>
                  <p className="mt-1.5 text-base font-semibold text-[#202321]">Coming Soon</p>
                </div>
              </div>

              {/* Release Notice */}
              <section className="rounded border border-[#EAE5DC] bg-[#FFFFFF] p-7">
                <p className="label-caps text-[#8C703B]">Pre-Release Advisory Notice</p>
                <h2 className="font-display mt-2 text-2xl font-medium text-[#202321]">
                  Property Details Coming Soon
                </h2>
                <p className="mt-3 text-base leading-[26px] text-[#353535]">
                  Architectural drawings, carpet area schedules, WBRERA documentation, and guide
                  valuations for this upcoming {property.neighborhood}, Kolkata residence are
                  currently under final verification. Register via the advisory form to receive the
                  private dossier ahead of public release.
                </p>
              </section>

              {/* Specification Ledger */}
              <section>
                <p className="label-caps text-[#8C703B]">Technical Dossier</p>
                <h2 className="font-display mt-2 text-2xl font-medium text-[#202321]">
                  Specification & Title Status
                </h2>
                <dl className="mt-4 divide-y divide-[#EAE5DC] rounded border border-[#EAE5DC] bg-[#FFFFFF]">
                  {specificationRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col justify-between gap-1 px-5 py-3.5 sm:flex-row sm:items-center"
                    >
                      <dt className="text-xs font-medium text-[#6B6A65]">{row.label}</dt>
                      <dd className="text-sm font-medium text-[#202321]">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>

            {/* Right Sticky Advisory Column */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <EnquiryForm
                  propertySlug={property.slug}
                  propertyTitle="Coming Soon"
                  neighborhood={property.neighborhood}
                  defaultInquiryType="Floorplan Dossier"
                />
              </div>
            </aside>
          </div>

          {/* Comparable Residences */}
          <section className="mt-20 border-t border-[#EAE5DC] pt-14">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="label-caps text-[#8C703B]">Kolkata Portfolio</p>
                <h2 className="font-display mt-2 text-3xl font-normal text-[#202321]">
                  Other Upcoming Residences
                </h2>
              </div>
              <Link
                href="/properties"
                className="text-sm font-medium text-[#202321] underline decoration-[#EAE5DC] underline-offset-4 hover:decoration-[#202321]"
              >
                View all residences
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <PropertyCard key={item.id} property={item} />
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
