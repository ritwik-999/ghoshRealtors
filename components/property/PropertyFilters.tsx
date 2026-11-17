'use client';

import React from 'react';
import { Bookmark, RotateCcw, Search } from 'lucide-react';
import type { PropertySearchFilters, SortOption } from '@/types/property';
import { cn } from '@/lib/utils';

interface PropertyFiltersProps {
  filters: PropertySearchFilters;
  onChange: (next: PropertySearchFilters) => void;
  onReset: () => void;
  totalResults: number;
  savedCount: number;
}

const PROPERTY_TYPES = [
  'all',
  'Penthouse',
  'Heritage Bungalow',
  'Sky Villa',
  'Private Residence',
  'Courtyard Villa',
];

const LOCATIONS = [
  'all',
  'Alipore',
  'Ballygunge',
  'Southern Avenue',
  'Park Street',
  'New Town',
  'EM Bypass',
];

const BUDGETS = [
  { value: 'all', label: 'Any Budget' },
  { value: 'under-6cr', label: 'Under ₹6 Cr' },
  { value: '6cr-12cr', label: '₹6 Cr – ₹12 Cr' },
  { value: '12cr-20cr', label: '₹12 Cr – ₹20 Cr' },
  { value: 'above-20cr', label: '₹20 Cr & Above' },
];

const CONFIGURATIONS = ['all', '3 BHK', '4 BHK', '5 BHK', 'Penthouse', 'Bungalow'];

const SORT_OPTIONS: Array<{ value: SortOption; label: string }> = [
  { value: 'featured', label: 'Curated Order' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'area-desc', label: 'Area: Largest First' },
  { value: 'newest', label: 'Newest Releases' },
];

export function PropertyFilters({
  filters,
  onChange,
  onReset,
  totalResults,
  savedCount,
}: PropertyFiltersProps) {
  const hasActiveFilter = Boolean(
    (filters.type && filters.type !== 'all') ||
      (filters.location && filters.location !== 'all') ||
      (filters.budget && filters.budget !== 'all') ||
      (filters.config && filters.config !== 'all') ||
      (filters.q && filters.q.trim().length > 0) ||
      filters.onlySaved
  );

  return (
    <div className="space-y-4">
      <div className="rounded border border-[#EAE5DC] bg-[#FFFFFF] p-4 sm:p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {/* Keyword Search */}
          <div className="lg:col-span-2">
            <label htmlFor="filter-keyword" className="label-caps block text-[#6B6A65]">
              Residence or Street
            </label>
            <div className="relative mt-1.5">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B6A65]"
                aria-hidden="true"
              />
              <input
                id="filter-keyword"
                type="text"
                value={filters.q ?? ''}
                onChange={(e) => onChange({ ...filters, q: e.target.value })}
                placeholder="e.g. Alipore, Penthouse, 4 BHK..."
                className="h-10 w-full rounded border border-[#EAE5DC] bg-[#F7F5F0]/50 pl-9 pr-3 text-sm text-[#202321] placeholder:text-[#6B6A65] focus:border-[#B89A62] focus:outline-none"
              />
            </div>
          </div>

          {/* Type */}
          <div>
            <label htmlFor="filter-type" className="label-caps block text-[#6B6A65]">
              Property Type
            </label>
            <select
              id="filter-type"
              value={filters.type ?? 'all'}
              onChange={(e) => onChange({ ...filters, type: e.target.value })}
              className="mt-1.5 h-10 w-full rounded border border-[#EAE5DC] bg-[#FFFFFF] px-3 text-sm text-[#202321] focus:border-[#B89A62] focus:outline-none"
            >
              <option value="all">All Types</option>
              {PROPERTY_TYPES.filter((t) => t !== 'all').map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="filter-location" className="label-caps block text-[#6B6A65]">
              Enclave
            </label>
            <select
              id="filter-location"
              value={filters.location ?? 'all'}
              onChange={(e) => onChange({ ...filters, location: e.target.value })}
              className="mt-1.5 h-10 w-full rounded border border-[#EAE5DC] bg-[#FFFFFF] px-3 text-sm text-[#202321] focus:border-[#B89A62] focus:outline-none"
            >
              <option value="all">All Enclaves</option>
              {LOCATIONS.filter((l) => l !== 'all').map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          {/* City (Kolkata only) */}
          <div>
            <label htmlFor="filter-city" className="label-caps block text-[#6B6A65]">
              City
            </label>
            <select
              id="filter-city"
              value="kolkata"
              onChange={() => onChange({ ...filters, city: 'kolkata' })}
              className="mt-1.5 h-10 w-full rounded border border-[#EAE5DC] bg-[#F7F5F0]/60 px-3 text-sm font-medium text-[#202321] focus:border-[#B89A62] focus:outline-none"
            >
              <option value="kolkata">Kolkata (Only City)</option>
            </select>
          </div>

          {/* Configuration */}
          <div>
            <label htmlFor="filter-config" className="label-caps block text-[#6B6A65]">
              Configuration
            </label>
            <select
              id="filter-config"
              value={filters.config ?? 'all'}
              onChange={(e) => onChange({ ...filters, config: e.target.value })}
              className="mt-1.5 h-10 w-full rounded border border-[#EAE5DC] bg-[#FFFFFF] px-3 text-sm text-[#202321] focus:border-[#B89A62] focus:outline-none"
            >
              <option value="all">Any Configuration</option>
              {CONFIGURATIONS.filter((c) => c !== 'all').map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Secondary Toolbar: Count, Saved Filter Pill, Sort, Reset */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE5DC] pb-4">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm text-[#6B6A65] tabular-nums">
            Showing <span className="font-semibold text-[#202321]">{totalResults}</span>{' '}
            {totalResults === 1 ? 'residence' : 'residences'}
          </p>

          <button
            type="button"
            onClick={() => onChange({ ...filters, onlySaved: !filters.onlySaved })}
            aria-pressed={Boolean(filters.onlySaved)}
            className={cn(
              'inline-flex h-9 items-center gap-1.5 rounded-full border px-4 text-xs font-medium whitespace-nowrap transition-colors',
              filters.onlySaved
                ? 'border-[#202321] bg-[#202321] text-[#F7F5F0]'
                : 'border-[#EAE5DC] bg-[#FFFFFF] text-[#6B6A65] hover:border-[#202321] hover:text-[#202321]'
            )}
          >
            <Bookmark
              className={cn('h-3.5 w-3.5', filters.onlySaved ? 'fill-current' : '')}
              aria-hidden="true"
            />
            <span className="tabular-nums">Saved ({savedCount})</span>
          </button>

          {hasActiveFilter ? (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#EAE5DC] bg-transparent px-3.5 text-xs font-medium text-[#6B6A65] transition-colors hover:border-[#202321] hover:text-[#202321]"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reset Filters</span>
            </button>
          ) : null}
        </div>

        <div className="flex items-center gap-2.5">
          <label htmlFor="sort-properties" className="label-caps text-[#6B6A65]">
            Sort
          </label>
          <select
            id="sort-properties"
            value={filters.sort ?? 'featured'}
            onChange={(e) => onChange({ ...filters, sort: e.target.value })}
            className="h-9 rounded border border-[#EAE5DC] bg-[#FFFFFF] px-3 text-xs font-medium text-[#202321] focus:border-[#B89A62] focus:outline-none"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
