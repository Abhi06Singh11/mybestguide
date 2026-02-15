
'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Rocket, CheckCircle, Download, Globe, ShoppingCart, Lightbulb, XCircle, Info, Puzzle, Headset, Megaphone, Store, Gift, FileText, Paintbrush, Gauge, Bot, CalendarCheck, Search, Chrome, Hash, Filter, Smartphone, CreditCard, Box, Settings, Package, Edit, Mail, LineChart, AlertTriangle, MousePointerClick, ArrowRight, MessageSquare, ChevronDown, Check, Circle, Code, Trash2, ArrowLeft } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useRouter } from 'next/navigation';


const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>WhatsApp</title>
        <path d="M12.04 2.02c-5.52 0-9.99 4.47-9.99 9.99s4.47 9.99 9.99 9.99c1.78 0 3.46-.46 4.93-1.28l5.05 1.27-1.3-4.9c.87-1.52 1.35-3.25 1.35-5.08 0-5.52-4.47-9.99-9.99-9.99zM12 20.5c-4.69 0-8.5-3.81-8.5-8.5s3.81-8.5 8.5-8.5 8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5zM16.6 14.2l-1.5-.7c-.3-.1-.5 0-.7.2l-.6.7c-.6-.3-1.6-.8-2.6-1.8s-1.5-2-1.8-2.6l.7-.6c.2-.2.3-.5.2-.7l-.7-1.5c-.1-.3-.4-.4-.7-.4h-.5c-.3 0-.6.1-.8.3-.2.2-.8.7-.8 2.1s.8 2.8 1 3.1c.1.2 1.8 2.8 4.4 3.9s2.6.9 3.4.9c.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.2z"/>
    </svg>
);

const applicationSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  businessName: z.string().min(2, 'Business name is required'),
  websiteType: z.enum(['Basic Website', 'E-Commerce'], {
    required_error: 'Please select a website type.',
  }),
  goals: z.string().optional(),
  addons: z.array(z.string()).optional(),
  industry: z.string().min(1, 'Please select an industry'),
  customIndustry: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
}).refine(data => {
    if (data.industry === 'Custom') {
        return data.customIndustry && data.customIndustry.length > 0;
    }
    return true;
}, {
    message: 'Please specify your industry',
    path: ['customIndustry'],
});


