'use client';

import React from 'react';
import { Bookmark, MessageCircle } from 'lucide-react';
import { useWishlist } from '@/components/providers/WishlistProvider';
import { buildWhatsAppUrl } from '@/lib/property-filters';
import { cn } from '@/lib/utils';

interface PropertyActionBarProps {
  propertyId: string;
  propertyTitle: string;
  neighborhood: string;
  priceCrores: number;
}

export function PropertyActionBar({
  propertyId,
  propertyTitle,
  neighborhood,
  priceCrores,
}: PropertyActionBarProps) {
  const { isSaved, toggleSaved, hydrated } = useWishlist();
  const saved = hydrated && isSaved(propertyId);
  const whatsappUrl = buildWhatsAppUrl({ propertyTitle, neighborhood, priceCrores });

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => toggleSaved(propertyId)}
        aria-pressed={saved}
        className={cn(
          'inline-flex h-11 items-center gap-2 rounded border px-5 text-sm font-medium transition-colors',
          saved
            ? 'border-[#202321] bg-[#202321] text-[#F7F5F0]'
            : 'border-[#202321] bg-transparent text-[#202321] hover:bg-[#202321] hover:text-[#F7F5F0]'
        )}
      >
        <Bookmark className={cn('h-4 w-4', saved ? 'fill-current' : '')} aria-hidden="true" />
        <span>{saved ? 'Saved to Wishlist' : 'Save to Wishlist'}</span>
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 items-center gap-2 rounded border border-[#EAE5DC] bg-[#FFFFFF] px-5 text-sm font-medium text-[#202321] transition-colors hover:border-[#202321]"
      >
        <MessageCircle className="h-4 w-4 text-[#8C703B]" aria-hidden="true" />
        <span>WhatsApp Advisor</span>
      </a>
    </div>
  );
}
