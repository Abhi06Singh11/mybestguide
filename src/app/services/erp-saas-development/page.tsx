
import { Metadata } from 'next';
import ServiceDetails from '@/components/sections/service-details';
import { erpSaaSDevelopmentData } from '@/lib/data';

export const metadata: Metadata = {
  title: 'ERP & SaaS Development',
  description: 'Centralize control and unlock operational clarity with custom ERP solutions and cloud-native SaaS platforms.',
  openGraph: {
    title: 'Enterprise ERP & SaaS Solutions | MyBestGuide',
    description: 'Streamline complexity with scalable, cloud-native enterprise software. Build your digital backbone.',
    url: 'https://mybestguide.in/services/erp-saas-development',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'ERP and SaaS Solutions',
      }
    ],
  }
};

export default function ErpSaaSDevelopmentPage() {
  return <ServiceDetails {...erpSaaSDevelopmentData} />;
}
