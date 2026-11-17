import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { developers } from '@/data/properties';

export const metadata: Metadata = {
  title: 'About Our Architectural Advisory',
  description:
    'Learn how Aurelia Estates evaluates structural craft, heritage title provenance, and residential design across Kolkata.',
};

const METHODOLOGY_PILLARS = [
  {
    index: '01. Provenance & Title Rigour',
    title: 'Independent Freehold & WBRERA Audits',
    detail:
      'Every estate enters our portfolio only after fifty-year chain-of-title verification, municipal mutation clearance, and structural engineer sign-off.',
  },
  {
    index: '02. Environmental Calibration',
    title: 'Daylight, Acoustic & Thermal Evaluation',
    detail:
      'We inspect homes across morning and dusk hours to measure cross-ventilation, western sun shielding, and street acoustic attenuation.',
  },
  {
    index: '03. Discreet Private Treaty',
    title: 'Confidential Family Office Representation',
    detail:
      'Over 60% of our heritage bungalow mandates transact quietly without public signage, protecting buyer and seller privacy.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F7F5F0]">
      <section className="border-b border-[#EAE5DC] py-14 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <div className="max-w-3xl">
            <p className="label-caps text-[#8C703B]">The Advisory Practice</p>
            <h1 className="font-display mt-3 text-[36px] font-normal leading-tight tracking-[-0.01em] text-[#202321] text-balance md:text-[52px] md:leading-[60px]">
              An architectural monograph approach to residential real estate.
            </h1>
            <p className="mt-5 text-base leading-[28px] text-[#353535]">
              Founded in Kolkata, Aurelia Estates was established as a quiet alternative to
              high-volume brokerage portals. Our advisors work alongside conservation architects,
              structural engineers, and property counsel to represent residences of genuine spatial
              merit.
            </p>
          </div>

          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded border border-[#EAE5DC] bg-[#EFECE5]">
            <Image
              src="/images/about-architectural-atelier.jpg"
              alt="Aurelia Estates advisors reviewing architectural blueprints and brass scale models"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[#EAE5DC] bg-[#FFFFFF] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <p className="label-caps text-[#8C703B]">Curation Standard</p>
          <h2 className="font-display mt-2 text-3xl font-normal text-[#202321] md:text-4xl">
            Three Pillars of Representation
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {METHODOLOGY_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="rounded border border-[#EAE5DC] bg-[#F7F5F0]/50 p-7"
              >
                <p className="label-caps text-[#8C703B]">{pillar.index}</p>
                <h3 className="font-display mt-3 text-2xl font-medium text-[#202321]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#353535]">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <div className="flex flex-col justify-between gap-6 border-b border-[#EAE5DC] pb-6 md:flex-row md:items-end">
            <div>
              <p className="label-caps text-[#8C703B]">Development Alliances</p>
              <h2 className="font-display mt-2 text-3xl font-normal text-[#202321]">
                Partner Studios & Builders
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded bg-[#202321] px-6 text-sm font-medium text-[#F7F5F0] whitespace-nowrap transition-colors hover:bg-[#353535]"
            >
              Speak With an Advisor
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {developers.map((dev) => (
              <div
                key={dev.id}
                className="rounded border border-[#EAE5DC] bg-[#FFFFFF] p-7"
              >
                <p className="label-caps text-[#8C703B]">
                  {dev.headquarters} · Est. {dev.foundedYear}
                </p>
                <h3 className="font-display mt-2 text-2xl font-medium text-[#202321]">
                  {dev.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#353535]">{dev.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
