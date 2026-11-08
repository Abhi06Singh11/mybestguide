
import { Metadata } from 'next';
import Hero from "@/components/sections/hero";
import WhoWeAre from "@/components/sections/who-we-are";
import Explore from "@/components/sections/explore";
import Cta from "@/components/sections/cta";
import Initiative from "@/components/sections/initiative";

export const metadata: Metadata = {
  title: 'MyBestGuide | Expert Web, Mobile App & ERP Development',
  description: 'MyBestGuide is a premier software engineering firm delivering custom e-commerce, mobile applications, and enterprise ERP solutions. We Build. You Grow. Simple.',
  openGraph: {
    title: 'MyBestGuide | Expert Web, Mobile App & ERP Development',
    description: 'Premier digital transformation agency in India. Specialized in high-performance web and mobile solutions for modern businesses.',
    url: 'https://mybestguide.in',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'MyBestGuide Digital Excellence',
      }
    ],
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Initiative />
      <Explore />
      <Cta />
    </>
  );
}
