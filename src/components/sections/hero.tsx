import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[75vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx0ZWFtJTIwd29ya2luZ3xlbnwwfHx8fDE3Njc3MjAwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="MyBestGuide Team collaborating on digital transformation strategies"
          fill
          priority
          className="object-cover -z-10 brightness-[0.4]"
          data-ai-hint="team collaborating"
        />
        <div className="container px-4 text-center md:px-6 relative z-10">
            <div className="mx-auto max-w-4xl space-y-8">
                <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                    We Build. You Grow. Simple.
                </h1>
                <p className="mx-auto max-w-[800px] text-lg text-gray-100 md:text-2xl font-medium leading-relaxed">
                    Premier Web Development, Custom Apps, and Growth-Focused Digital Strategies for Modern Enterprises.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
                    <Link href="/services">
                        <Button size="lg" className="h-14 px-10 text-lg font-bold">
                            Explore Services
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold">
                            Get a Free Quote
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}
