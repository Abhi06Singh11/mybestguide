'use client';

import { Button } from '@/components/ui/button';
import { Heart, Rocket, Users, Eye } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function Initiative() {
  return (
    <section id="initiative" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
              <Heart className="h-4 w-4" />
              Community Impact
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              The Digital Growth Initiative
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We believe that visionary ideas shouldn't be held back by technical barriers. That's why every month, MyBestGuide dedicates specialized resources to engineer <strong className="text-foreground">complimentary professional websites</strong> for deserving startups, non-profits, and micro-businesses.
              </p>
              <p>
                This initiative is our commitment to fostering a vibrant digital economy. By providing the digital foundation for emerging ventures, we help turn potential into performance, one launch at a time.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 pt-4">
              <Link href="/services/free_website">
                <Button size="lg" className="h-14 px-8 text-md font-bold shadow-lg shadow-primary/20">
                  Apply for Free Website
                </Button>
              </Link>
              <Link href="/portfolio?category=Free%20Initiative">
                <Button size="lg" variant="outline" className="h-14 px-8 text-md font-bold">
                  <Eye className="mr-2 h-5 w-5" />
                  See the Impact
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <Card className="group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-primary hover:text-primary-foreground border-transparent bg-background shadow-xl">
              <CardContent className="p-10 flex flex-col items-center text-center">
                <div className="rounded-2xl bg-primary/10 p-5 text-primary mb-6 group-hover:bg-primary-foreground group-hover:text-primary transition-all duration-300">
                  <Rocket className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary-foreground">Swift Launch</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed">
                  Get a professionally engineered 3-5 page digital presence launched in just 10 business days.
                </p>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-primary hover:text-primary-foreground border-transparent bg-background shadow-xl">
              <CardContent className="p-10 flex flex-col items-center text-center">
                <div className="rounded-2xl bg-primary/10 p-5 text-primary mb-6 group-hover:bg-primary-foreground group-hover:text-primary transition-all duration-300">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary-foreground">Pure Value</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed">
                  100% development sponsorship designed to establish your brand's credibility without upfront capital.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
