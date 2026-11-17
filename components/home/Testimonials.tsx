import React from 'react';
import Link from 'next/link';
import type { Testimonial } from '@/types/property';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface TestimonialsProps {
  items: Testimonial[];
}

export function Testimonials({ items }: TestimonialsProps) {
  return (
    <section className="bg-[#F7F5F0] py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <SectionHeading
          kicker="Patron Perspectives"
          title="Quiet Stewardship From Inquiry to Deed"
          description="Representative client mandates across Alipore, Ballygunge, and Southern Avenue."
          actionLabel="Schedule a Consultation"
          actionHref="/contact"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {items.map((item) => (
            <blockquote
              key={item.id}
              className="flex flex-col justify-between rounded border border-[#EAE5DC] bg-[#FFFFFF] p-8"
            >
              <div>
                <p className="label-caps text-[#8C703B]">
                  {item.neighborhood} · {item.acquiredProperty}
                </p>
                <p className="font-display mt-4 text-lg leading-relaxed text-[#202321]">
                  “{item.quote}”
                </p>
              </div>

              <footer className="mt-8 border-t border-[#EAE5DC] pt-5">
                <p className="text-sm font-semibold text-[#202321]">{item.clientName}</p>
                <p className="mt-0.5 text-xs text-[#6B6A65]">{item.role}</p>
                <p className="mt-2 text-xs font-medium text-[#8C703B]">{item.outcome}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded border border-[#EAE5DC] bg-[#202321] px-8 py-10 text-[#F7F5F0] md:flex-row">
          <div className="max-w-xl">
            <p className="label-caps text-[#B89A62]">Private Office Desk</p>
            <h3 className="font-display mt-2 text-2xl font-normal text-[#F7F5F0] md:text-3xl">
              Seeking an off-market estate or architectural walkthrough in Kolkata?
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded bg-[#F7F5F0] px-7 text-sm font-medium text-[#202321] whitespace-nowrap shrink-0 transition-colors hover:bg-[#EAE5DC]"
          >
            Request Private Dossier
          </Link>
        </div>
      </div>
    </section>
  );
}
