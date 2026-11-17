import test from 'node:test';
import assert from 'node:assert/strict';
import { properties } from '../data/properties';
import {
  buildSearchQueryString,
  buildWhatsAppUrl,
  filterProperties,
  formatIndianCurrency,
  matchesBudgetRange,
  paginateProperties,
  sortProperties,
} from './property-filters';

test('formatIndianCurrency formats crore values with two decimals', () => {
  assert.equal(formatIndianCurrency(18.75), '₹18.75 Cr');
  assert.equal(formatIndianCurrency(5.6), '₹5.60 Cr');
});

test('matchesBudgetRange accurately partitions price tiers', () => {
  assert.equal(matchesBudgetRange(5.65, 'under-6cr'), true);
  assert.equal(matchesBudgetRange(6.0, 'under-6cr'), false);
  assert.equal(matchesBudgetRange(9.8, '6cr-12cr'), true);
  assert.equal(matchesBudgetRange(15.2, '12cr-20cr'), true);
  assert.equal(matchesBudgetRange(28.5, 'above-20cr'), true);
});

test('filterProperties filters by type, location, budget, and configuration', () => {
  const penthouses = filterProperties(properties, { type: 'Penthouse' });
  assert.equal(penthouses.length, 2);
  assert.ok(penthouses.every((p) => p.propertyType === 'Penthouse'));

  const alipore = filterProperties(properties, { location: 'Alipore' });
  assert.equal(alipore.length, 2);

  const savedOnly = filterProperties(properties, {
    onlySaved: true,
    savedIds: [properties[0].id],
  });
  assert.equal(savedOnly.length, 1);
  assert.equal(savedOnly[0].id, properties[0].id);
});

test('sortProperties orders by price ascending, descending, and area descending', () => {
  const asc = sortProperties(properties, 'price-asc');
  assert.ok(asc[0].priceCrores <= asc[1].priceCrores);
  assert.ok(asc[asc.length - 2].priceCrores <= asc[asc.length - 1].priceCrores);

  const desc = sortProperties(properties, 'price-desc');
  assert.ok(desc[0].priceCrores >= desc[1].priceCrores);

  const areaDesc = sortProperties(properties, 'area-desc');
  assert.ok(areaDesc[0].areaSqFt >= areaDesc[1].areaSqFt);
});

test('paginateProperties slices cleanly and reports remaining count', () => {
  const page1 = paginateProperties(properties, 6);
  assert.equal(page1.items.length, 6);
  assert.equal(page1.hasMore, true);
  assert.equal(page1.remainingCount, properties.length - 6);

  const all = paginateProperties(properties, 20);
  assert.equal(all.items.length, properties.length);
  assert.equal(all.hasMore, false);
  assert.equal(all.remainingCount, 0);
});

test('buildSearchQueryString omits default values and preserves active filters', () => {
  const qs = buildSearchQueryString({
    type: 'Penthouse',
    location: 'Ballygunge',
    budget: 'all',
    sort: 'price-desc',
  });
  assert.equal(qs, 'type=Penthouse&location=Ballygunge&sort=price-desc');
});

test('buildWhatsAppUrl encodes property details safely', () => {
  const url = buildWhatsAppUrl({
    propertyTitle: 'Coming Soon',
    neighborhood: 'Ballygunge',
    priceCrores: 18.75,
  });
  assert.ok(url.startsWith('https://wa.me/919830041200?text='));
  assert.ok(url.includes(encodeURIComponent('Coming Soon')));
});
