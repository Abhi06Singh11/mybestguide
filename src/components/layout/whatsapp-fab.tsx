'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>WhatsApp</title>
        <path d="M12.04 2.02c-5.52 0-9.99 4.47-9.99 9.99s4.47 9.99 9.99 9.99c1.78 0 3.46-.46 4.93-1.28l5.05 1.27-1.3-4.9c.87-1.52 1.35-3.25 1.35-5.08 0-5.52-4.47-9.99-9.99-9.99zM12 20.5c-4.69 0-8.5-3.81-8.5-8.5s3.81-8.5 8.5-8.5 8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5zM16.6 14.2l-1.5-.7c-.3-.1-.5 0-.7.2l-.6.7c-.6-.3-1.6-.8-2.6-1.8s-1.5-2-1.8-2.6l.7-.6c.2-.2.3-.5.2-.7l-.7-1.5c-.1-.3-.4-.4-.7-.4h-.5c-.3 0-.6.1-.8.3-.2.2-.8.7-.8 2.1s.8 2.8 1 3.1c.1.2 1.8 2.8 4.4 3.9s2.6.9 3.4.9c.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.2z" fill="currentColor"/>
    </svg>
);

export default function WhatsappFab() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsAppNumber = '918005414588';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={cn(
        "fixed bottom-6 left-6 z-50 transition-all duration-500 ease-in-out animate-in fade-in-0 slide-in-from-bottom-10"
    )}>
        <div className="relative group">
            <Button
                asChild
                size="icon"
                className="h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg"
                aria-label="Chat on WhatsApp"
            >
                <Link href={`https://wa.me/${whatsAppNumber}`} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-8 w-8" />
                </Link>
            </Button>
            <Button
                variant="ghost"
                size="icon"
                onClick={handleDismiss}
                className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-card text-card-foreground shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted"
                aria-label="Dismiss"
            >
                <X className="h-4 w-4" />
            </Button>
        </div>
    </div>
  );
}