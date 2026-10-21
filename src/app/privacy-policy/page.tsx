import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | MyBestGuide',
  description: 'Learn how MyBestGuide collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 20, 2023';

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8 text-sm italic">Last Updated: {lastUpdated}</p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to MyBestGuide. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information when you visit our website (https://mybestguide.in) or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Personal Information Provided by Users</h3>
            <p>
              We collect information that you voluntarily provide to us when you fill out forms on our website, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Forms:</strong> Name, email address, phone number, and project details.</li>
              <li><strong>Career Applications:</strong> Name, email, location, skills, portfolio URLs, and resume metadata.</li>
              <li><strong>Partner Programs:</strong> Business details and contact information for BDE or Technical Support roles.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain information about your device, including your IP address, browser type, and how you interact with our pages. This is primarily for analytics and security purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our services.</li>
              <li>Process your inquiries and fulfill your requests for quotes or information.</li>
              <li>Evaluate career and partnership applications.</li>
              <li>Improve our website performance and user experience.</li>
              <li>Send professional communications related to your projects or inquiries.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Storage and Retention</h2>
            <p>
              Your form submissions are stored securely using Google Sheets API via protected service accounts. We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
            <p>
              We implement industry-standard security measures designed to protect your information from unauthorized access, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at the email provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-secondary rounded-lg border border-border">
              <p className="font-bold">MyBestGuide</p>
              <p>Lucknow, Uttar Pradesh, India</p>
              <p>Email: <a href="mailto:contact@mybestguide.in" className="text-primary hover:underline">contact@mybestguide.in</a></p>
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
