import React from 'react';
import StickyHeader from '@/components/StickyHeader'; // Assumes components are in src/components
import Footer from '@/components/Footer'; // Assumes components are in src/components

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <StickyHeader />
      <main className="flex-grow">
        {children} {/* Page content (Privacy Policy or Terms) will be injected here */}
      </main>
      <Footer />
    </div>
  );
} 