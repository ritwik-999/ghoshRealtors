import { z } from 'zod';

export const enquiryFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your full name (at least 2 characters).')
    .max(100, 'Name must be under 100 characters.'),
  email: z
    .string()
    .trim()
    .email('Please provide a valid email address for the architectural dossier.'),
  phone: z
    .string()
    .trim()
    .regex(
      /^[+\d\s()-]{8,20}$/,
      'Please enter a valid contact number (8 to 20 digits).'
    ),
  preferredDate: z.string().trim().optional(),
  propertySlug: z.string().trim().optional(),
  propertyTitle: z.string().trim().optional(),
  inquiryType: z.enum(['Private Viewing', 'Floorplan Dossier', 'Advisory Call']),
  message: z
    .string()
    .trim()
    .min(10, 'Please share a brief note on your requirements (at least 10 characters).')
    .max(1200, 'Message must be under 1,200 characters.'),
});

export type EnquiryFormValues = z.infer<typeof enquiryFormSchema>;
