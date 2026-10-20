
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

export const metadata: Metadata = {
  title: 'MyBestGuide | Premier Web, App & ERP Software Solutions',
  description: 'Elevate your business with expert E-commerce development, custom mobile applications, and scalable ERP SaaS solutions. We Build. You Grow. Simple.',
  keywords: 'web development india, mobile app development, ERP SaaS solutions, odoo customization, technical support services, custom software development',
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
          "url": "https://mybestguide.in",
          "logo": "https://mybestguide.in/logo.png",
          "description": "A leading digital transformation agency specializing in high-performance web and mobile solutions.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lucknow",
            "addressRegion": "UP",
            "addressCountry": "IN"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-8005414588",
              "contactType": "customer service"
            },
            {
              "@type": "ContactPoint",
              "telephone": "+91-7379848171",
              "contactType": "technical support"
            }
          ]
        }),
      }}
    />
  );
}
