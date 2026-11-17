import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  description,
  actionLabel,
  actionHref,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col justify-between gap-6 border-b border-[#EAE5DC] pb-6 md:flex-row md:items-end',
        className
      )}
    >
      <div className="max-w-2xl">
        <p className="label-caps text-[#8C703B]">{kicker}</p>
        <h2 className="font-display mt-2 text-3xl font-normal leading-tight tracking-[-0.01em] text-[#202321] text-balance md:text-[40px] md:leading-[48px]">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-base leading-relaxed text-[#6B6A65]">{description}</p>
        ) : null}
      </div>

      {actionLabel && actionHref ? (
        <Link
          href={actionHref}
          className="group inline-flex items-center gap-2 whitespace-nowrap shrink-0 text-sm font-medium text-[#202321] underline decoration-[#EAE5DC] underline-offset-4 transition-colors hover:decoration-[#202321]"
        >
          <span>{actionLabel}</span>
          <ArrowRight
            className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      ) : null}
    </div>
  );
}
