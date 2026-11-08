
import { Metadata } from 'next';
import AboutUs from "@/components/sections/about-us";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about MyBestGuide, a digital transformation firm committed to engineering excellence through strategic innovation and ethical partnership.',
  openGraph: {
    title: 'About MyBestGuide | Engineering Digital Excellence',
    description: 'Our mission is to equip businesses with high-performance tools to lead their industries. Meet the architects behind our success.',
    url: 'https://mybestguide.in/about',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'About MyBestGuide Team',
      }
    ],
  }
};

export default function AboutPage() {
  return (
    <AboutUs />
  );
}
