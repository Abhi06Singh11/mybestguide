
import { Metadata } from 'next';
import ServiceDetails from '@/components/sections/service-details';
import { technicalSupportData } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Technical Support & Maintenance',
  description: 'Ensure 99.9% uptime and peak system performance with proactive infrastructure monitoring and SLA-backed response.',
  openGraph: {
    title: 'Mission-Critical Technical Support | MyBestGuide',
    description: 'Protect your digital investments with proactive maintenance. We ensure reliability and security 24/7.',
    url: 'https://mybestguide.in/services/technical-support',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Technical Support Services',
      }
    ],
  }
};

export default function TechnicalSupportPage() {
  return <ServiceDetails {...technicalSupportData} />;
}
