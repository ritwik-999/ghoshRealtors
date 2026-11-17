'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import type { Property, PropertySearchFilters } from '@/types/property';
import {
  filterProperties,
  paginateProperties,
  sortProperties,
} from '@/lib/property-filters';
import { useWishlist } from '@/components/providers/WishlistProvider';
import { PropertyFilters } from './PropertyFilters';
import { PropertyCard } from './PropertyCard';

interface PropertyCatalogClientProps {
  allProperties: Property[];
  initialFilters?: PropertySearchFilters;
  pageSize?: number;
}

export function PropertyCatalogClient({
  allProperties,
  initialFilters = {},
  pageSize = 6,
}: PropertyCatalogClientProps) {
  const { savedIds, hydrated } = useWishlist();
  const [filters, setFilters] = useState<PropertySearchFilters>({
    type: initialFilters.type ?? 'all',
    location: initialFilters.location ?? 'all',
    budget: initialFilters.budget ?? 'all',
    config: initialFilters.config ?? 'all',
    q: initialFilters.q ?? '',
    sort: initialFilters.sort ?? 'featured',
    onlySaved: initialFilters.onlySaved ?? false,
  });
  const [visibleCount, setVisibleCount] = useState(pageSize);

  useEffect(() => {
    setFilters({
      type: initialFilters.type ?? 'all',
      location: initialFilters.location ?? 'all',
      budget: initialFilters.budget ?? 'all',
      config: initialFilters.config ?? 'all',
      q: initialFilters.q ?? '',
      sort: initialFilters.sort ?? 'featured',
      onlySaved: initialFilters.onlySaved ?? false,
    });
    setVisibleCount(pageSize);
  }, [
    initialFilters.type,
    initialFilters.location,
    initialFilters.budget,
    initialFilters.config,
    initialFilters.q,
    initialFilters.sort,
    initialFilters.onlySaved,
    pageSize,
  ]);

  const filteredAndSorted = useMemo(() => {
    const filtered = filterProperties(allProperties, {
      ...filters,
      savedIds: hydrated ? savedIds : [],
    });
    return sortProperties(filtered, filters.sort ?? 'featured');
  }, [allProperties, filters, savedIds, hydrated]);

  const paginated = useMemo(
    () => paginateProperties(filteredAndSorted, visibleCount),
    [filteredAndSorted, visibleCount]
  );

  const handleFilterChange = (next: PropertySearchFilters) => {
    setFilters(next);
    setVisibleCount(pageSize);
  };

  const handleReset = () => {
    setFilters({
      type: 'all',
      location: 'all',
      budget: 'all',
      config: 'all',
      q: '',
      sort: 'featured',
      onlySaved: false,
    });
    setVisibleCount(pageSize);
  };

  return (
    <div className="space-y-10">
      <PropertyFilters
        filters={filters}
        onChange={handleFilterChange}
        onReset={handleReset}
        totalResults={paginated.totalCount}
        savedCount={hydrated ? savedIds.length : 0}
      />

      {paginated.items.length === 0 ? (
        <div className="rounded border border-[#EAE5DC] bg-[#FFFFFF] px-8 py-16 text-center">
          <p className="label-caps text-[#8C703B]">No Matching Residences</p>
          <h3 className="font-display mt-3 text-2xl font-medium text-[#202321]">
            {filters.onlySaved
              ? 'Your saved wishlist is currently empty.'
              : 'No properties match these exact criteria.'}
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-[#6B6A65]">
            {filters.onlySaved
              ? 'Use the bookmark control on any residence card to curate your shortlist for private viewings.'
              : 'Broaden your budget tier or enclave filter, or speak directly with our Alipore desk for off-market mandates.'}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex h-11 items-center justify-center rounded bg-[#202321] px-6 text-sm font-medium text-[#F7F5F0] transition-colors hover:bg-[#353535]"
            >
              View All Residences
            </button>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded border border-[#202321] px-6 text-sm font-medium text-[#202321] transition-colors hover:bg-[#202321] hover:text-[#F7F5F0]"
            >
              Request Off-Market Mandate
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div
            data-testid="property-grid"
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {paginated.items.map((property, index) => (
              <PropertyCard key={property.id} property={property} priority={index < 3} />
            ))}
          </div>

          {paginated.hasMore ? (
            <div className="flex flex-col items-center justify-center gap-3 border-t border-[#EAE5DC] pt-8">
              <p className="text-xs text-[#6B6A65] tabular-nums">
                Displaying {paginated.items.length} of {paginated.totalCount} residences
              </p>
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + pageSize)}
                className="inline-flex h-12 items-center justify-center rounded border border-[#202321] bg-transparent px-8 text-sm font-medium text-[#202321] transition-colors hover:bg-[#202321] hover:text-[#F7F5F0]"
              >
                Load More Residences ({paginated.remainingCount} remaining)
              </button>
            </div>
          ) : (
            <div className="border-t border-[#EAE5DC] pt-6 text-center text-xs text-[#6B6A65] tabular-nums">
              End of portfolio · Showing all {paginated.totalCount} curated residences
            </div>
          )}
        </>
      )}
    </div>
  );
}
