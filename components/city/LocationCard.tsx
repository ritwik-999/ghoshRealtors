import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { LocationZone } from '@/types/property';
import { formatNumberWithCommas } from '@/lib/property-filters';

interface LocationCardProps {
  location: LocationZone;
  listingCount: number;
}

export function LocationCard({ location, listingCount }: LocationCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded border border-[#EAE5DC] bg-[#FFFFFF] transition-colors hover:border-[#C4C7C3]">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFECE5]">
        <Image
          src={location.coverImage}
          alt={`${location.name}, ${location.city} residential enclave`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between gap-2 text-xs text-[#6B6A65]">
            <span className="label-caps text-[#8C703B]">{location.city}</span>
            <span className="tabular-nums">
              {listingCount} {listingCount === 1 ? 'Residence' : 'Residences'}
            </span>
          </div>

          <h3 className="font-display mt-2 text-2xl font-medium text-[#202321]">
            {location.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-[#353535]">{location.tagline}</p>
          <p className="mt-2.5 text-xs leading-relaxed text-[#6B6A65]">{location.character}</p>
        </div>

        <div className="mt-6 border-t border-[#EAE5DC] pt-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#6B6A65]">Median Benchmark</span>
            <span className="font-semibold tabular-nums text-[#202321]">
              ₹{formatNumberWithCommas(location.medianRatePerSqFt)} / sq ft
            </span>
          </div>
          <Link
            href={`/search?location=${encodeURIComponent(location.name)}`}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#202321] underline decoration-[#EAE5DC] underline-offset-4 transition-colors hover:text-[#8C703B] hover:decoration-[#8C703B]"
          >
            <span>Explore {location.name}</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
