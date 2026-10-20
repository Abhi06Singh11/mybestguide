import { Users } from "lucide-react";

export default function WhoWeAre() {
    return (
        <section id="who-we-are" className="py-20 md:py-32 bg-background border-b">
            <div className="container">
                <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 text-center md:grid-cols-3 md:text-left">
                    <div className="flex justify-center md:justify-start">
                        <div className="rounded-2xl bg-primary/5 p-8 text-primary shadow-inner">
                            <Users className="h-16 w-16" />
                        </div>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="font-headline text-3xl font-bold md:text-5xl tracking-tight text-foreground">
                            Digital Architects Committed to Your Success
                        </h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                MyBestGuide is a high-performance software engineering firm specializing in bridging the gap between innovative ideas and market-ready digital products. We don't just build software; we architect the digital future of your brand.
                            </p>
                            <p>
                                By combining strategic growth consulting with deep technical expertise, we empower businesses—from emerging startups to established enterprises—to establish a dominant online presence and achieve scalable operational efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
