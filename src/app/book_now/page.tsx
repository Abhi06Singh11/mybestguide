
import { Metadata } from 'next';
import BookNowClient from '@/components/sections/book-now-client';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description: 'Schedule a session with our experts to discuss your digital transformation journey. Book online or scan our QR code to get started.',
  openGraph: {
    title: 'Schedule Your Consultation | MyBestGuide',
    description: 'Expert guidance for your web, app, and enterprise software needs. Book a session with our engineering leads.',
    url: 'https://mybestguide.in/book_now',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Book an Appointment with MyBestGuide',
      }
    ],
  }
};

export default function BookNowPage() {
  return <BookNowClient />;
}
