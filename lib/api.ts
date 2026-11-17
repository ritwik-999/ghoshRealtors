import type { EnquiryPayload, EnquiryRecord, Property, PropertySearchFilters } from '@/types/property';
import { buildSearchQueryString } from './property-filters';

export async function fetchFilteredProperties(
  filters: PropertySearchFilters
): Promise<{ properties: Property[]; total: number }> {
  const qs = buildSearchQueryString(filters);
  const res = await fetch(`/api/properties${qs ? `?${qs}` : ''}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) {
    throw new Error('Unable to load property catalog.');
  }
  return res.json();
}

export async function submitEnquiry(
  payload: EnquiryPayload
): Promise<{ success: boolean; enquiry: EnquiryRecord }> {
  const res = await fetch('/api/enquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || 'Unable to submit enquiry. Please verify your details.');
  }
  return data;
}
