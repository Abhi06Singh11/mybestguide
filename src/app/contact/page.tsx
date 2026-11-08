
import { Metadata } from 'next';
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with MyBestGuide for expert software development and digital strategy consulting. Request a quote or start a conversation today.',
  openGraph: {
    title: 'Contact MyBestGuide | Start Your Project',
    description: 'Reach out to our engineering team. We are ready to help you architect your digital future.',
    url: 'https://mybestguide.in/contact',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Contact MyBestGuide',
      }
    ],
  }
};

export default function ContactPage() {
  return (
    <Contact />
  );
}
