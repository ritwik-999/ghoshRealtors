import { NextRequest, NextResponse } from 'next/server';
import { properties } from '@/data/properties';
import { filterProperties, sortProperties } from '@/lib/property-filters';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') ?? undefined;
  const location = searchParams.get('location') ?? undefined;
  const budget = searchParams.get('budget') ?? undefined;
  const config = searchParams.get('config') ?? undefined;
  const q = searchParams.get('q') ?? undefined;
  const city = searchParams.get('city') ?? undefined;
  const sort = searchParams.get('sort') ?? 'featured';

  const filtered = filterProperties(properties, {
    type,
    location,
    budget,
    config,
    q,
    city,
  });

  const sorted = sortProperties(filtered, sort);

  return NextResponse.json({
    properties: sorted,
    total: sorted.length,
  });
}
