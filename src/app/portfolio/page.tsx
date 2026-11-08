
import { Metadata } from 'next';
import Portfolio from "@/components/sections/portfolio";

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description: 'Showcasing our successful projects in web development, mobile applications, and enterprise digital transformation.',
  openGraph: {
    title: 'Our Work Showcase | MyBestGuide Portfolio',
    description: 'Explore a selection of high-performance digital products we have engineered for clients globally.',
    url: 'https://mybestguide.in/portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'MyBestGuide Project Portfolio',
      }
    ],
  }
};

export default function PortfolioPage() {
  return (
    <Portfolio />
  );
}
