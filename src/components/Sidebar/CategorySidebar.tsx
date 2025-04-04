"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import {
  Plus,
  Mail,
  ArrowLeft,
  Package,
  BookOpen,
  Building,
  BarChart,
  ServerCog,
  Bug,
  Briefcase,
  FileText,
  GraduationCap,
  Code,
  DollarSign,
  Truck,
  Newspaper,
  CreditCard,
  Shield,
  KeyRound,
  ShoppingBag,
  Globe,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Define the categories data structure with proper slugs
const categories = [
  { icon: Package, label: "All", slug: "all" },
  { icon: BookOpen, label: "AI", slug: "ai" },
  { icon: Building, label: "Administration", slug: "administration" },
  { icon: BarChart, label: "Analytics", slug: "analytics" },
  { icon: ServerCog, label: "APIs", slug: "apis" },
  { icon: Bug, label: "Bug Hunt", slug: "bug-hunt" },
  { icon: Briefcase, label: "Business", slug: "business" },
  { icon: FileText, label: "CMS", slug: "cms" },
  { icon: GraduationCap, label: "Education", slug: "education" },
  { icon: Code, label: "Developers", slug: "developers" },
  { icon: DollarSign, label: "Finance", slug: "finance" },
  { icon: Truck, label: "Logistic", slug: "logistic" },
  { icon: Newspaper, label: "News", slug: "news" },
  { icon: CreditCard, label: "Payments", slug: "payments" },
  { icon: Shield, label: "Privacy", slug: "privacy" },
  { icon: KeyRound, label: "Security", slug: "security" },
  { icon: ShoppingBag, label: "E-commerce", slug: "e-commerce" },
  { icon: Globe, label: "International", slug: "international" },
];

interface CategorySidebarProps {
  activeCategory?: string;
  defaultOpen?: boolean;
}

export function CategorySidebar({
  activeCategory = "all",
  defaultOpen = true,
}: CategorySidebarProps) {
  const pathname = usePathname();

  // Check if a category is active
  const isActive = (slug: string) => {
    if (activeCategory) {
      return activeCategory === slug;
    }

    // For homepage, "All" should be active
    if (pathname === "/") {
      return slug === "all";
    }

    return pathname.includes(`/category/${slug}`);
  };

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold group-data-[collapsible=icon]:hidden">
              <span className="text-black">the</span>
              <span className="text-gray-500">curator</span>
              <span className="text-black">.</span>
            </div>
            <div className="text-xl font-semibold hidden group-data-[collapsible=icon]:block">
              <span className="text-black">t</span>
              <span className="text-gray-500">c.</span>
            </div>
            <SidebarTrigger className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white hover:bg-black/90">
              <ArrowLeft size={14} />
            </SidebarTrigger>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-400 text-sm px-4 pt-2">
              Categories
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {categories.map((category) => (
                  <SidebarMenuItem key={category.slug}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={
                          category.slug === "all"
                            ? "/"
                            : `/category/${category.slug}`
                        }
                        className={`flex items-center gap-3 px-4 py-2 rounded-md ${
                          isActive(category.slug)
                            ? "bg-gray-100 hover:bg-gray-100"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <category.icon size={24} className="text-gray-400" />
                        <span
                          className={`text-sm ${
                            isActive(category.slug)
                              ? "text-gray-900"
                              : "text-gray-500"
                          }`}
                        >
                          {category.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu className="space-y-3">
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a
                  href="#submit"
                  className="w-full bg-black text-white hover:bg-gray-800 !rounded-full"
                >
                  <Plus size={24} />
                  <span>Submit Your Product</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a
                  href="#contact"
                  className="w-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 !rounded-full "
                >
                  <Mail size={24} />
                  <span>Contact With Us</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
