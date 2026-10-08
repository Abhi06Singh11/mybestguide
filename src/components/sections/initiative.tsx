'use client';

import { Button } from '@/components/ui/button';
import { Heart, Rocket, Users } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function Initiative() {
  return (
    <section id="initiative" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
              <Heart className="h-4 w-4" />
              Giving Back
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              The Digital Growth Initiative
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that every great idea deserves a digital home. That's why every month, we dedicate a limited number of slots to build <strong className="text-foreground">free informative websites</strong> for emerging startups, non-profits, and small businesses.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This initiative is our way of giving back to the community that helps us grow. We don't just build websites; we build foundations for future success.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/services/free_website">
                <Button size="lg" className="font-bold">
                  Check Eligibility & Apply
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground border-transparent bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 text-primary mb-4 group-hover:bg-primary-foreground group-hover:text-primary transition-colors duration-300">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary-foreground">Fast Delivery</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80">Professional 3-5 page informative websites delivered within 10 business days.</p>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground border-transparent bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 text-primary mb-4 group-hover:bg-primary-foreground group-hover:text-primary transition-colors duration-300">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary-foreground">Zero Cost</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80">100% free development to help you establish trust and credibility online.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
