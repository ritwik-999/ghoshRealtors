'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bookmark, Building2 } from 'lucide-react';
import type { Property } from '@/types/property';
import { useWishlist } from '@/components/providers/WishlistProvider';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  const { isSaved, toggleSaved, hydrated } = useWishlist();
  const [imgError, setImgError] = useState(false);
  const saved = hydrated && isSaved(property.id);

  return (
    <article className="group flex flex-col overflow-hidden rounded border border-[#EAE5DC] bg-[#FFFFFF] transition-colors duration-200 hover:border-[#C4C7C3]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFECE5]">
        <Link
          href={`/properties/${property.slug}`}
          className="relative block h-full w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89A62]"
          aria-label={`View upcoming residence in ${property.neighborhood} (${property.propertyType})`}
        >
          {!imgError ? (
            <Image
              src={property.heroImage}
              alt={`Coming Soon — ${property.neighborhood}, ${property.city}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              onError={() => setImgError(true)}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#F4EFE6] to-[#EAE5DC] p-6 text-center text-[#6B6A65]">
              <Building2 className="h-8 w-8 text-[#8C703B]" aria-hidden="true" />
              <span className="font-display text-base text-[#202321]">Coming Soon</span>
            </div>
          )}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#202321]/0 transition-colors duration-300 group-hover:bg-[#202321]/10"
          />
        </Link>

        {/* Single quiet status marker */}
        <span className="pointer-events-none absolute left-3.5 top-3.5 rounded-full bg-[#F4EFE6]/95 px-3 py-1 text-[11px] font-semibold tracking-[0.06em] uppercase text-[#8C703B]">
          Coming Soon
        </span>

        {/* Wishlist toggle button */}
        <button
          type="button"
          onClick={() => toggleSaved(property.id)}
          aria-pressed={saved}
          aria-label={
            saved
              ? `Remove ${property.neighborhood} ${property.propertyType} from wishlist`
              : `Save ${property.neighborhood} ${property.propertyType} to wishlist`
          }
          className={cn(
            'absolute right-3.5 top-3.5 inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89A62]',
            saved
              ? 'border-[#202321] bg-[#202321] text-[#F7F5F0]'
              : 'border-[#EAE5DC] bg-[#FFFFFF]/95 text-[#202321] hover:border-[#202321]'
          )}
        >
          <Bookmark className={cn('h-4 w-4', saved ? 'fill-current' : '')} aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#6B6A65]">
            <span className="font-medium text-[#8C703B]">
              {property.city} · {property.neighborhood}
            </span>
            <span aria-hidden="true">·</span>
            <span>{property.propertyType}</span>
          </div>

          <h3 className="font-display mt-2 text-[22px] font-medium leading-[30px] text-[#202321]">
            <Link
              href={`/properties/${property.slug}`}
              className="hover:text-[#8C703B] transition-colors"
            >
              Coming Soon
            </Link>
          </h3>

          <p className="mt-1.5 text-sm leading-relaxed text-[#6B6A65]">
            Architectural dossier and residence specifications will be disclosed prior to launch.
          </p>
        </div>

        <div className="mt-5 border-t border-[#EAE5DC] pt-4">
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-display text-lg font-medium text-[#202321]">
              Price: Coming Soon
            </span>
            <span className="text-xs font-medium text-[#6B6A65]">Kolkata</span>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#6B6A65]">
            <span>Floorplans: Coming Soon</span>
            <span aria-hidden="true">·</span>
            <span>Specs: Coming Soon</span>
          </div>
        </div>
      </div>
    </article>
  );
}
