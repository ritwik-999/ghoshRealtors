import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { WishlistProvider } from '@/components/providers/WishlistProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-playfair',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Aurelia Estates | Curated Architectural Residences in Kolkata',
    template: '%s | Aurelia Estates',
  },
  description:
    'Curated architectural residences, heritage bungalows, and penthouse monographs in Kolkata.',
  openGraph: {
    title: 'Aurelia Estates | Curated Architectural Residences in Kolkata',
    description:
      'Curated architectural residences, heritage bungalows, and penthouse monographs in Kolkata.',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/images/hero-kolkata-residence.jpg',
        width: 1408,
        height: 768,
        alt: 'Aurelia Estates curated residence in Alipore, Kolkata',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurelia Estates | Curated Architectural Residences in Kolkata',
    description:
      'Curated architectural residences, heritage bungalows, and penthouse monographs in Kolkata.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-screen bg-[#F7F5F0] text-[#353535] antialiased">
        <WishlistProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-160px)]">{children}</main>
          <Footer />
        </WishlistProvider>
      </body>
    </html>
  );
}
