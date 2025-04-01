import React from "react";
import { SidebarLayout } from "@/components/Layouts/SidebarLayout";
import { ProductGrid } from "@/components/ProductGrid";

export default function Page() {
  return (
    <SidebarLayout>
      <div className="p-6">
        {/* Your page content goes here */}
        <h1 className="text-2xl font-bold">Welcome to TheCurator</h1>
        <p className="mt-2 mb-6">
          Discover and explore curated products across various categories.
        </p>

        <ProductGrid />
      </div>
    </SidebarLayout>
  );
}
