import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | MyBestGuide',
  description: 'Read the terms and conditions for using MyBestGuide software development and digital transformation services.',
};

export default function TermsConditionsPage() {
  const lastUpdated = 'October 20, 2023';

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8 text-sm italic">Last Updated: {lastUpdated}</p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website of MyBestGuide (https://mybestguide.in), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Services Offered</h2>
            <p>
              MyBestGuide provides software development, e-commerce engineering, mobile application development, ERP/SaaS solutions, and technical support services. All services are subject to separate formal agreements and project-specific terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Use of the Website</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You agree to use the website only for lawful purposes.</li>
              <li>You must not use the website in any way that causes damage to the website or impairment of the availability or accessibility of the website.</li>
              <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise stated, MyBestGuide owns the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may view and/or print pages for your own personal use subject to restrictions set in these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Career and Partner Applications</h2>
            <p>
              Submitting an application through our career, freelancer, or partner portals does not guarantee an engagement or employment. MyBestGuide reserves the right to accept or reject applications at our sole discretion based on our internal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              MyBestGuide will not be liable for any direct, indirect, special, or consequential loss or damage arising under these terms or in connection with our website, whether arising in tort, contract, or otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="mt-4 p-6 bg-secondary rounded-lg border border-border">
              <p className="font-bold">MyBestGuide</p>
              <p>Email: <a href="mailto:contact@mybestguide.in" className="text-primary hover:underline">contact@mybestguide.in</a></p>
              <p>Location: Lucknow, UP, India</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link href="/" className="text-primary hover:underline inline-flex items-center gap-2">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
