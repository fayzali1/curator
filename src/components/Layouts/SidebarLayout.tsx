import React from "react";
import { LeftSidebar } from "@/components/Sidebar/LeftSidebar";
import { CategorySidebar } from "@/components/Sidebar/CategorySidebar";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="flex h-screen">
      <LeftSidebar />
      <CategorySidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
