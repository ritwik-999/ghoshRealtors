import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, Landmark, MapPinned, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const TRUST_CARDS = [
  {
    icon: Compass,
    title: 'Personalized Search & Selection',
    description:
      'Our experienced Kolkata advisors evaluate orientation, layout efficiency, and street provenance to match your exact family brief ahead of public release.',
  },
  {
    icon: Landmark,
    title: 'Loan Assistance & Legal Advice',
    description:
      'Long-standing institutional banking relationships paired with fifty-year freehold and WBRERA title scrutiny ensure clean, predictable closings.',
  },
  {
    icon: MapPinned,
    title: 'Expert-Guided Site Visits',
    description:
      'Every upcoming residence inspection is accompanied by a senior property advisor to review daylight angles, acoustic glazing, and build finishes.',
  },
  {
    icon: ShieldCheck,
    title: 'Support from Purchase to Possession—and Beyond',
    description:
      'We remain accountable from initial dossier review through registration, handover inspection, and post-possession residence management.',
  },
];

export function HandoverTrustSection() {
  return (
    <>
      {/* Handholding till Handover and Beyond Split */}
      <section className="border-b border-[#EAE5DC] bg-[#FFFFFF] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded border border-[#EAE5DC] bg-[#EFECE5] lg:col-span-6">
              <Image
                src="/images/prop-southern-avenue-atelier.jpg"
                alt="Sunlit living room interior representing smooth residence handover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 lg:pl-4">
              <p className="label-caps text-[#8C703B]">Client Stewardship</p>
              <h2 className="font-display mt-2 text-3xl font-normal leading-tight tracking-[-0.01em] text-[#202321] text-balance md:text-[42px] md:leading-[50px]">
                Handholding till Handover and Beyond
              </h2>
              <p className="mt-4 text-base leading-[26px] text-[#353535]">
                Experience stewardship beyond traditional brokerage. Every family and collector
                receives dedicated legal, financial, and architectural support from initial Kolkata
                shortlisting through key handover and beyond.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded bg-[#202321] px-6 text-sm font-medium text-[#F7F5F0] whitespace-nowrap transition-colors hover:bg-[#353535]"
                >
                  Register for Priority Release
                </Link>
                <Link
                  href="/properties"
                  className="inline-flex h-12 items-center justify-center rounded border border-[#202321] px-6 text-sm font-medium text-[#202321] whitespace-nowrap transition-colors hover:bg-[#202321] hover:text-[#F7F5F0]"
                >
                  View Upcoming Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Trust 2x2 Grid */}
      <section className="border-b border-[#EAE5DC] bg-[#F8F3EA]/60 py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <SectionHeading
            kicker="Why Aurelia"
            title="Experience & Trust"
            description="Your dedicated Kolkata advisor for upcoming residential mandates, delivering a transparent process every step of the way."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {TRUST_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded border border-[#EAE5DC] bg-[#FFFFFF] p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded border border-[#EAE5DC] bg-[#F4EFE6] text-[#8C703B]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium text-[#202321]">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#353535]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
