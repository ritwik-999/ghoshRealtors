import type { LocationZone } from '@/types/property';

export const locations: LocationZone[] = [
  {
    slug: 'alipore',
    name: 'Alipore',
    city: 'Kolkata',
    citySlug: 'kolkata',
    tagline: 'Tree-lined colonial enclaves and gated manor estates',
    character:
      'Anchored by deep setbacks, mature rain trees, and low-density plots near the National Library and Taj Bengal, Alipore remains Kolkata’s most coveted residential sanctuary.',
    medianRatePerSqFt: 28500,
    connectivity: '12 mins to Park Street · 35 mins to Netaji Subhas Chandra Bose Intl. Airport',
    landmark: 'Agri-Horticultural Society Gardens',
    coverImage: '/images/prop-alipore-manor.jpg',
  },
  {
    slug: 'ballygunge',
    name: 'Ballygunge',
    city: 'Kolkata',
    citySlug: 'kolkata',
    tagline: 'Heritage avenues paired with low-rise contemporary residences',
    character:
      'Known for quiet cul-de-sacs off Ballygunge Circular Road and Dover Lane, balancing cultural patronage with intimate boutique condominiums.',
    medianRatePerSqFt: 24200,
    connectivity: '10 mins to Esplanade · 8 mins to Southern Avenue Lakes',
    landmark: 'Ballygunge Circular Road',
    coverImage: '/images/prop-ballygunge-penthouse.jpg',
  },
  {
    slug: 'southern-avenue',
    name: 'Southern Avenue',
    city: 'Kolkata',
    citySlug: 'kolkata',
    tagline: 'Parkland promenades overlooking Rabindra Sarobar',
    character:
      'A singular boulevard facing 192 acres of water and botanical canopy, prized for cross-ventilated corner apartments and morning promenade access.',
    medianRatePerSqFt: 21800,
    connectivity: 'Direct Metro Access (Rabindra Sarobar) · 15 mins to Park Street',
    landmark: 'Rabindra Sarobar Lake Promenade',
    coverImage: '/images/prop-southern-avenue-atelier.jpg',
  },
  {
    slug: 'park-street',
    name: 'Park Street',
    city: 'Kolkata',
    citySlug: 'kolkata',
    tagline: 'Historic urban residences at the city’s civic core',
    character:
      'Grand high-ceilinged apartments and restored Art Deco duplexes moments from heritage clubs, galleries, and legacy institutions.',
    medianRatePerSqFt: 26000,
    connectivity: 'Central Business District · 5 mins to Maidan & Victoria Memorial',
    landmark: 'The Maidan & St. Xavier’s Precinct',
    coverImage: '/images/hero-kolkata-residence.jpg',
  },
  {
    slug: 'new-town',
    name: 'New Town',
    city: 'Kolkata',
    citySlug: 'kolkata',
    tagline: 'Sculptural courtyard villas and expansive green plots',
    character:
      'Wide planned boulevards around Action Area I and Eco Park allow generous contemporary footprints, private plunge courts, and double-height pavilions.',
    medianRatePerSqFt: 13400,
    connectivity: '14 mins to International Airport · 10 mins to Sector V Tech Hub',
    landmark: 'Eco Park Waterfront',
    coverImage: '/images/prop-newtown-pavilion.jpg',
  },
  {
    slug: 'em-bypass',
    name: 'EM Bypass',
    city: 'Kolkata',
    citySlug: 'kolkata',
    tagline: 'Elevated sky-villas with uninterrupted wetland horizons',
    character:
      'Architectural towers overlooking the East Kolkata Wetlands, engineered for panoramic daylight, private lift lobbies, and resort-calibre wellness decks.',
    medianRatePerSqFt: 16900,
    connectivity: '22 mins to Airport · Direct Arterial Link to South & Central Kolkata',
    landmark: 'East Kolkata Wetlands Vista',
    coverImage: '/images/prop-ballygunge-penthouse.jpg',
  },
];

export function getLocationBySlug(slug: string): LocationZone | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getLocationsByCity(citySlug: string): LocationZone[] {
  return locations.filter((loc) => loc.citySlug === citySlug.toLowerCase());
}
