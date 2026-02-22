
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import GoToTop from '@/components/layout/go-to-top';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'MyBestGuide',
  description: 'E-commerce, Application Development, and ERP SaaS solutions to boost your growth and efficiency.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const preloaderScript = `
    (function() {
      const preloader = document.getElementById('preloader');
      if (!preloader) return;

      const body = document.body;

      // --- Typewriter Effect ---
      const typewriterElement = document.getElementById("typewriter");
      const text = "We Build. You Grow. Simple..!";
      const speed = 60;
      let i = 0;
      let isDeleting = false;
      let typeTimeout;

      function typeEffect() {
        if (!typewriterElement) return;

        const currentText = isDeleting ? text.substring(0, i--) : text.substring(0, i++);
        typewriterElement.textContent = currentText;

        let timeoutDelay = isDeleting ? speed / 2 : speed;

        if (!isDeleting && i > text.length) {
          isDeleting = true;
          timeoutDelay = 1200; // Pause at the end
        } else if (isDeleting && i === 0) {
          isDeleting = false;
          timeoutDelay = 500; // Pause before restarting
        }
        
        typeTimeout = setTimeout(typeEffect, timeoutDelay);
      }

      // --- Hiding Logic ---
      const hidePreloader = () => {
        if (!preloader.classList.contains('hide')) {
            // Stop the typewriter animation
            clearTimeout(typeTimeout);

            // Trigger fade-out animation
            preloader.classList.add('hide');

            // Remove from DOM after animation
            preloader.addEventListener('transitionend', () => {
              body.classList.remove('js-loading');
              preloader.remove();
            }, { once: true });
        }
      };

      // Run typewriter when the DOM is ready
      document.addEventListener("DOMContentLoaded", typeEffect);
      
      // Hide preloader when all assets are loaded
      window.addEventListener('load', hidePreloader);

      // Fallback to hide preloader after 10 seconds to prevent it from getting stuck
      setTimeout(hidePreloader, 10000);

    })();
  `;

  return (
    <html lang="en" className={cn('scroll-smooth', inter.variable)} suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background text-foreground antialiased flex flex-col font-sans')} suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: `document.body.classList.add('js-loading');` }} />
        <div id="preloader">
          <svg className="infinity" viewBox="0 0 187.3 93.7" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop id="preloader_gradient_start" offset="0%"/>
                <stop id="preloader_gradient_end" offset="100%"/>
              </linearGradient>
            </defs>
            <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" fill="none" stroke="url(#gradient)" id="outline"></path>
            <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" strokeWidth="5" fill="none" id="outline-bg"></path>
          </svg>
          <div className="brand">MyBestGuide</div>
          <div className="tagline" id="typewriter"></div>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Hides the preloader if JS is disabled, handled by CSS initially.
                // This script enables it, and the main preloader script will hide it.
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
        <script
          dangerouslySetInnerHTML={{
            __html: preloaderScript,
          }}
        />
      </body>
    </html>
  );
}
