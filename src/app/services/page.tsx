
import { Metadata } from 'next';
import Services from "@/components/sections/services";

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive range of software development services including E-commerce, Mobile Apps, ERP SaaS, Odoo Customization, and Technical Support.',
  openGraph: {
    title: 'Expert Software Engineering Services | MyBestGuide',
    description: 'From custom web apps to enterprise ERP systems, discover how we build scalable digital solutions for your business.',
    url: 'https://mybestguide.in/services',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'MyBestGuide Software Services',
      }
    ],
  }
};

export default function ServicesPage() {
  return (
    <Services />
  );
}
