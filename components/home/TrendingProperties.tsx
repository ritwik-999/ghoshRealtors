'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Property } from '@/types/property';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PropertyCard } from '@/components/property/PropertyCard';

interface TrendingPropertiesProps {
  items: Property[];
}

export function TrendingProperties({ items }: TrendingPropertiesProps) {
  return (
    <section className="border-b border-[#EAE5DC] bg-[#F8F3EA]/50 py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <SectionHeading
          kicker="Current Mandate"
          title="Most Requested Residences"
          description="Sought-after bungalows, lakefront plates, and sky terraces currently drawing private inspection appointments."
          actionLabel="View all properties"
          actionHref="/properties"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 3).map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
