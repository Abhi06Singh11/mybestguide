import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Consultation | MyBestGuide',
  description: 'Schedule a discovery call or consultation with the MyBestGuide team.',
};

export default function BookNowPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-16 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Book an Appointment</h1>
          <p className="text-xl mt-4 opacity-90 max-w-2xl mx-auto">
            Schedule a session with our experts to discuss your digital transformation journey.
          </p>
        </div>
      </section>

      <section className="flex-1 py-12 bg-background">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-2xl border bg-card">
            <iframe 
              src="https://mybestguidein.dayschedule.com" 
              width="100%" 
              height="700" 
              frameBorder="0" 
              style={{ border: 0, minHeight: '700px' }}
              title="Schedule an Appointment"
            ></iframe>
          </div>
          
          <div className="mt-8 text-center text-muted-foreground text-sm">
            <p>Can't find a suitable time? Contact us directly at <a href="mailto:info@mybestguide.com" className="text-primary hover:underline">info@mybestguide.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
