import React from 'react';

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Terms and Conditions</h1>
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert max-w-none text-muted-foreground space-y-4">
        <p>
          <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
        </p>
        <p>
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the [Your Website URL, e.g., amazonboost.ai] website and the AmazonBoost service (the "Service") operated by [Your Company Name] ("us", "we", or "our").
        </p>
        <p>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
        </p>
        <p>
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-foreground">Accounts</h2>
        <p>
          When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>
        <p>
          You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
        </p>
        {/* Add more sections as needed: Intellectual Property, Links To Other Web Sites, Termination, Limitation Of Liability, Governing Law, Changes, Contact Us, etc. */}

        <h2 className="text-xl md:text-2xl font-semibold text-foreground">Intellectual Property</h2>
        <p>
            The Service and its original content, features and functionality are and will remain the exclusive property of [Your Company Name] and its licensors.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-foreground">Changes</h2>
        <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-foreground">Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at: [Your Contact Email]
        </p>
        <p>
          <em>[This is a basic template. You should consult with a legal professional to tailor these Terms and Conditions to your specific service and legal requirements.]</em>
        </p>
      </div>
    </div>
  );
} 