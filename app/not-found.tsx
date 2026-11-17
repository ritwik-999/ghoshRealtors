import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-[#F7F5F0] px-6 py-20">
      <div className="max-w-lg rounded border border-[#EAE5DC] bg-[#FFFFFF] p-10 text-center">
        <p className="label-caps text-[#8C703B]">Archive Record Unavailable</p>
        <h1 className="font-display mt-3 text-3xl font-normal text-[#202321]">
          Residence Not Found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#6B6A65]">
          The requested estate dossier may have been concluded via private treaty or relocated.
          Explore our current Kolkata portfolio below.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/properties"
            className="inline-flex h-11 items-center justify-center rounded bg-[#202321] px-6 text-sm font-medium text-[#F7F5F0] transition-colors hover:bg-[#353535]"
          >
            Browse Portfolio
          </Link>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded border border-[#202321] px-6 text-sm font-medium text-[#202321] transition-colors hover:bg-[#202321] hover:text-[#F7F5F0]"
          >
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
