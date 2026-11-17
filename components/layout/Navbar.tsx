'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useWishlist } from '@/components/providers/WishlistProvider';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/properties', label: 'Properties' },
  { href: '/city/kolkata', label: 'Kolkata' },
  { href: '/properties?saved=1', label: 'Wishlist' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const { savedIds, hydrated } = useWishlist();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    const base = href.split('?')[0];
    if (href.includes('saved=1')) return false;
    if (base === '/') return pathname === '/';
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#EAE5DC] bg-[#F7F5F0]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-8 px-6 lg:h-[72px] lg:px-16">
        {/* Zone 1: Single-element brand wordmark */}
        <Link
          href="/"
          className="font-display whitespace-nowrap shrink-0 text-xl font-medium tracking-[-0.01em] text-[#202321] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B89A62]"
        >
          Aurelia Estates
        </Link>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            const displayLabel =
              link.label === 'Wishlist' && hydrated && savedIds.length > 0
                ? `Wishlist (${savedIds.length})`
                : link.label;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'whitespace-nowrap shrink-0 text-[13px] font-medium tracking-[0.02em] transition-colors duration-150 underline-offset-4 hover:text-[#202321] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B89A62]',
                  active
                    ? 'text-[#202321] underline decoration-[#B89A62] decoration-1'
                    : 'text-[#6B6A65]'
                )}
              >
                {displayLabel}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + mobile drawer trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="hidden h-10 items-center justify-center rounded bg-[#202321] px-5 text-[13px] font-medium tracking-[0.02em] text-[#F7F5F0] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#353535] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89A62] md:inline-flex"
          >
            Book Viewing
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-[#EAE5DC] bg-[#FFFFFF] text-[#202321] transition-colors hover:border-[#202321] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
        savedCount={hydrated ? savedIds.length : 0}
      />
    </header>
  );
}
