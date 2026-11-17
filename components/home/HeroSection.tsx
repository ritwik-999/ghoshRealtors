'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Landmark, Search, Star } from 'lucide-react';
import { buildSearchQueryString } from '@/lib/property-filters';

export function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const qs = buildSearchQueryString({
      city: 'kolkata',
      q: query.trim() || undefined,
    });
    router.push(qs ? `/search?${qs}` : '/search?city=kolkata');
  };

  return (
    <section className="relative overflow-hidden border-b border-[#EAE5DC] bg-[#202321] text-[#F7F5F0]">
      {/* Full-bleed architectural backdrop with measured contrast scrim */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-kolkata-residence.jpg"
          alt="Sunlit double-height Kolkata architectural residence"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#0A0D0B]/70 via-[#202321]/65 to-[#0A0D0B]/85"
        />
      </div>

      <div className="relative mx-auto flex min-h-[580px] max-w-[1440px] flex-col items-center justify-center px-6 py-16 text-center lg:min-h-[640px] lg:px-16 lg:py-24">
        <p className="label-caps text-[#E3C286]">Kolkata Exclusive Advisory</p>

        <h1 className="font-display mt-3 max-w-3xl text-[40px] font-normal leading-[48px] tracking-[-0.015em] text-[#FFFFFF] text-balance md:text-[58px] md:leading-[66px]">
          Aurelia Estates
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-[#F5F0E7] md:text-lg">
          Realty Services Par Excellence — Curated Kolkata Residences
        </p>

        {/* Centered Search Bar */}
        <form
          onSubmit={handleSubmit}
          role="search"
          aria-label="Search Kolkata residences"
          className="ambient-search-shadow mt-8 flex w-full max-w-2xl items-center overflow-hidden rounded border border-[#EAE5DC]/30 bg-[#FFFFFF] p-1.5"
        >
          <label htmlFor="hero-kolkata-search" className="sr-only">
            Enter Location, Typology or Enclave in Kolkata
          </label>
          <div className="relative flex flex-1 items-center">
            <Search
              className="pointer-events-none ml-3.5 h-4 w-4 shrink-0 text-[#6B6A65]"
              aria-hidden="true"
            />
            <input
              id="hero-kolkata-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter Kolkata Enclave or Typology (e.g. Alipore, Penthouse)"
              className="h-11 w-full bg-transparent px-3 text-sm text-[#202321] placeholder:text-[#6B6A65] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            aria-label="Search Kolkata properties"
            className="inline-flex h-11 items-center justify-center gap-2 rounded bg-[#B89A62] px-5 text-sm font-medium text-[#0A0D0B] whitespace-nowrap shrink-0 transition-colors hover:bg-[#a28650] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFFFFF]"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </form>

        {/* City Selector Panel — Kolkata as the sole curated option */}
        <div className="mt-7 w-full max-w-md rounded border border-[#EAE5DC]/25 bg-[#0A0D0B]/65 p-4 backdrop-blur-md">
          <p className="label-caps text-[#C4C7C3]">Select Destination</p>
          <div className="mt-3 flex justify-center">
            <Link
              href="/city/kolkata"
              className="group flex w-full max-w-[260px] items-center justify-center gap-3 rounded border border-[#B89A62] bg-[#FFFFFF] px-5 py-3.5 text-[#202321] transition-colors hover:bg-[#F7F5F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89A62]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#F4EFE6] text-[#8C703B]">
                <Landmark className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-left">
                <span className="block text-sm font-semibold uppercase tracking-[0.08em] text-[#202321]">
                  Kolkata
                </span>
                <span className="block text-xs text-[#6B6A65]">
                  Only Active City · Coming Soon
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom-right Client Review Anchor */}
        <div className="mt-10 flex w-full items-center justify-center md:justify-end">
          <div className="inline-flex items-center gap-3 rounded border border-[#EAE5DC]/25 bg-[#0A0D0B]/60 px-4 py-2 text-xs text-[#F5F0E7] backdrop-blur-sm">
            <span className="font-semibold text-[#FFFFFF]">Verified Reviews</span>
            <span aria-hidden="true" className="text-[#747875]">|</span>
            <span className="inline-flex items-center gap-1 font-semibold tabular-nums text-[#E3C286]">
              <span>4.7</span>
              <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            </span>
            <span className="text-[#C4C7C3] tabular-nums">1,368+ Client Mandates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
