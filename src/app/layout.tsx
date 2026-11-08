
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import GoToTop from '@/components/layout/go-to-top';
import Preloader from '@/components/layout/preloader';
import WhatsappFab from '@/components/layout/whatsapp-fab';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const SITE_URL = 'https://mybestguide.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MyBestGuide | Premier Web, App & ERP Software Solutions',
    template: '%s | MyBestGuide'
  },
  description: 'Elevate your business with expert E-commerce development, custom mobile applications, and scalable ERP SaaS solutions. We Build. You Grow. Simple.',
  keywords: 'web development india, mobile app development, ERP SaaS solutions, odoo customization, technical support services, custom software development',
  authors: [{ name: 'MyBestGuide' }],
  creator: 'MyBestGuide',
  publisher: 'MyBestGuide',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'MyBestGuide',
    title: 'MyBestGuide | Premier Web, App & ERP Software Solutions',
    description: 'Elevate your business with expert E-commerce development, custom mobile applications, and scalable ERP SaaS solutions. We Build. You Grow. Simple.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'MyBestGuide Digital Transformation Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyBestGuide | Premier Web, App & ERP Software Solutions',
    description: 'Elevate your business with expert E-commerce development, custom mobile applications, and scalable ERP SaaS solutions.',
    site: '@MyBestGuideIn',
    creator: '@MyBestGuideIn',
    images: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&h=630&auto=format&fit=crop'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={cn('scroll-smooth', inter.variable)} suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background text-foreground antialiased flex flex-col font-sans')} suppressHydrationWarning>
        <Preloader />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  console.error('Could not set theme from localStorage', e);
                }
              })();
            `,
          }}
        />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
        <GoToTop />
        <ProjectSchema />
        <WhatsappFab />
      </body>
    </html>
  );
}

function ProjectSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MyBestGuide",
          "url": "https://mybestguide.in/",
          "logo": "https://mybestguide.in/logo.png",
          "description": "Digital transformation and software engineering services including web development, mobile applications, ERP, SaaS and custom software solutions.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lucknow",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-7379848171",
              "contactType": "business enquiries",
              "url": "https://mybestguide.in/contact"
            },
            {
              "@type": "ContactPoint",
              "telephone": "+91-8005414588",
              "contactType": "technical support"
            }
          ]
        }),
      }}
    />
  );
}
