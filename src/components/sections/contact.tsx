'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MapPin, Phone, MessageSquare, Linkedin, Twitter, Instagram } from 'lucide-react';


const contactSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  primaryContact: z.string().min(10, { message: 'Please enter a valid contact number.' }),
  isWhatsAppAvailable: z.boolean().default(false),
  whatsappContact: z.string().optional(),
  service: z.string().min(1, { message: 'Please select a service.' }),
  budget: z.string().min(1, { message: 'Please select a budget.' }),
  industry: z.string().min(1, { message: 'Please select an industry.' }),
  message: z.string().optional(),
}).refine(data => data.isWhatsAppAvailable || (!data.isWhatsAppAvailable && data.whatsappContact), {
  message: "WhatsApp number is required if not available on primary number.",
  path: ["whatsappContact"],
});


const services = [
    "E-commerce Website Development",
    "Mobile App Development",
    "ERP SaaS Development",
    "Odoo Development & Customization",
    "Technical Support & Maintenance",
    "Customized Development Solutions"
];

const budgets = [
    "Below 30k",
    "30k – 50k",
    "50k – 1 Lakh",
    "1 Lakh – 2 Lakh",
    "2+ Lakh"
];

const industries = [
    "IT & Software", "E-commerce", "Healthcare", "Education", "Finance & Banking", "Real Estate",
    "Travel & Hospitality", "Manufacturing", "Logistics", "Media & Entertainment", "Startups", "Retail"
];

const socialLinks = [
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Instagram, label: 'Instagram' },
  ];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>WhatsApp</title>
        <path d="M12.04 2.02c-5.52 0-9.99 4.47-9.99 9.99s4.47 9.99 9.99 9.99c1.78 0 3.46-.46 4.93-1.28l5.05 1.27-1.3-4.9c.87-1.52 1.35-3.25 1.35-5.08 0-5.52-4.47-9.99-9.99-9.99zM12 20.5c-4.69 0-8.5-3.81-8.5-8.5s3.81-8.5 8.5-8.5 8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5zM16.6 14.2l-1.5-.7c-.3-.1-.5 0-.7.2l-.6.7c-.6-.3-1.6-.8-2.6-1.8s-1.5-2-1.8-2.6l.7-.6c.2-.2.3-.5.2-.7l-.7-1.5c-.1-.3-.4-.4-.7-.4h-.5c-.3 0-.6.1-.8.3-.2.2-.8.7-.8 2.1s.8 2.8 1 3.1c.1.2 1.8 2.8 4.4 3.9s2.6.9 3.4.9c.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.2z"/>
    </svg>
);

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      primaryContact: '',
      isWhatsAppAvailable: false,
      whatsappContact: '',
      service: '',
      budget: 'Below 30k',
      industry: '',
      message: '',
    },
  });

  const isWhatsAppAvailable = form.watch('isWhatsAppAvailable');
  const whatsAppNumber = "918005414588";
  const quickMessages = [
    "Hi, I need urgent assistance.",
    "Hi, I’d like to know more about your services.",
    "Hi, I have a project idea to discuss."
  ];

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log('Contact form submitted:', values);
    toast({
      title: 'Message Sent!',
      description: "We've received your inquiry and will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="bg-secondary py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl text-foreground">Get in Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Whether you have a project in mind, need a quote, or just want to talk about your ideas, we're here to help. Reach out to us, and let's start a conversation about how we can bring your vision to life.
            </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
            <div className="lg:col-span-3">
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle className="font-headline">Send Us a Message</CardTitle>
                        <CardDescription>Fill out the form below, and we'll get back to you as soon as possible.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <FormField control={form.control} name="firstName" render={({ field }) => (
                                        <FormItem><FormLabel>First Name</FormLabel><FormControl><Input placeholder="John" {...field} /></FormControl><FormMessage /></FormItem>
                                    )}/>
                                    <FormField control={form.control} name="lastName" render={({ field }) => (
                                        <FormItem><FormLabel>Last Name</FormLabel><FormControl><Input placeholder="Doe" {...field} /></FormControl><FormMessage /></FormItem>
                                    )}/>
                                </div>
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="john.doe@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                 <FormField control={form.control} name="primaryContact" render={({ field }) => (
                                    <FormItem><FormLabel>Primary Contact Number</FormLabel><FormControl><Input placeholder="+91 12345 67890" {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                <FormField
                                    control={form.control}
                                    name="isWhatsAppAvailable"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>This number is available on WhatsApp</FormLabel>
                                        </div>
                                        </FormItem>
                                    )}
                                />
                                {!isWhatsAppAvailable && (
                                     <FormField control={form.control} name="whatsappContact" render={({ field }) => (
                                        <FormItem><FormLabel>WhatsApp Contact Number</FormLabel><FormControl><Input placeholder="+91 09876 54321" {...field} /></FormControl><FormMessage /></FormItem>
                                    )}/>
                                )}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <FormField control={form.control} name="service" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Service of Interest</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl><SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger></FormControl>
                                                <SelectContent>
                                                    {services.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>
                                    <FormField control={form.control} name="budget" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Estimated Budget</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl><SelectTrigger><SelectValue placeholder="Select your budget" /></SelectTrigger></FormControl>
                                                <SelectContent>
                                                    {budgets.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>
                                </div>
                                <FormField control={form.control} name="industry" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your Industry</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl><SelectTrigger><SelectValue placeholder="Select your industry" /></SelectTrigger></FormControl>
                                            <SelectContent>
                                                {industries.map(i => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                <FormField control={form.control} name="message" render={({ field }) => (
                                    <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="Briefly describe your project or inquiry..." rows={5} {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                <div className="text-center">
                                    <Button type="submit" size="lg">Send Message</Button>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-8 lg:col-span-2">
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2">
                            <WhatsAppIcon className="h-6 w-6 text-green-500" />Quick WhatsApp Inquiry
                        </CardTitle>
                        <CardDescription>Click a message below to start a chat on WhatsApp.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-3">
                        {quickMessages.map((msg, index) => (
                             <a
                                key={index}
                                href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(msg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button variant="outline" className="w-full justify-start text-left h-auto">
                                    <MessageSquare className="mr-3 h-4 w-4" />
                                    <span className="flex-1 whitespace-normal">{msg}</span>
                                </Button>
                             </a>
                        ))}
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Our Location</CardTitle>
                        <CardDescription>Lucknow, Uttar Pradesh, India</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <div className="aspect-video w-full rounded-md overflow-hidden">
                         <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.9351232887!2d80.8077382451007!3d26.84892932373024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                       </div>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Mail className="h-6 w-6 text-primary" />
                            <div>
                                <h4 className="font-semibold">Business Email</h4>
                                <a href="mailto:mybestguide.in@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">mybestguide.in@gmail.com</a>
                            </div>
                        </div>
                         <div className="flex items-center gap-4">
                            <Phone className="h-6 w-6 text-primary" />
                            <div>
                                <h4 className="font-semibold">Phone Number</h4>
                                <a href="tel:+917379848171" className="text-muted-foreground hover:text-primary transition-colors">+91-7379848171</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <h4 className="font-semibold">Our Location</h4>
                                <p className="text-muted-foreground">Lucknow, India</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Follow Us</CardTitle>
                    </CardHeader>
                    <CardContent className="flex space-x-4">
                        {socialLinks.map((social) => (
                            <Link key={social.label} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                                <social.icon className="h-7 w-7" />
                                <span className="sr-only">{social.label}</span>
                            </Link>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