export default function FreeWebsitePage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [slots, setSlots] = useState({ remaining: 7, total: 10 });
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const form = useForm<z.infer<typeof applicationSchema>>({
        resolver: zodResolver(applicationSchema),
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            businessName: '',
            goals: '',
            addons: [],
            industry: '',
            customIndustry: '',
            terms: false,
        },
    });

    const scrollToApply = () => {
        document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const randomDuration = Math.floor(Math.random() * (12 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000 + 1) + 3 * 60 * 60 * 1000);
        const endDate = new Date(Date.now() + randomDuration);
    
        const timer = setInterval(() => {
          const now = new Date().getTime();
          const distance = endDate.getTime() - now;
    
          if (distance < 0) {
            clearInterval(timer);
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          } else {
            setTimeLeft({
              days: Math.floor(distance / (1000 * 60 * 60 * 24)),
              hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
              minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
              seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
          }
        }, 1000);
    
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setSlots({
            total: 10,
            remaining: Math.floor(Math.random() * (8 - 5 + 1)) + 5,
        });
    }, []);

    const totalSteps = 5;

    const changeStep = async (direction: 1 | -1) => {
        if (direction === 1) {
            const fieldsToValidate: (keyof z.infer<typeof applicationSchema>)[] = [
                [], // Step 0 (not used)
                ['fullName', 'email', 'phone', 'businessName'], // Step 1
                ['websiteType', 'goals'], // Step 2
                ['addons'], // Step 3
                ['industry', 'customIndustry'], // Step 4
                ['terms'] // Step 5
            ][currentStep] as any;
            
            const isValid = await form.trigger(fieldsToValidate);
            if (!isValid) return;
        }

        const newStep = currentStep + direction;
        if (newStep > 0 && newStep <= totalSteps) {
            setCurrentStep(newStep);
        }
    };

    const onSubmit = (data: z.infer<typeof applicationSchema>) => {
        const message = `=========================
Free website Contact Form Submission

Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Business Name: ${data.businessName}
Selected Plan: ${data.websiteType}

Add-Ons Selected:
${data.addons && data.addons.length > 0 ? data.addons.map(a => '- ' + a).join('\n') : 'None'}

Website Industry: ${data.industry === 'Custom' ? data.customIndustry : data.industry}

Additional Messages:
${data.goals}
=========================`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/917379848171?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        setIsSuccessModalOpen(true);
        form.reset();
        setCurrentStep(1);
    };

    const journeySteps = [
        {
            title: "Apply for Free Website",
            description: "Fill out a simple form with your business details and goals. Takes less than 2 minutes.",
            icon: Edit,
            meta: "2 Min Application"
        },
        {
            title: "Approval Confirmation",
            description: "Our team reviews your application within 24 hours. Approved? You'll get a welcome email!",
            icon: Mail,
            meta: "Email Confirmation"
        },
        {
            title: "Website Build",
            description: "Our designers and developers create your professional website in 7–10 business days.",
            icon: Code,
            meta: "7–10 Business Days"
        },
        {
            title: "Launch Your Website",
            description: "Review, approve, and launch your new website. You're officially online!",
            icon: Rocket,
            meta: "Go Live!"
        },
        {
            title: "Grow & Upgrade",
            description: "When you're ready to scale, unlock powerful features with optional upgrades.",
            icon: LineChart,
            meta: "Scale Your Success"
        },
    ];

    const faqItems = [
        {
            question: "Is the website really 100% free?",
            answer: "Yes! The basic website is completely free with no hidden charges. You own the content and get a fully functional, professional website. We only charge for optional upgrades, additional features, and premium support if you choose them."
        },
        {
            question: "What's the catch?",
            answer: "There's no catch! The free version has some limitations (template-based design, limited revisions, agency footer branding) as disclosed. We offer this as a way to help businesses get started online while building long-term relationships."
        },
        {
            question: "Do I need to buy hosting?",
            answer: "You'll receive hosting-ready code that you can deploy anywhere. We can help you set up affordable hosting (usually ₹300-1,000/month) or you can handle it yourself. Domain registration is also separate but we can guide you."
        },
        {
            question: "Can I remove the agency branding?",
            answer: "Yes! Footer branding removal is available as a one-time paid upgrade (₹999). This gives you a completely white-labeled website."
        },
    ];

    const addons = {
        "Performance & Design": [
            { id: "Custom UI/UX Design", title: "Custom UI/UX Design", desc: "Tailored branding & unique layout", price: "₹999+", icon: Paintbrush },
            { id: "Speed Optimization", title: "Speed Optimization", desc: "Faster load times & higher scores", price: "₹899", icon: Gauge },
            { id: "Extra Pages", title: "Extra Pages", desc: "Additional pages beyond basic 3-5", price: "₹499+", icon: FileText },
            { id: "WhatsApp Integration", title: "WhatsApp Integration", desc: "Direct chat button for visitors", price: "₹299", icon: MessageSquare },
            { id: "Chatbot Integration", title: "Chatbot Integration", desc: "24/7 automated AI support", price: "₹999+", icon: Bot },
            { id: "Booking System", title: "Booking System", desc: "Appointment scheduling tool", price: "₹1,499+", icon: CalendarCheck }
        ],
        "Marketing & Growth": [
            { id: "SEO Services", title: "SEO Services", desc: "Rank higher on Google", price: "₹1,999+/mo", icon: Search },
            { id: "Google Ads", title: "Google Ads", desc: "Setup & campaign management", price: "₹1,499+/mo", icon: Chrome },
            { id: "Social Media", title: "Social Media Marketing", desc: "Content & growth strategy", price: "₹1,999+/mo", icon: Hash },
            { id: "Funnels & Automation", title: "Funnels & Automation", desc: "Lead flows & conversion tracking", price: "₹1,999+", icon: Filter }
        ],
        "E-Commerce & Payments": [
            { id: "UPI Integration", title: "UPI Integration", desc: "Accept UPI payments", price: "₹499", icon: Smartphone },
            { id: "International Payments", title: "International Payments", desc: "Stripe/PayPal setup", price: "₹999", icon: CreditCard },
            { id: "Product Listing", title: "Product Listing", desc: "Images, descriptions & pricing", price: "₹99+", icon: Box },
            { id: "Store Automation", title: "Store Automation", desc: "Inventory & order automation", price: "Custom", icon: Settings },
        ]
    };
    
    const supportPlans = [
        { title: "Basic Support", price: "₹499", desc: "Perfect for small business owners.", features: ["Up to 5 Support Tickets", "24-48 Hour Response", "Monthly Site Monitoring", "Email Support"]},
        { title: "Growth Support", price: "₹1,499", desc: "For growing businesses ready to scale.", features: ["30 Support Tickets/mo", "12-24 Hour Response", "WhatsApp & Email", "Priority Bug Fixes", "Monthly Backups"], popular: true},
        { title: "Premium Support", price: "₹3,499", desc: "Ideal for mission-critical websites.", features: ["Dedicated Engineer", "4-Hour Response SLA", "Phone Consultations", "Weekly Backups"]}
    ];

    const bundles = [
        { title: "Startup Pack", price: "₹4,999", oldPrice: "₹7,499", desc: "For new businesses", features: ["5-page Website", "Custom UI/UX Design", "Speed Optimization", "1 Month Basic Support"]},
        { title: "Growth Pack", price: "₹9,999", oldPrice: "₹15,999", desc: "Scale with confidence", features: ["10-page Website", "Premium UI/UX Design", "Booking System", "SEO Starter Setup", "1 Month Growth Support"], popular: true},
        { title: "Accelerator", price: "₹19,999", oldPrice: "₹32,999", desc: "Complete growth solution", features: ["Full Custom Website", "All Integrations", "SEO + Social + Ads", "3 Months Support"]}
    ]

    const industryOptions = ["Professional Services", "Healthcare & Wellness", "Retail & E-Commerce", "Food & Restaurant", "Real Estate", "Education & Coaching", "Technology & SaaS", "Creative & Design", "Construction & Home Services", "Custom"];


    return(
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gray-900 text-primary-foreground pt-2.5 pb-16 md:pb-24">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-900 to-gray-900 opacity-80"></div>
                <div className="container relative z-10">
                    <div className="text-left">
                        <Button
                            variant="outline"
                            className="mb-8 bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground hover:text-primary"
                            onClick={() => router.back()}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Button>
                    </div>
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Limited-Time Offer – <span className="font-bold">{slots.remaining}</span> Slots Remaining This Month
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Get a 100% FREE Professional Website</h1>
                        <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                            Launch your business online with a real, functional website. Generate leads, build trust, and grow – <strong>without spending a dime.</strong>
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 text-white/90">
                            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400" /> Real Website</span>
                            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400" /> Hosting-Ready Code</span>
                            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400" /> No Credit Card Required</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                             <Button 
                                size="lg" 
                                onClick={scrollToApply} 
                                className="font-bold bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors duration-200">
                                <Rocket className="mr-2"/>Claim Free Website
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="bg-transparent text-primary-foreground border-primary-foreground/80 hover:bg-primary-foreground hover:text-primary transition-colors duration-200" 
                                asChild>
                                <a href="#features">See What's Included</a>
                            </Button>
                        </div>

                        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/10 shadow-lg">
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-white/90 text-sm font-semibold uppercase tracking-wider">Offer Expires In</p>
                                <span className="bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg border border-white/10">Few slots left</span>
                            </div>
                            <div className="flex justify-center gap-3 md:gap-6 text-white">
                                {Object.entries(timeLeft).map(([unit, value]) => (
                                    <div key={unit} className="text-center">
                                        <div className="bg-white/20 rounded-xl px-3 py-3 md:px-5 md:py-4 min-w-[60px] md:min-w-[80px] backdrop-blur-sm">
                                            <span className="text-2xl md:text-4xl font-bold font-mono">{String(value).padStart(2, '0')}</span>
                                        </div>
                                        <span className="text-white/70 text-xs mt-2 block font-medium capitalize">{unit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You Get Section */}
            <section id="features" className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">What You Get For FREE</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Everything you need to establish your online presence – completely free of charge.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <Card className="p-8 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <CardContent className="p-0">
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Globe size={32}/>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-3">FREE Basic Website</h3>
                                <p className="text-muted-foreground mb-8">Perfect for service businesses, professionals, and local brands getting started online.</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span><strong className="text-foreground">3–5 Page</strong> Professional Website</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span><strong className="text-foreground">Mobile Responsive</strong> Design</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span><strong className="text-foreground">Pre-Designed</strong> Modern Template</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span><strong className="text-foreground">Basic On-Page SEO</strong> Setup</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span><strong className="text-foreground">Contact Form</strong> with Email</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span><strong className="text-foreground">Client-Owned</strong> Content & Assets</span></li>
                                </ul>
                                <div className="pt-6 border-t">
                                    <div className="flex items-center justify-between">
                                        <div><span className="text-sm text-muted-foreground mb-1">Estimated Value</span><div className="flex items-baseline gap-2"><span className="text-3xl font-bold text-foreground">₹0</span><span className="text-muted-foreground line-through">₹14,999</span></div></div>
                                        <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-4 py-1.5 rounded-full text-sm font-bold">100% FREE</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="p-8 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                             <CardContent className="p-0">
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <ShoppingCart size={32}/>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-3">FREE E-Commerce Starter</h3>
                                <p className="text-muted-foreground mb-8">Ideal for early-stage e-commerce brands and product sellers ready to sell.</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span><strong className="text-foreground">Professional Storefront</strong> Design</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span>Up to <strong className="text-foreground">10 Products</strong> Listed</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span><strong className="text-foreground">Product & Cart</strong> Pages</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span><strong className="text-foreground">Manual Order</strong> (WhatsApp/Email)</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span><strong className="text-foreground">Mobile Responsive</strong> Shopping</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span><strong className="text-foreground">Product Gallery</strong> & Desc.</span></li>
                                </ul>
                                <div className="pt-6 border-t">
                                    <div className="flex items-center justify-between">
                                        <div><span className="text-sm text-muted-foreground mb-1">Estimated Value</span><div className="flex items-baseline gap-2"><span className="text-3xl font-bold text-foreground">₹0</span><span className="text-muted-foreground line-through">₹24,999</span></div></div>
                                        <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 px-4 py-1.5 rounded-full text-sm font-bold">100% FREE</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

             {/* Transparency Section */}
             <section className="py-16 md:py-24 bg-background">
                <div className="container max-w-5xl">
                    <Card className="p-8 md:p-12 bg-amber-50 dark:bg-gray-900 border-amber-200 dark:border-amber-900">
                        <CardContent className="p-0">
                            <div className="flex items-start gap-5 mb-10">
                                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-amber-200 dark:border-amber-500/20">
                                    <Lightbulb className="text-amber-600 dark:text-amber-400" size={28}/>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">Let's Be Transparent</h2>
                                    <p className="text-lg text-gray-700 dark:text-gray-300">Here's what the free version <span className="font-semibold text-amber-600 dark:text-amber-400">doesn't</span> include:</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-10 text-muted-foreground">
                                {["No custom design", "No advanced animations", "No payment gateway", "Limited revisions (2)", "Limited support (3/mo)", "Agency branding in footer", "No performance optimization", "No conversion optimization"].map(item => (
                                    <div key={item} className="flex items-center gap-3 p-2 rounded-lg hover:bg-card/50 transition-colors">
                                        <XCircle className="text-slate-400" size={20}/>
                                        <span className="font-medium text-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-card/60 dark:bg-black/20 rounded-2xl p-6 border dark:border-border/50">
                                <div className="flex items-start md:items-center gap-4">
                                    <Info className="text-primary h-8 w-8 flex-shrink-0 mt-1 md:mt-0" />
                                    <p className="text-muted-foreground leading-relaxed font-medium"><strong className="text-foreground">The free version works perfectly</strong> for getting started. When you're ready to scale, growth features are unlocked through affordable upgrades.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
             </section>

             {/* Upgrades Section */}
            <section id="upgrades" className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Value Enhancements</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Unlock powerful growth tools as your business scales. No pressure – upgrade only when you need it.</p>
                    </div>
                    <Tabs defaultValue="addons" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto mb-12">
                            <TabsTrigger value="addons"><Puzzle className="mr-2"/>Performance</TabsTrigger>
                            <TabsTrigger value="support"><Headset className="mr-2"/>Support Plans</TabsTrigger>
                            <TabsTrigger value="marketing"><Megaphone className="mr-2"/>Marketing</TabsTrigger>
                            <TabsTrigger value="ecommerce"><Store className="mr-2"/>E-Commerce</TabsTrigger>
                            <TabsTrigger value="bundles"><Gift className="mr-2"/>Bundle Offers</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="addons">
                            <div className="max-w-3xl mx-auto mb-8 text-center">
                                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                                    <p className="text-sm text-blue-900 dark:text-blue-300 font-medium leading-relaxed">
                                        Domain and Hosting prices are not included in this package.
                                        <br />
                                        If you want to buy hosting and domain from us, we provide an additional 10–15% discount compared to the market price.
                                        <br />
                                        We are powered by <strong className="text-blue-950 dark:text-blue-200">GoDaddy</strong>.
                                    </p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Object.values(addons["Performance & Design"]).map(addon => (
                                    <Card key={addon.id} className="p-6 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                        <CardContent className='p-0'>
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300"><addon.icon className="text-primary group-hover:text-primary-foreground" size={24}/></div>
                                            <h4 className="text-lg font-bold text-foreground mb-2">{addon.title}</h4>
                                            <p className="text-muted-foreground text-sm mb-5 min-h-[40px]">{addon.desc}</p>
                                            <div className="flex items-center justify-between border-t pt-4">
                                                <span className="text-2xl font-bold text-foreground dark:text-white">{addon.price}</span>
                                                <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">one-time</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="support">
                            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
                                {supportPlans.map(plan => (
                                    <Card key={plan.title} className={cn("p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1", plan.popular && "border-primary ring-2 ring-primary scale-105")}>
                                        <CardContent className='p-0 h-full flex flex-col'>
                                            {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase">Most Popular</div>}
                                            <h4 className="text-xl font-bold text-foreground mb-2">{plan.title}</h4>
                                            <p className="text-muted-foreground text-sm mb-6 flex-grow">{plan.desc}</p>
                                            <div className="mb-6 pb-6 border-b"><span className="text-4xl font-bold text-foreground dark:text-white">{plan.price}</span><span className="text-muted-foreground">/month</span></div>
                                            <ul className="space-y-4 mb-8">
                                                {plan.features.map(feat => <li key={feat} className="flex items-center gap-3 text-sm"><CheckCircle className="text-green-500 h-4 w-4 flex-shrink-0"/><span>{feat}</span></li>)}
                                            </ul>
                                            <Button variant={plan.popular ? 'default' : 'outline'} className="w-full mt-auto" onClick={scrollToApply}>Choose Plan</Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="marketing">
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                               {Object.values(addons["Marketing & Growth"]).map(addon => (
                                    <Card key={addon.id} className="p-6 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                        <CardContent className='p-0'>
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300"><addon.icon className="text-primary group-hover:text-primary-foreground" size={24}/></div>
                                            <h4 className="text-lg font-bold text-foreground mb-2">{addon.title}</h4>
                                            <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">{addon.desc}</p>
                                            <div className="pt-4 border-t"><span className="text-2xl font-bold text-foreground dark:text-white">{addon.price}</span></div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                         <TabsContent value="ecommerce">
                             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                               {Object.values(addons["E-Commerce & Payments"]).map(addon => (
                                    <Card key={addon.id} className="p-6 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                        <CardContent className='p-0'>
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300"><addon.icon className="text-primary group-hover:text-primary-foreground" size={24}/></div>
                                                <span className="text-xl font-bold text-foreground dark:text-white">{addon.price}</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-foreground mb-2">{addon.title}</h4>
                                            <p className="text-muted-foreground text-sm">{addon.desc}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="bundles">
                             <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                                {bundles.map(bundle => (
                                    <Card key={bundle.title} className={cn("p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1", bundle.popular && "border-primary ring-2 ring-primary scale-105")}>
                                        <CardContent className='p-0 h-full flex flex-col'>
                                             {bundle.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase">Best Value</div>}
                                            <h4 className="text-2xl font-bold text-foreground mb-1">{bundle.title}</h4>
                                            <p className="text-muted-foreground text-sm mb-6 flex-grow">{bundle.desc}</p>
                                            <div className="mb-6"><span className="text-4xl font-bold text-foreground dark:text-white">{bundle.price}</span><span className="text-muted-foreground line-through ml-2">{bundle.oldPrice}</span></div>
                                            <ul className="space-y-3 mb-8">
                                                {bundle.features.map(feat => <li key={feat} className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500 h-4 w-4"/><span>{feat}</span></li>)}
                                            </ul>
                                            <Button variant={bundle.popular ? 'default' : 'outline'} className="w-full mt-auto" onClick={scrollToApply}>Get Started</Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
            
            {/* Client Journey Section */}
            <section id="journey" className="py-24 bg-background relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Journey</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From application to launch in 5 simple steps.</p>
                    </div>

                     <div className="relative max-w-5xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>

                        {journeySteps.map((step, index) => (
                            <div key={index} className={`relative md:flex items-center mb-12 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                
                                {/* Content Card */}
                                <div className="md:w-1/2 w-full p-1">
                                    <div className={`${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                                        <Card className="group h-full text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-primary">
                                            <CardContent className="p-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary-foreground group-hover:text-primary transition-colors duration-300">
                                                        <step.icon className="h-6 w-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-headline text-lg font-semibold text-foreground group-hover:text-primary-foreground">{step.title}</h3>
                                                        <div className="mt-1 bg-secondary rounded-full inline-flex px-3 py-1 text-xs font-bold text-primary group-hover:bg-primary-foreground group-hover:text-primary transition-colors duration-300">
                                                            {step.meta}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-4 text-sm text-muted-foreground group-hover:text-primary-foreground/80">{step.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                {/* Spacer */}
                                <div className="md:w-1/2 hidden md:block"></div>

                                {/* Circle on timeline */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-background border-4 border-primary rounded-full hidden md:flex items-center justify-center text-primary font-bold z-10">
                                    {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Urgency Section */}
            <section className="py-20 bg-gradient-to-r from-red-600 to-orange-500 text-white">
                <div className="container text-center">
                     <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"><AlertTriangle className="text-yellow-300" size={28}/></div>
                        <h2 className="text-2xl md:text-3xl font-bold">Limited Availability</h2>
                    </div>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">We can only accept a limited number of free website projects each month to maintain quality.</p>
                     <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto mb-8 border border-white/20">
                        <p className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-4 text-left">Monthly Slots Available</p>
                        <div className="flex items-center gap-5">
                            <div className="flex-1 bg-black/20 rounded-full h-4 overflow-hidden shadow-inner"><div className="bg-gradient-to-r from-green-400 to-teal-400 h-full rounded-full" style={{width: `${(slots.total - slots.remaining) / slots.total * 100}%`}}></div></div>
                            <span className="text-white font-bold text-2xl font-mono">{slots.remaining}/{slots.total}</span>
                        </div>
                    </div>
                    <Button size="lg" variant="secondary" onClick={scrollToApply} className="animate-pulse"><MousePointerClick className="mr-2"/>Apply Before Slots Fill Up</Button>
                </div>
            </section>

             {/* Application Form Section */}
             <section id="apply" className="py-24 bg-background">
                <div className="container max-w-4xl">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Apply for Your Free Website</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">No credit card required. No obligations. Just fill out the form below.</p>
                    </div>
                    <Card>
                        <CardContent className="p-8 md:p-12">
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Step {currentStep} of {totalSteps}</span>
                                    <span className="text-xs font-bold text-primary">{["User Details", "Project Details", "Add-Ons", "Select Industry", "Review & Submit"][currentStep - 1]}</span>
                                </div>
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-primary transition-all duration-300" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
                                </div>
                            </div>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <div className={cn(currentStep !== 1 && "hidden")}>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <FormField control={form.control} name="fullName" render={({ field }) => (<FormItem><FormLabel>Full Name*</FormLabel><FormControl><Input placeholder="John Smith" {...field} /></FormControl><FormMessage /></FormItem>)}/>
                                            <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email Address*</FormLabel><FormControl><Input placeholder="john@company.com" {...field} /></FormControl><FormMessage /></FormItem>)}/>
                                            <FormField control={form.control} name="phone" render={({ field }) => (<FormItem><FormLabel>Phone Number*</FormLabel><FormControl><Input placeholder="+91 98765 43210" {...field} /></FormControl><FormMessage /></FormItem>)}/>
                                            <FormField control={form.control} name="businessName" render={({ field }) => (<FormItem><FormLabel>Business Name*</FormLabel><FormControl><Input placeholder="Your Business Name" {...field} /></FormControl><FormMessage /></FormItem>)}/>
                                        </div>
                                    </div>

                                    <div className={cn(currentStep !== 2 && "hidden")}>
                                         <FormField control={form.control} name="websiteType" render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel>What type of website do you need?*</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <SelectTrigger><SelectValue placeholder="Select a category..." /></SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="Basic Website">Basic Website</SelectItem>
                                                            <SelectItem value="E-Commerce">E-Commerce Starter</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}/>
                                        <FormField control={form.control} name="goals" render={({ field }) => (<FormItem className="mt-6"><FormLabel>Tell us about your business goals (optional)</FormLabel><FormControl><Textarea placeholder="e.g., I want to generate leads, showcase my portfolio..." {...field} /></FormControl><FormMessage /></FormItem>)}/>
                                    </div>
                                    
                                    <div className={cn(currentStep !== 3 && "hidden")}>
                                        <h3 className="text-lg font-bold text-foreground mb-4">Select Add-Ons & Enhancements</h3>
                                        <FormField control={form.control} name="addons" render={({ field }) => (
                                            <FormItem>
                                                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                                                    {Object.entries(addons).map(([category, items]) => (
                                                        <div key={category}>
                                                            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-3 sticky top-0 bg-card py-2 z-10">{category}</h4>
                                                            <div className="grid md:grid-cols-2 gap-3">
                                                                {items.map((item) => (
                                                                    <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 hover:bg-secondary transition">
                                                                        <FormControl><Checkbox checked={field.value?.includes(item.id)} onCheckedChange={(checked) => {return checked ? field.onChange([...(field.value || []), item.id]) : field.onChange(field.value?.filter((value) => value !== item.id))}}/></FormControl>
                                                                        <FormLabel className="font-normal w-full"><span className="block font-bold text-foreground">{item.title}</span><span className="text-xs text-muted-foreground">{item.desc}</span></FormLabel>
                                                                    </FormItem>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}/>
                                    </div>
                                    
                                    <div className={cn(currentStep !== 4 && "hidden")}>
                                        <FormField control={form.control} name="industry" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Industry/Niche*</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl><SelectTrigger><SelectValue placeholder="Select your industry..." /></SelectTrigger></FormControl>
                                                    <SelectContent>{industryOptions.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}</SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}/>
                                        {form.watch('industry') === 'Custom' && <FormField control={form.control} name="customIndustry" render={({ field }) => (<FormItem className="mt-4"><FormLabel>Please Specify*</FormLabel><FormControl><Input placeholder="Enter your industry" {...field} /></FormControl><FormMessage /></FormItem>)}/>}
                                    </div>

                                    <div className={cn(currentStep !== 5 && "hidden", "space-y-6")}>
                                         <h3 className="text-xl font-bold text-foreground">Review & Submit</h3>
                                         <Card className="bg-secondary p-6">
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div><p className="text-muted-foreground text-xs uppercase">Name</p><p className="font-semibold text-foreground">{form.watch('fullName') || '-'}</p></div>
                                                <div><p className="text-muted-foreground text-xs uppercase">Email</p><p className="font-semibold text-foreground">{form.watch('email') || '-'}</p></div>
                                                <div><p className="text-muted-foreground text-xs uppercase">Phone</p><p className="font-semibold text-foreground">{form.watch('phone') || '-'}</p></div>
                                                <div><p className="text-muted-foreground text-xs uppercase">Business</p><p className="font-semibold text-foreground">{form.watch('businessName') || '-'}</p></div>
                                                <div className="col-span-2 pt-4 mt-4 border-t"><p className="text-muted-foreground text-xs uppercase">Add-Ons</p><p className="font-semibold text-foreground">{form.watch('addons')?.join(', ') || 'None'}</p></div>
                                            </div>
                                         </Card>
                                        <FormField control={form.control} name="terms" render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange}/></FormControl><div className="space-y-1 leading-none"><FormLabel>I agree to the Terms of Service and understand I will be redirected to WhatsApp to complete my application.</FormLabel></div></FormItem>
                                        )}/>
                                    </div>
                                    
                                    <div className="flex items-center justify-between pt-6 border-t">
                                        <Button type="button" variant="outline" onClick={() => changeStep(-1)} className={cn(currentStep === 1 && "invisible")}>Back</Button>
                                        <Button type="button" onClick={() => changeStep(1)} className={cn(currentStep === totalSteps && "hidden")}>Next Step <ArrowRight className="ml-2 h-4 w-4"/></Button>
                                        <Button type="submit" className={cn(currentStep !== totalSteps && "hidden")}><WhatsAppIcon className="mr-2 h-5 w-5 fill-current"/>Submit via WhatsApp</Button>
                                    </div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
             </section>

             {/* FAQ Section */}
            <section className="py-24 bg-secondary">
                <div className="container max-w-3xl">
                    <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2></div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                             <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
            
            <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="text-green-500" size={48}/>
                            </div>
                            <DialogTitle className="text-2xl">Application Submitted!</DialogTitle>
                            <p className="text-muted-foreground mt-2">Thank you! We'll review your application and get back to you within 24 hours.</p>
                        </div>
                    </DialogHeader>
                    <div className="text-center mt-4">
                        <DialogClose asChild>
                            <Button>Got It!</Button>
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>

        </div>
    );
}
