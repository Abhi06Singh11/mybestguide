'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Mail, Compass } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden bg-background">
      {/* Background Subtle Gradient Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in-up">
        {/* Large 404 Visual */}
        <div className="relative">
          <h1 className="text-9xl font-black text-primary/5 select-none leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-float">
              <Compass className="w-24 h-24 md:w-32 md:h-32 text-primary" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            Looks like you’ve taken a wrong turn. The page you’re looking for doesn’t exist, may have been moved, or the URL might be incorrect.
          </p>
        </div>

        {/* User Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="w-full sm:w-auto font-bold shadow-lg shadow-primary/20">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Homepage
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto font-bold"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>

          <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto font-bold">
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact Support
            </Link>
          </Button>
        </div>

        <div className="pt-8 text-sm text-muted-foreground/60 font-medium italic">
          Let’s get you back on track.
        </div>
      </div>
    </div>
  );
}
