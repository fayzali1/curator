import React from "react";
import { LeftSidebar } from "@/components/Sidebar/LeftSidebar";
import { CategorySidebar } from "@/components/Sidebar/CategorySidebar";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <LeftSidebar />
      <CategorySidebar />
      <main className="flex-1 overflow-auto w-full max-w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
