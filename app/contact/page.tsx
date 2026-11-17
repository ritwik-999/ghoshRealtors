import React from 'react';
import type { Metadata } from 'next';
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { EnquiryForm } from '@/components/property/EnquiryForm';
import { buildWhatsAppUrl } from '@/lib/property-filters';

export const metadata: Metadata = {
  title: 'Private Advisory & Contact',
  description:
    'Schedule a private architectural viewing or request title dossiers from our Alipore gallery in Kolkata.',
};

export default function ContactPage() {
  const whatsappUrl = buildWhatsAppUrl({});

  return (
    <section className="bg-[#F7F5F0] py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <header className="border-b border-[#EAE5DC] pb-10">
          <p className="label-caps text-[#8C703B]">Private Advisory Desk</p>
          <h1 className="font-display mt-3 text-[36px] font-normal leading-tight tracking-[-0.01em] text-[#202321] text-balance md:text-[52px] md:leading-[60px]">
            Arrange a Discreet Consultation
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#6B6A65]">
            Whether evaluating a restored Alipore bungalow or requesting pre-completion floorplans
            in Ballygunge, every viewing is accompanied by a senior property advisor.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <div className="rounded border border-[#EAE5DC] bg-[#FFFFFF] p-7">
              <p className="label-caps text-[#8C703B]">Flagship Gallery</p>
              <h2 className="font-display mt-2 text-2xl font-medium text-[#202321]">
                Alipore Consultation Studio
              </h2>

              <dl className="mt-6 space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8C703B]" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-[#202321]">Address</dt>
                    <dd className="mt-0.5 text-[#6B6A65]">
                      18 Belvedere Road, Alipore, Kolkata 700027, West Bengal
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#8C703B]" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-[#202321]">Direct Telephone</dt>
                    <dd className="mt-0.5 tabular-nums text-[#6B6A65]">
                      +91 33 4062 8890 · +91 98300 41200
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#8C703B]" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-[#202321]">Viewing Hours</dt>
                    <dd className="mt-0.5 text-[#6B6A65]">
                      Tuesday – Sunday, 10:00 AM – 6:30 PM (Private Appointments)
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-7 border-t border-[#EAE5DC] pt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded border border-[#202321] px-5 text-sm font-medium text-[#202321] transition-colors hover:bg-[#202321] hover:text-[#F7F5F0]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Message on WhatsApp Concierge</span>
                </a>
              </div>
            </div>

            <div className="rounded border border-[#EAE5DC] bg-[#F8F3EA] p-7">
              <p className="label-caps text-[#8C703B]">Mandate Protocol</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#353535]">
                <li>01. Initial requirement brief and micro-market calibration.</li>
                <li>02. Release of vetted WBRERA dossiers and scaled floorplans.</li>
                <li>03. Architect-accompanied private site walkthroughs.</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm defaultInquiryType="Advisory Call" />
          </div>
        </div>
      </div>
    </section>
  );
}
