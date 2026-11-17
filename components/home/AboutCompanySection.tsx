import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Building2, CheckCircle2, Compass, ShieldCheck } from 'lucide-react';

const VALUE_PILLARS = [
  { icon: Award, label: 'Realty Services Par Excellence' },
  { icon: Compass, label: '35 Years of Advisory Heritage' },
  { icon: Building2, label: 'Complete Property Solutions' },
  { icon: ShieldCheck, label: 'Trusted by Discerning Families' },
  { icon: CheckCircle2, label: 'Kolkata Curated Exclusively' },
];

export function AboutCompanySection() {
  return (
    <section className="border-b border-[#EAE5DC] bg-[#F7F5F0]">
      {/* Upper Editorial Split */}
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-16 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Dual Architectural Photography Frame */}
          <div className="grid grid-cols-12 items-center gap-4 lg:col-span-6">
            <div className="relative col-span-7 aspect-[4/3] overflow-hidden rounded border border-[#EAE5DC] bg-[#EFECE5]">
              <Image
                src="/images/about-architectural-atelier.jpg"
                alt="Aurelia Estates real estate advisors reviewing architectural plans"
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-5 aspect-[4/5] overflow-hidden rounded border border-[#EAE5DC] bg-[#EFECE5]">
              <Image
                src="/images/prop-alipore-manor.jpg"
                alt="Heritage Kolkata residential architecture"
                fill
                sizes="(max-width: 1024px) 40vw, 22vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Narrative Copy */}
          <div className="lg:col-span-6">
            <p className="label-caps text-[#8C703B]">About Us</p>
            <h2 className="font-display mt-2 text-3xl font-normal leading-tight tracking-[-0.01em] text-[#202321] text-balance md:text-[42px] md:leading-[50px]">
              Know More About Our Company
            </h2>
            <p className="mt-4 text-base leading-[26px] text-[#353535]">
              Aurelia Estates is dedicated to delivering architectural real estate advisory in
              Kolkata with a focus on structural integrity, title transparency, and quiet
              client stewardship. Upcoming residential mandates are currently being prepared for
              private release.
            </p>

            <div className="mt-6 border-y border-[#EAE5DC] py-4">
              <p className="text-sm text-[#6B6A65]">Realty Services Par Excellence</p>
              <p className="font-display mt-0.5 text-xl font-medium text-[#8C703B]">
                Kolkata Advisory Desk · Since 1991
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex h-11 items-center justify-center rounded bg-[#202321] px-6 text-sm font-medium text-[#F7F5F0] whitespace-nowrap transition-colors hover:bg-[#353535]"
              >
                Explore Practice
              </Link>
              <Link
                href="/city/kolkata"
                className="inline-flex h-11 items-center justify-center rounded border border-[#202321] px-6 text-sm font-medium text-[#202321] whitespace-nowrap transition-colors hover:bg-[#202321] hover:text-[#F7F5F0]"
              >
                Kolkata Enclaves
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lower 5-Pillar Architectural Charcoal Strip */}
      <div className="bg-[#202321] text-[#F7F5F0]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-[#FFFFFF]/10 px-6 py-8 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x lg:px-16">
          {VALUE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.label}
                className="flex flex-col items-center justify-center gap-3 px-4 py-5 text-center"
              >
                <Icon className="h-6 w-6 text-[#B89A62]" aria-hidden="true" />
                <p className="text-xs font-medium leading-relaxed text-[#F5F0E7]">
                  {pillar.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
