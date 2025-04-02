import React from "react";
import { SidebarLayout } from "@/components/Layouts/SidebarLayout";
import { DetailsSection } from "@/components/Details/DetailsSection";

export default function DetailsPage() {
  return (
    <SidebarLayout>
      <div className="p-6 h-full overflow-auto bg-gray-50">
        <DetailsSection />
      </div>
    </SidebarLayout>
  );
}
