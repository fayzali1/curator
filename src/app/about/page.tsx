import React from "react";
import { SidebarLayout } from "@/components/Layouts/SidebarLayout";
import { AboutSection } from "@/components/About/AboutSection";

export default function AboutPage() {
  return (
    <SidebarLayout>
      <div className="p-6">
        <AboutSection />
      </div>
    </SidebarLayout>
  );
}
