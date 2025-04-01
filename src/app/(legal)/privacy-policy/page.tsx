import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Privacy Policy</h1>
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert max-w-none text-muted-foreground space-y-4">
        <p>
          <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
        </p>
        <p>
          Welcome to AmazonBoost! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Your Website URL, e.g., amazonboost.ai] and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-foreground">Collection of Your Information</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site includes:
        </p>
        <ul>
          <li>
            <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and demographic information, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
          </li>
          <li>
            <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
          </li>
          {/* Add more sections as needed: Use of Information, Disclosure, Security, Cookies, etc. */}
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-foreground">Use of Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>Improve the efficiency and operation of the Site.</li>
            {/* Add more uses */}
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-foreground">Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at: [Your Contact Email]
        </p>
        <p>
          <em>[This is a basic template. You should consult with a legal professional to ensure your Privacy Policy is comprehensive and compliant with relevant laws like GDPR, CCPA, etc.]</em>
        </p>
      </div>
    </div>
  );
} 