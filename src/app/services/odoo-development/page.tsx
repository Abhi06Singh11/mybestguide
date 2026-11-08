
import { Metadata } from 'next';
import ServiceDetails from '@/components/sections/service-details';
import { odooDevelopmentData } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Odoo Development & Customization',
  description: 'Expert Odoo implementations and deep customizations tailored to your unique business operational reality.',
  openGraph: {
    title: 'Expert Odoo Customization | MyBestGuide',
    description: 'Unlock the full potential of Odoo ERP. Expert implementation and customization for modern enterprises.',
    url: 'https://mybestguide.in/services/odoo-development',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Odoo Development Services',
      }
    ],
  }
};

export default function OdooDevelopmentPage() {
  return <ServiceDetails {...odooDevelopmentData} />;
}
