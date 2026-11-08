
import { Metadata } from 'next';
import ServiceDetails from '@/components/sections/service-details';
import { ecommerceDevelopmentData } from '@/lib/data';

export const metadata: Metadata = {
  title: 'E-commerce Website Development',
  description: 'Drive revenue with conversion-optimized storefronts. We build high-performance e-commerce platforms with secure payment integrations.',
  openGraph: {
    title: 'Expert E-commerce Engineering | MyBestGuide',
    description: 'Scale your revenue with high-performance storefronts. Secure, resilient, and user-centric digital marketplaces.',
    url: 'https://mybestguide.in/services/e-commerce-development',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586880244499-5269a3c485f2?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'E-commerce Development',
      }
    ],
  }
};

export default function EcommerceDevelopmentPage() {
  return <ServiceDetails {...ecommerceDevelopmentData} />;
}
