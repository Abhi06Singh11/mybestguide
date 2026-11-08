
import { Metadata } from 'next';
import ServiceDetails from '@/components/sections/service-details';
import { mobileAppDevelopmentData } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Mobile Application Development',
  description: 'Build native and cross-platform mobile apps for iOS and Android that prioritize user engagement and scalability.',
  openGraph: {
    title: 'High-Impact Mobile Innovation | MyBestGuide',
    description: 'Crafting intuitive, high-performance mobile experiences that deliver value and drive customer loyalty.',
    url: 'https://mybestguide.in/services/mobile-application-development',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Mobile App Development',
      }
    ],
  }
};

export default function MobileAppDevelopmentPage() {
  return <ServiceDetails {...mobileAppDevelopmentData} />;
}
