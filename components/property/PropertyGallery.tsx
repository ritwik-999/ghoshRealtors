'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import type { PropertyGalleryItem } from '@/types/property';
import { cn } from '@/lib/utils';

interface PropertyGalleryProps {
  title: string;
  items: PropertyGalleryItem[];
}

export function PropertyGallery({ title, items }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const safeItems = items.length > 0 ? items : [];
  const activeItem = safeItems[activeIndex] ?? safeItems[0];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % safeItems.length);
  }, [safeItems.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + safeItems.length) % safeItems.length);
  }, [safeItems.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxOpen, handleNext, handlePrev]);

  if (!activeItem) return null;

  return (
    <div className="space-y-4">
      {/* Main Architectural Frame */}
      <div className="group relative aspect-[16/10] w-full overflow-hidden rounded border border-[#EAE5DC] bg-[#EFECE5]">
        <Image
          src={activeItem.src}
          alt={activeItem.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover"
        />

        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Open full-screen gallery for ${title}`}
          className="absolute bottom-4 right-4 inline-flex h-10 items-center gap-2 rounded border border-[#EAE5DC]/40 bg-[#202321]/85 px-4 text-xs font-medium text-[#F7F5F0] backdrop-blur-sm transition-colors hover:bg-[#202321]"
        >
          <Expand className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Inspect Gallery ({safeItems.length})</span>
        </button>
      </div>

      {/* Caption & Thumbnail Strip */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-[#6B6A65]">{activeItem.caption}</p>

        {safeItems.length > 1 ? (
          <div className="flex items-center gap-2">
            {safeItems.map((item, idx) => (
              <button
                key={`${item.src}-${idx}`}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View gallery photograph ${idx + 1}: ${item.caption}`}
                aria-current={idx === activeIndex ? 'true' : undefined}
                className={cn(
                  'relative h-14 w-20 overflow-hidden rounded border transition-all',
                  idx === activeIndex
                    ? 'border-[#202321] ring-1 ring-[#B89A62]'
                    : 'border-[#EAE5DC] opacity-75 hover:opacity-100'
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} architectural gallery`}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#202321]/90 p-6 backdrop-blur-md lg:p-10"
        >
          <div className="flex items-center justify-between text-[#F7F5F0]">
            <div>
              <p className="label-caps text-[#B89A62]">Architectural Plate</p>
              <p className="font-display mt-1 text-lg">{title}</p>
            </div>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close gallery lightbox"
              className="inline-flex h-11 w-11 items-center justify-center rounded border border-[#EAE5DC]/25 text-[#F7F5F0] transition-colors hover:bg-[#FFFFFF]/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative mx-auto my-4 aspect-[16/10] w-full max-w-5xl overflow-hidden rounded border border-[#EAE5DC]/20 bg-[#0A0D0B]">
            <Image
              src={activeItem.src}
              alt={activeItem.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 text-[#F7F5F0]">
            <p className="text-sm text-[#EAE5DC]">{activeItem.caption}</p>
            <div className="flex items-center gap-2 shrink-0">
              <span className="mr-2 text-xs tabular-nums text-[#C4C7C3]">
                {activeIndex + 1} / {safeItems.length}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous photograph"
                className="inline-flex h-10 w-10 items-center justify-center rounded border border-[#EAE5DC]/25 text-[#F7F5F0] transition-colors hover:bg-[#FFFFFF]/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next photograph"
                className="inline-flex h-10 w-10 items-center justify-center rounded border border-[#EAE5DC]/25 text-[#F7F5F0] transition-colors hover:bg-[#FFFFFF]/10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
