import React from "react";
import { SidebarLayout } from "@/components/Layouts/SidebarLayout";
import { ContactSection } from "@/components/Contact/ContactSection";

export default function ContactPage() {
  return (
    <SidebarLayout>
      <div className="p-6 h-full overflow-auto bg-gray-50">
        <ContactSection />
      </div>
    </SidebarLayout>
  );
}
