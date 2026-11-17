export type PropertyType =
  | 'Penthouse'
  | 'Heritage Bungalow'
  | 'Sky Villa'
  | 'Private Residence'
  | 'Courtyard Villa';

export type ConfigurationType = '3 BHK' | '4 BHK' | '5 BHK' | 'Penthouse' | 'Bungalow';

export type BudgetRange = 'all' | 'under-6cr' | '6cr-12cr' | '12cr-20cr' | 'above-20cr';

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'area-desc' | 'newest';

export interface PropertyGalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface FloorplanZone {
  label: string;
  dimensions: string;
  level: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  city: string;
  citySlug: string;
  neighborhood: string;
  address: string;
  propertyType: PropertyType;
  configuration: ConfigurationType;
  priceCrores: number;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  carpetAreaSqFt: number;
  plotAreaSqFt?: number;
  floorLevel: string;
  facing: string;
  possession: string;
  reraId: string;
  developer: string;
  architect: string;
  statusLabel: string;
  featured: boolean;
  trending: boolean;
  releasedYear: number;
  heroImage: string;
  gallery: PropertyGalleryItem[];
  floorplanZones: FloorplanZone[];
  highlights: string[];
  description: string;
  architecturalNote: string;
}

export interface LocationZone {
  slug: string;
  name: string;
  city: string;
  citySlug: string;
  tagline: string;
  character: string;
  medianRatePerSqFt: number;
  connectivity: string;
  landmark: string;
  coverImage: string;
}

export interface DeveloperPartner {
  id: string;
  name: string;
  foundedYear: number;
  headquarters: string;
  specialty: string;
  completedSqFt: string;
  signatureProject: string;
  summary: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  neighborhood: string;
  acquiredProperty: string;
  outcome: string;
  quote: string;
}

export interface PropertySearchFilters {
  type?: string;
  location?: string;
  budget?: BudgetRange | string;
  config?: string;
  q?: string;
  city?: string;
  sort?: SortOption | string;
  savedIds?: string[];
  onlySaved?: boolean;
}

export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  preferredDate?: string;
  propertySlug?: string;
  propertyTitle?: string;
  inquiryType: 'Private Viewing' | 'Floorplan Dossier' | 'Advisory Call';
  message: string;
}

export interface EnquiryRecord extends EnquiryPayload {
  id: string;
  referenceCode: string;
  createdAt: string;
}
