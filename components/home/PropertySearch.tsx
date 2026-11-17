'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { buildSearchQueryString } from '@/lib/property-filters';

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

const BUDGET_OPTIONS = [
  { value: 'all', label: 'Any Budget' },
  { value: 'under-6cr', label: 'Under ₹6 Cr' },
  { value: '6cr-12cr', label: '₹6 Cr – ₹12 Cr' },
  { value: '12cr-20cr', label: '₹12 Cr – ₹20 Cr' },
  { value: 'above-20cr', label: '₹20 Cr & Above' },
];

const CONFIGURATIONS = ['all', '3 BHK', '4 BHK', '5 BHK', 'Penthouse', 'Bungalow'];

export function PropertySearch() {
  const router = useRouter();
  const [type, setType] = useState('all');
  const [location, setLocation] = useState('all');
  const [budget, setBudget] = useState('all');
  const [config, setConfig] = useState('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const qs = buildSearchQueryString({ type, location, budget, config });
    router.push(qs ? `/search?${qs}` : '/search');
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Search architectural residences"
      className="ambient-search-shadow rounded border border-[#EAE5DC] bg-[#FFFFFF] p-2 sm:p-2.5"
    >
      <div className="grid grid-cols-1 divide-y divide-[#EAE5DC] lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:divide-x lg:divide-y-0">
        {/* Partition 1: Type */}
        <div className="flex flex-col justify-center px-4 py-3 lg:px-5">
          <label htmlFor="hero-search-type" className="label-caps text-[#6B6A65]">
            Type
          </label>
          <select
            id="hero-search-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 w-full cursor-pointer bg-transparent pr-2 text-sm font-medium text-[#202321] focus:outline-none"
          >
            <option value="all">All Residences</option>
            {PROPERTY_TYPES.filter((t) => t !== 'all').map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Partition 2: Location */}
        <div className="flex flex-col justify-center px-4 py-3 lg:px-5">
          <label htmlFor="hero-search-location" className="label-caps text-[#6B6A65]">
            Location
          </label>
          <select
            id="hero-search-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 w-full cursor-pointer bg-transparent pr-2 text-sm font-medium text-[#202321] focus:outline-none"
          >
            <option value="all">All Kolkata Enclaves</option>
            {LOCATIONS.filter((l) => l !== 'all').map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Partition 3: Budget */}
        <div className="flex flex-col justify-center px-4 py-3 lg:px-5">
          <label htmlFor="hero-search-budget" className="label-caps text-[#6B6A65]">
            Budget
          </label>
          <select
            id="hero-search-budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="mt-1 w-full cursor-pointer bg-transparent pr-2 text-sm font-medium text-[#202321] focus:outline-none"
          >
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Partition 4: Configuration */}
        <div className="flex flex-col justify-center px-4 py-3 lg:px-5">
          <label htmlFor="hero-search-config" className="label-caps text-[#6B6A65]">
            Configuration
          </label>
          <select
            id="hero-search-config"
            value={config}
            onChange={(e) => setConfig(e.target.value)}
            className="mt-1 w-full cursor-pointer bg-transparent pr-2 text-sm font-medium text-[#202321] focus:outline-none"
          >
            <option value="all">Any Configuration</option>
            {CONFIGURATIONS.filter((c) => c !== 'all').map((cfg) => (
              <option key={cfg} value={cfg}>
                {cfg}
              </option>
            ))}
          </select>
        </div>

        {/* Trigger */}
        <div className="flex items-center p-2 lg:pl-3">
          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded bg-[#202321] px-6 text-sm font-medium text-[#F7F5F0] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#353535] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89A62] lg:w-auto"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            <span>Explore Estates</span>
          </button>
        </div>
      </div>
    </form>
  );
}
