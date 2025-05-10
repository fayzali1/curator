"use client";

import React from "react";
import { LeftSidebar } from "@/components/Sidebar/LeftSidebar";
import { CategorySidebar } from "@/components/Sidebar/CategorySidebar";
import { usePathname } from "next/navigation";

interface SidebarLayoutProps {
  children: React.ReactNode;
  defaultSidebarOpen?: boolean;
}

export function SidebarLayout({
  children,
  defaultSidebarOpen = true,
}: SidebarLayoutProps) {
  const pathname = usePathname();

  // Extract active category from pathname
  const getActiveCategory = () => {
    if (pathname === "/") return "all";

    const match = pathname.match(/\/category\/([^\/]+)/);
    return match ? match[1] : "all";
  };

  const activeCategory = getActiveCategory();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="flex">
        <LeftSidebar />
        <CategorySidebar
          activeCategory={activeCategory}
          defaultOpen={defaultSidebarOpen}
        />
      </div>
      <main className="flex-1 overflow-auto w-full max-w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
