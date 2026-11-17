import React from 'react';
import Link from 'next/link';
import { buildWhatsAppUrl } from '@/lib/property-filters';

export function Footer() {
  const whatsappHref = buildWhatsAppUrl({});

  return (
    <footer className="border-t border-[#EAE5DC] bg-[#F2EDE4]/60 text-[#353535]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="font-display text-2xl font-medium tracking-[-0.01em] text-[#202321]"
            >
              Aurelia Estates
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#6B6A65]">
              Private architectural brokerage and heritage residence advisory in Kolkata.
              Curating low-density bungalows, single-plate lakefront homes, and penthouse
              monographs across South and Central Kolkata.
            </p>
            <div className="mt-6 space-y-1 text-xs text-[#6B6A65]">
              <p className="font-medium text-[#202321]">Alipore Advisory Gallery</p>
              <p>18 Belvedere Road, Alipore, Kolkata 700027</p>
              <p className="tabular-nums">+91 33 4062 8890 · advisory@aureliaestates.in</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="label-caps text-[#6B6A65]">Portfolio</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link href="/properties" className="text-[#353535] hover:text-[#202321] hover:underline underline-offset-4">
                    All Residences
                  </Link>
                </li>
                <li>
                  <Link href="/properties?type=Penthouse" className="text-[#353535] hover:text-[#202321] hover:underline underline-offset-4">
                    Penthouses
                  </Link>
                </li>
                <li>
                  <Link href="/properties?type=Heritage+Bungalow" className="text-[#353535] hover:text-[#202321] hover:underline underline-offset-4">
                    Heritage Bungalows
                  </Link>
                </li>
                <li>
                  <Link href="/properties?type=Courtyard+Villa" className="text-[#353535] hover:text-[#202321] hover:underline underline-offset-4">
                    Courtyard Villas
                  </Link>
                </li>
                <li>
                  <Link href="/properties?saved=1" className="text-[#353535] hover:text-[#202321] hover:underline underline-offset-4">
                    Saved Wishlist
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="label-caps text-[#6B6A65]">Kolkata Enclaves</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link href="/city/kolkata" className="text-[#353535] hover:text-[#202321] hover:underline underline-offset-4">
                    Kolkata City Guide
                  </Link>
                </li>
                <li>
                  <Link href="/search?location=Alipore" className="text-[#353535] hover:text-[#202321] hover:underline underline-offset-4">
                    Alipore
                  </Link>
                </li>
                <li>
                  <Link href="/search?location=Ballygunge" className="text-[#353535] hover:text-[#202321] hover:underline underline-offset-4">
                    Ballygunge
                  </Link>
                </li>
                <li>
                  <Link href="/search?location=Southern+Avenue" className="text-[#353535] hover:text-[#202321] hover:underline underline-offset-4">
                    Southern Avenue
                  </Link>
                </li>
                <li>
                  <Link href="/search?location=New+Town" className="text-[#353535] hover:text-[#202321] hover:underline underline-offset-4">
                    New Town
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="label-caps text-[#6B6A65]">Advisory</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link href="/about" className="text-[#353535] hover:text-[#202321] hover:underline underline-offset-4">
                    About the Practice
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#353535] hover:text-[#202321] hover:underline underline-offset-4">
                    Schedule a Viewing
                  </Link>
                </li>
                <li>
                  <Link href="/search" className="text-[#353535] hover:text-[#202321] hover:underline underline-offset-4">
                    Property Search
                  </Link>
                </li>
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8C703B] hover:text-[#202321] hover:underline underline-offset-4"
                  >
                    WhatsApp Concierge
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#EAE5DC] pt-8 text-xs text-[#6B6A65] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Aurelia Estates Advisory Pvt. Ltd. All rights reserved.</p>
          <p className="tabular-nums">WBRERA Registered Advisory · WB/A/KOL/2024/00419</p>
        </div>
      </div>
    </footer>
  );
}
