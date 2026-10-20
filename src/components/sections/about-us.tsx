'use client';

import { Lightbulb, Users, Award, ShieldCheck, TrendingUp, User, UserRound } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Abhishek Singh',
    title: 'CSM & Technical Lead',
    bio: 'Abhishek bridges the gap between client vision and technical execution, ensuring every project exceeds operational expectations.',
    icon: User
  },
  {
    name: 'Mohini Mishra',
    title: 'Senior Project Manager',
    bio: 'Mohini orchestrates our engineering squads with precision, maintaining a focus on deadline integrity and quality assurance.',
    icon: UserRound
  },
  {
    name: 'Mayank Kumar',
    title: 'Principal Software Engineer',
    bio: 'Mayank leads our architectural design, crafting the scalable backends and fluid frontends that power our clients\' growth.',
    icon: User
  }
];

const coreValues = [
    {
        icon: Lightbulb,
        title: "Innovation First",
        description: "We bypass standard templates to deliver unique, custom-engineered solutions for every client."
    },
    {
        icon: Users,
        title: "Client-Centricity",
        description: "Your business growth is our primary KPI. We succeed only when your digital product wins."
    },
    {
        icon: Award,
        title: "Uncompromising Quality",
        description: "From clean code to intuitive UI, we maintain the highest standards in every line of software."
    },
    {
        icon: ShieldCheck,
        title: "Ethical Partnership",
        description: "Transparency and integrity are baked into our processes, from quoting to deployment."
    }
]

export default function AboutUs() {
  return (
    <>
        <section className="bg-primary text-primary-foreground py-20 md:py-32">
            <div className="container text-center">
                <h1 className="font-headline text-5xl font-extrabold md:text-7xl mb-6">About MyBestGuide</h1>
                <p className="mt-4 mx-auto max-w-3xl text-xl md:text-2xl text-primary-foreground/80 font-medium leading-relaxed">
                    Engineering Digital Excellence Through Expertise, Integrity, and Strategic Innovation.
                </p>
                <div className="mt-12 max-w-4xl mx-auto text-left bg-background p-10 rounded-2xl shadow-2xl">
                     <p className="text-xl text-card-foreground leading-relaxed italic">
                        "At MyBestGuide, we transform digital complexity into strategic simplicity. Our mission is to equip businesses with the high-performance tools they need to lead their industries. We don't just provide services; we build long-term partnerships rooted in measurable success."
                    </p>
                </div>
            </div>
        </section>

        <section className="py-20 md:py-32">
            <div className="container">
                 <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="font-headline text-4xl font-bold tracking-tight">Our Evolution</h2>
                        <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
                            <p>Established in 2020, MyBestGuide emerged from a singular vision: to democratize high-end software engineering for ambitious businesses.</p>
                            <p>What began as a specialized consultancy has evolved into a full-scale digital transformation agency, serving a global clientele across web, mobile, and enterprise sectors.</p>
                            <p>We solve the fundamental challenge of the modern digital landscape—cutting through the noise with curated, reliable, and high-performance technology.</p>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-3xl bg-secondary/50 flex items-center justify-center shadow-2xl group overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 transition-all duration-500 group-hover:bg-primary/10"></div>
                        <TrendingUp className="h-32 w-32 text-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/40" />
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-secondary/30 py-20 md:py-32">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl font-bold md:text-6xl tracking-tight">Meet the Architects</h2>
                    <p className="mt-4 text-xl text-muted-foreground">The strategic minds behind our engineering success.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {teamMembers.map((member) => (
                        <Card key={member.name} className="group text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-background border-transparent">
                            <CardContent className="p-8">
                                <div className="flex justify-center mb-6">
                                    <div className="rounded-2xl bg-primary/5 p-6 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                        <member.icon className="h-14 w-14" />
                                    </div>
                                </div>
                                <h3 className="font-headline text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                                <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">{member.title}</p>
                                <p className="text-muted-foreground text-md leading-relaxed">{member.bio}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="py-20 md:py-32">
             <div className="container">
                <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
                    <h2 className="font-headline text-4xl font-bold md:text-6xl tracking-tight">Our Core Philosophies</h2>
                    <p className="mt-4 text-xl text-muted-foreground">The values that anchor every project we undertake.</p>
                </div>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {coreValues.map((item) => (
                        <Card key={item.title} className="group h-full text-center transition-all duration-500 hover:shadow-xl bg-secondary/20 border-transparent hover:bg-primary hover:text-primary-foreground">
                            <CardContent className="p-8">
                                <div className="flex justify-center mb-6">
                                    <div className="rounded-2xl bg-background p-5 text-primary shadow-sm transition-all duration-300 group-hover:scale-110">
                                        <item.icon className="h-10 w-10" />
                                    </div>
                                </div>
                                <h3 className="font-headline text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </>
  );
}
