'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/property-filters';

interface NavLinkItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLinkItem[];
  savedCount: number;
}

export function MobileMenu({ isOpen, onClose, links, savedCount }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation-drawer"
      className="border-t border-[#EAE5DC] bg-[#F7F5F0] px-6 py-6 md:hidden"
    >
      <nav aria-label="Mobile navigation" className="flex flex-col divide-y divide-[#EAE5DC]">
        {links.map((link) => {
          const displayLabel =
            link.label === 'Wishlist' && savedCount > 0
              ? `Wishlist (${savedCount})`
              : link.label;

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex min-h-[48px] items-center justify-between py-3 text-base font-medium text-[#202321] transition-colors hover:text-[#8C703B]"
            >
              <span>{displayLabel}</span>
              <ArrowUpRight className="h-4 w-4 text-[#6B6A65]" aria-hidden="true" />
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 flex flex-col gap-3">
        <Link
          href="/contact"
          onClick={onClose}
          className="inline-flex h-12 items-center justify-center rounded bg-[#202321] px-6 text-sm font-medium text-[#F7F5F0] transition-colors hover:bg-[#353535]"
        >
          Book Private Viewing
        </Link>
        <a
          href={buildWhatsAppUrl({})}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center rounded border border-[#202321] bg-transparent px-6 text-sm font-medium text-[#202321] transition-colors hover:bg-[#202321] hover:text-[#F7F5F0]"
        >
          WhatsApp Advisory Desk
        </a>
      </div>
    </div>
  );
}
