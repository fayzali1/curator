import React from "react";
import { SidebarLayout } from "@/components/Layouts/SidebarLayout";
import { ProductGrid } from "@/components/ProductGrid";

export default function Page() {
  return (
    <SidebarLayout>
      <div className="p-6 bg-gray-50">
        <ProductGrid />
      </div>
    </SidebarLayout>
  );
}
