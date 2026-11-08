
import { Metadata } from 'next';
import ServiceDetails from '@/components/sections/service-details';
import { customizedDevelopmentData } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Custom Software Development',
  description: 'Solve complex challenges with surgical precision. We engineer custom software solutions designed for your competitive advantage.',
  openGraph: {
    title: 'Precision-Engineered Custom Solutions | MyBestGuide',
    description: 'When off-the-shelf software fails, we engineer a competitive edge for your unique business needs.',
    url: 'https://mybestguide.in/services/customized-development',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Custom Software Engineering',
      }
    ],
  }
};

export default function CustomizedDevelopmentPage() {
  return <ServiceDetails {...customizedDevelopmentData} />;
}
