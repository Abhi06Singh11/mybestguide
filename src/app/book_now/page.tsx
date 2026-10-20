'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { QrCode, Loader2, Calendar, Phone, Mail } from 'lucide-react';

export default function BookNowPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const bookingUrl = "https://mybestguidein.dayschedule.com";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(bookingUrl)}&color=1e293b`;

  const handleQRClick = () => {
    setIsGenerating(true);
    setShowQR(false);
    
    // Simulate dynamic generation effect
    setTimeout(() => {
      setIsGenerating(false);
      setShowQR(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/20 opacity-50"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Book an Appointment</h1>
          <p className="text-xl mt-4 opacity-90 max-w-2xl mx-auto font-medium">
            Schedule a session with our experts to discuss your digital transformation journey.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="font-bold shadow-lg hover:shadow-xl transition-all"
                  onClick={handleQRClick}
                >
                  <QrCode className="mr-2 h-5 w-5" />
                  Scan QR to Schedule
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-white border-2 border-primary/20">
                <DialogHeader>
                  <DialogTitle className="text-center text-primary font-bold text-xl uppercase tracking-wider">
                    MyBest Guide
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center py-8">
                  {isGenerating ? (
                    <div className="flex flex-col items-center space-y-4 animate-pulse">
                      <Loader2 className="h-16 w-16 text-primary animate-spin" />
                      <p className="text-muted-foreground font-medium">Generating Secure QR Code...</p>
                    </div>
                  ) : showQR ? (
                    <div className="flex flex-col items-center space-y-6 animate-in fade-in zoom-in duration-500">
                      <div className="p-4 bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] border-8 border-primary/5">
                        <img 
                          src={qrCodeUrl} 
                          alt="Booking QR Code" 
                          width={250} 
                          height={250}
                          className="rounded-lg"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-slate-800 font-bold text-lg">Scan to book an appointment</p>
                        <p className="text-muted-foreground text-sm mt-1">Use your phone camera to scan</p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </DialogContent>
            </Dialog>

            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent text-white border-white/30 hover:bg-white/10"
              onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Online Below
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Calendar Section */}
      <section className="flex-1 py-16 bg-secondary/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-card ring-1 ring-slate-200">
            <iframe 
              src={bookingUrl}
              width="100%" 
              height="650" 
              frameBorder="0" 
              style={{ border: 0, minHeight: '650px' }}
              title="Schedule an Appointment"
              className="w-full"
            ></iframe>
          </div>
          
          <div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-card rounded-xl border border-border/50 shadow-sm">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground">Need Assistance?</h3>
              <p className="text-sm text-muted-foreground mt-2">Call us directly at <br /><span className="text-primary font-semibold">+91 80054 14588</span></p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border/50 shadow-sm">
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground">Custom Request?</h3>
              <p className="text-sm text-muted-foreground mt-2">Drop us an email at <br /><a href="mailto:info@mybestguide.com" className="text-primary font-semibold hover:underline">info@mybestguide.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
