import React from 'react';
import type { DeveloperPartner } from '@/types/property';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface DeveloperSectionProps {
  developers: DeveloperPartner[];
}

export function DeveloperSection({ developers }: DeveloperSectionProps) {
  return (
    <section className="border-b border-[#EAE5DC] bg-[#FFFFFF] py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <SectionHeading
          kicker="Architectural Collaborators"
          title="Trusted Development Houses"
          description="We partner exclusively with builders and architectural studios whose structural workmanship endures decades of monsoon and urban change."
          actionLabel="Our Advisory Ethos"
          actionHref="/about"
        />

        <div className="mt-10 grid grid-cols-1 divide-y divide-[#EAE5DC] border border-[#EAE5DC] md:grid-cols-2 md:divide-x md:divide-y-0">
          {developers.map((dev, index) => (
            <div
              key={dev.id}
              className={`flex flex-col justify-between p-8 ${
                index >= 2 ? 'md:border-t md:border-[#EAE5DC]' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-xs text-[#6B6A65]">
                  <span className="label-caps text-[#8C703B]">
                    Est. {dev.foundedYear} · {dev.headquarters}
                  </span>
                  <span className="tabular-nums font-medium text-[#202321]">
                    {dev.completedSqFt}
                  </span>
                </div>
                <h3 className="font-display mt-3 text-2xl font-medium text-[#202321]">
                  {dev.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#6B6A65]">{dev.specialty}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#353535]">{dev.summary}</p>
              </div>

              <div className="mt-6 border-t border-[#EAE5DC] pt-4 text-xs text-[#6B6A65]">
                Signature Mandate:{' '}
                <span className="font-medium text-[#202321]">{dev.signatureProject}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
