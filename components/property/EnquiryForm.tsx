'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { enquiryFormSchema, type EnquiryFormValues } from '@/lib/validations';
import { submitEnquiry } from '@/lib/api';
import { buildWhatsAppUrl } from '@/lib/property-filters';
import type { EnquiryRecord } from '@/types/property';

interface EnquiryFormProps {
  propertySlug?: string;
  propertyTitle?: string;
  neighborhood?: string;
  priceCrores?: number;
  defaultInquiryType?: EnquiryFormValues['inquiryType'];
}

export function EnquiryForm({
  propertySlug,
  propertyTitle,
  neighborhood,
  priceCrores,
  defaultInquiryType = 'Private Viewing',
}: EnquiryFormProps) {
  const [submittedRecord, setSubmittedRecord] = useState<EnquiryRecord | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      propertySlug: propertySlug ?? '',
      propertyTitle: propertyTitle ?? '',
      inquiryType: defaultInquiryType,
      message: propertyTitle
        ? `I would like to schedule a private architectural viewing and receive the floorplan dossier for this upcoming ${
            neighborhood ? `${neighborhood} ` : ''
          }residence.`
        : '',
    },
  });

  const onSubmit = async (values: EnquiryFormValues) => {
    setServerError(null);
    try {
      const response = await submitEnquiry(values);
      setSubmittedRecord(response.enquiry);
      reset();
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : 'Unable to submit enquiry. Please try again.'
      );
    }
  };

  const whatsappUrl = buildWhatsAppUrl({
    propertyTitle,
    neighborhood,
    priceCrores,
  });

  if (submittedRecord) {
    return (
      <div
        role="status"
        className="rounded border border-[#EAE5DC] bg-[#FFFFFF] p-7 text-[#202321]"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#8C703B]" aria-hidden="true" />
          <div>
            <p className="label-caps text-[#8C703B]">Appointment Logged</p>
            <h3 className="font-display mt-1 text-2xl font-medium text-[#202321]">
              Private Dossier Request Received
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6B6A65]">
              Thank you, <span className="font-medium text-[#202321]">{submittedRecord.name}</span>.
              Our senior advisor at the Alipore gallery will confirm your viewing window shortly.
            </p>
            <div className="mt-4 rounded border border-[#EAE5DC] bg-[#F7F5F0] px-4 py-3 text-xs">
              <span className="text-[#6B6A65]">Reference Code: </span>
              <span className="font-semibold tabular-nums text-[#202321]">
                {submittedRecord.referenceCode}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSubmittedRecord(null)}
              className="mt-5 text-xs font-medium text-[#202321] underline underline-offset-4 hover:text-[#8C703B]"
            >
              Submit another enquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded border border-[#EAE5DC] bg-[#FFFFFF] p-6 sm:p-7">
      <p className="label-caps text-[#8C703B]">Private Advisory Desk</p>
      <h3 className="font-display mt-1.5 text-2xl font-medium text-[#202321]">
        {propertyTitle ? 'Arrange Private Viewing' : 'Request Consultation'}
      </h3>
      <p className="mt-1.5 text-xs leading-relaxed text-[#6B6A65]">
        Receive the full floorplan, RERA title abstract, and private inspection slots.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
        <div>
          <label htmlFor="enquiry-name" className="label-caps block text-[#6B6A65]">
            Full Name *
          </label>
          <input
            id="enquiry-name"
            type="text"
            {...register('name')}
            placeholder="Siddhartha Mukherjee"
            aria-invalid={Boolean(errors.name)}
            className="mt-1.5 h-11 w-full rounded border border-[#EAE5DC] bg-[#FFFFFF] px-3.5 text-sm text-[#202321] placeholder:text-[#6B6A65] focus:border-[#B89A62] focus:outline-none"
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-[#BA1A1A]">{errors.name.message}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="enquiry-email" className="label-caps block text-[#6B6A65]">
              Email Address *
            </label>
            <input
              id="enquiry-email"
              type="email"
              {...register('email')}
              placeholder="name@domain.com"
              aria-invalid={Boolean(errors.email)}
              className="mt-1.5 h-11 w-full rounded border border-[#EAE5DC] bg-[#FFFFFF] px-3.5 text-sm text-[#202321] placeholder:text-[#6B6A65] focus:border-[#B89A62] focus:outline-none"
            />
            {errors.email ? (
              <p className="mt-1 text-xs text-[#BA1A1A]">{errors.email.message}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="enquiry-phone" className="label-caps block text-[#6B6A65]">
              Telephone *
            </label>
            <input
              id="enquiry-phone"
              type="tel"
              {...register('phone')}
              placeholder="+91 98300 41200"
              aria-invalid={Boolean(errors.phone)}
              className="mt-1.5 h-11 w-full rounded border border-[#EAE5DC] bg-[#FFFFFF] px-3.5 text-sm text-[#202321] placeholder:text-[#6B6A65] focus:border-[#B89A62] focus:outline-none"
            />
            {errors.phone ? (
              <p className="mt-1 text-xs text-[#BA1A1A]">{errors.phone.message}</p>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="enquiry-type" className="label-caps block text-[#6B6A65]">
              Mandate Type
            </label>
            <select
              id="enquiry-type"
              {...register('inquiryType')}
              className="mt-1.5 h-11 w-full rounded border border-[#EAE5DC] bg-[#FFFFFF] px-3 text-sm text-[#202321] focus:border-[#B89A62] focus:outline-none"
            >
              <option value="Private Viewing">Private Viewing</option>
              <option value="Floorplan Dossier">Floorplan Dossier</option>
              <option value="Advisory Call">Advisory Call</option>
            </select>
          </div>

          <div>
            <label htmlFor="enquiry-date" className="label-caps block text-[#6B6A65]">
              Preferred Date
            </label>
            <input
              id="enquiry-date"
              type="date"
              {...register('preferredDate')}
              className="mt-1.5 h-11 w-full rounded border border-[#EAE5DC] bg-[#FFFFFF] px-3 text-sm text-[#202321] focus:border-[#B89A62] focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="enquiry-message" className="label-caps block text-[#6B6A65]">
            Notes & Requirements *
          </label>
          <textarea
            id="enquiry-message"
            rows={3}
            {...register('message')}
            placeholder="Share preferred viewing window, parking requirements, or financing timeline..."
            aria-invalid={Boolean(errors.message)}
            className="mt-1.5 w-full rounded border border-[#EAE5DC] bg-[#FFFFFF] p-3.5 text-sm text-[#202321] placeholder:text-[#6B6A65] focus:border-[#B89A62] focus:outline-none"
          />
          {errors.message ? (
            <p className="mt-1 text-xs text-[#BA1A1A]">{errors.message.message}</p>
          ) : null}
        </div>

        {serverError ? (
          <p role="alert" className="rounded border border-[#BA1A1A]/30 bg-[#FFDAD6]/40 px-3 py-2 text-xs text-[#93000A]">
            {serverError}
          </p>
        ) : null}

        <div className="space-y-3 pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-12 w-full items-center justify-center rounded bg-[#202321] px-6 text-sm font-medium text-[#F7F5F0] transition-colors hover:bg-[#353535] disabled:opacity-60"
          >
            {isSubmitting ? 'Submitting Request...' : 'Request Private Dossier'}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded border border-[#202321] bg-transparent px-6 text-sm font-medium text-[#202321] transition-colors hover:bg-[#202321] hover:text-[#F7F5F0]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>Enquire via WhatsApp</span>
          </a>
        </div>
      </form>
    </div>
  );
}
