'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1 text-yellow-400 mb-4 group-hover:text-yellow-300">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return <Star key={star} fill="currentColor" className="h-5 w-5" />;
        } else if (rating >= star - 0.5) {
          return (
            <div key={star} className="relative h-5 w-5">
              <Star className="absolute inset-0 h-5 w-5 text-yellow-400 opacity-30" />
              <div className="absolute inset-0 h-5 w-5 overflow-hidden w-[50%]">
                <Star fill="currentColor" className="h-5 w-5 text-yellow-400" />
              </div>
            </div>
          );
        } else {
          return <Star key={star} className="h-5 w-5 opacity-30" />;
        }
      })}
    </div>
  );
}

export default function Testimonials() {
  const testimonialImages = PlaceHolderImages.filter(img => testimonials.some(t => t.image === img.id));

  return (
    <section id="testimonials" className="container py-16 md:py-24">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Client Success Stories</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                See how MyBestGuide is empowering businesses across India through high-performance digital engineering.
            </p>
        </div>
        <Carousel
            opts={{
                align: 'start',
                loop: true,
            }}
            className="w-full"
        >
            <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => {
                const image = testimonialImages.find(img => img.id === testimonial.image);
                return (
                    <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                            <Card className="group h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground">
                                <CardContent className="flex h-full flex-col justify-between p-6">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <StarRating rating={testimonial.rating} />
                                            <span className="text-xs font-bold uppercase tracking-widest text-primary group-hover:text-primary-foreground/70">{testimonial.projectName}</span>
                                        </div>
                                        <blockquote className="italic text-card-foreground group-hover:text-primary-foreground mb-6">
                                            “{testimonial.quote}”
                                        </blockquote>
                                        {testimonial.url && testimonial.url !== "#" && (
                                            <Link href={testimonial.url} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" size="sm" className="w-full mb-6 group-hover:bg-primary-foreground group-hover:text-primary border-primary group-hover:border-primary-foreground text-xs font-bold uppercase">
                                                    View Project <ExternalLink className="ml-2 h-3 w-3" />
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                    <div className="mt-auto flex items-center pt-6 border-t group-hover:border-primary-foreground/20">
                                        <Avatar className="h-12 w-12 border-2 border-primary/10 group-hover:border-primary-foreground/30">
                                            {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                                            <AvatarFallback className="group-hover:bg-primary-foreground group-hover:text-primary">{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <div className="ml-4 text-left">
                                            <p className="font-bold font-headline text-foreground group-hover:text-primary-foreground">{testimonial.name}</p>
                                            <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/80 font-medium">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                );
            })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12" />
            <CarouselNext className="hidden sm:flex -right-12" />
        </Carousel>
    </section>
  );
}
