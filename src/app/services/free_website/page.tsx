
import { Metadata } from 'next';
import FreeWebsiteClient from '@/components/sections/free-website-client';

export const metadata: Metadata = {
  title: 'Free Website Initiative',
  description: 'Apply for a 100% free professional website through our Digital Growth Initiative. We help startups and micro-businesses grow online.',
  openGraph: {
    title: 'Get a 100% FREE Professional Website | MyBestGuide',
    description: 'Launch your business online with a real, functional website. No credit card required. Part of our Digital Growth Initiative.',
    url: 'https://mybestguide.in/services/free_website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Free Website Growth Initiative',
      }
    ],
  }
};

export default function FreeWebsitePage() {
  return <FreeWebsiteClient />;
}
