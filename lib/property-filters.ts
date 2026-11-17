import type {
  BudgetRange,
  Property,
  PropertySearchFilters,
  SortOption,
} from '@/types/property';

export function formatIndianCurrency(crores: number): string {
  if (!Number.isFinite(crores) || crores < 0) return 'Price on Request';
  return `₹${crores.toFixed(2)} Cr`;
}

export function formatNumberWithCommas(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}

export function matchesBudgetRange(priceCrores: number, budget?: string): boolean {
  if (!budget || budget === 'all') return true;
  switch (budget as BudgetRange) {
    case 'under-6cr':
      return priceCrores < 6;
    case '6cr-12cr':
      return priceCrores >= 6 && priceCrores <= 12;
    case '12cr-20cr':
      return priceCrores > 12 && priceCrores <= 20;
    case 'above-20cr':
      return priceCrores > 20;
    default:
      return true;
  }
}

export function filterProperties(
  list: Property[],
  filters: PropertySearchFilters
): Property[] {
  return list.filter((property) => {
    if (filters.onlySaved) {
      const saved = filters.savedIds ?? [];
      if (!saved.includes(property.id)) return false;
    }

    if (filters.city && filters.city !== 'all') {
      if (property.citySlug.toLowerCase() !== filters.city.toLowerCase()) {
        return false;
      }
    }

    if (filters.type && filters.type !== 'all') {
      if (property.propertyType.toLowerCase() !== filters.type.toLowerCase()) {
        return false;
      }
    }

    if (filters.location && filters.location !== 'all') {
      const normLoc = filters.location.toLowerCase().replace(/-/g, ' ');
      if (
        property.neighborhood.toLowerCase() !== normLoc &&
        property.neighborhood.toLowerCase().replace(/\s+/g, '-') !== filters.location.toLowerCase()
      ) {
        return false;
      }
    }

    if (filters.budget && filters.budget !== 'all') {
      if (!matchesBudgetRange(property.priceCrores, filters.budget)) {
        return false;
      }
    }

    if (filters.config && filters.config !== 'all') {
      if (property.configuration.toLowerCase() !== filters.config.toLowerCase()) {
        return false;
      }
    }

    if (filters.q && filters.q.trim().length > 0) {
      const term = filters.q.trim().toLowerCase();
      const haystack = [
        property.title,
        property.subtitle,
        property.neighborhood,
        property.city,
        property.propertyType,
        property.configuration,
        property.developer,
        property.architect,
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(term)) {
        return false;
      }
    }

    return true;
  });
}

export function sortProperties(
  list: Property[],
  sort: SortOption | string = 'featured'
): Property[] {
  const copy = [...list];
  switch (sort as SortOption) {
    case 'price-asc':
      return copy.sort((a, b) => a.priceCrores - b.priceCrores);
    case 'price-desc':
      return copy.sort((a, b) => b.priceCrores - a.priceCrores);
    case 'area-desc':
      return copy.sort((a, b) => b.areaSqFt - a.areaSqFt);
    case 'newest':
      return copy.sort((a, b) => b.releasedYear - a.releasedYear || b.priceCrores - a.priceCrores);
    case 'featured':
    default:
      return copy.sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        if (a.trending !== b.trending) return a.trending ? -1 : 1;
        return b.priceCrores - a.priceCrores;
      });
  }
}

export function paginateProperties(
  list: Property[],
  visibleCount: number
): {
  items: Property[];
  totalCount: number;
  hasMore: boolean;
  remainingCount: number;
} {
  const safeCount = Math.max(1, visibleCount);
  const items = list.slice(0, safeCount);
  const remainingCount = Math.max(0, list.length - items.length);
  return {
    items,
    totalCount: list.length,
    hasMore: remainingCount > 0,
    remainingCount,
  };
}

export function buildSearchQueryString(filters: PropertySearchFilters): string {
  const params = new URLSearchParams();
  if (filters.type && filters.type !== 'all') params.set('type', filters.type);
  if (filters.location && filters.location !== 'all') params.set('location', filters.location);
  if (filters.budget && filters.budget !== 'all') params.set('budget', filters.budget);
  if (filters.config && filters.config !== 'all') params.set('config', filters.config);
  if (filters.q && filters.q.trim()) params.set('q', filters.q.trim());
  if (filters.sort && filters.sort !== 'featured') params.set('sort', filters.sort);
  if (filters.onlySaved) params.set('saved', '1');
  return params.toString();
}

export function buildWhatsAppUrl(params: {
  phoneNumber?: string;
  propertyTitle?: string;
  neighborhood?: string;
  priceCrores?: number;
}): string {
  const phone = (params.phoneNumber ?? '919830041200').replace(/[^\d]/g, '');
  const message = params.propertyTitle
    ? `Hello Aurelia Estates Advisory, I would like to arrange a private viewing and request the architectural dossier for ${params.propertyTitle}${
        params.neighborhood ? ` in ${params.neighborhood}` : ''
      }${params.priceCrores ? ` (${formatIndianCurrency(params.priceCrores)})` : ''}.`
    : 'Hello Aurelia Estates Advisory, I would like to schedule a private property consultation in Kolkata.';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
