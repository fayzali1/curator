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

// Define the categories data structure
const categories = [
  { icon: Package, label: "All", active: true, href: "#all" },
  { icon: BookOpen, label: "AI", active: false, href: "#ai" },
  {
    icon: Building,
    label: "Administration",
    active: false,
    href: "#administration",
  },
  { icon: BarChart, label: "Analytics", active: false, href: "#analytics" },
  { icon: ServerCog, label: "APIs", active: false, href: "#apis" },
  { icon: Bug, label: "Bug Hunt", active: false, href: "#bug-hunt" },
  { icon: Briefcase, label: "Business", active: false, href: "#business" },
  { icon: FileText, label: "CMS", active: false, href: "#cms" },
  {
    icon: GraduationCap,
    label: "Education",
    active: false,
    href: "#education",
  },
  { icon: Code, label: "Developers", active: false, href: "#developers" },
  { icon: DollarSign, label: "Finance", active: false, href: "#finance" },
  { icon: Truck, label: "Logistic", active: false, href: "#logistic" },
  { icon: Newspaper, label: "News", active: false, href: "#news" },
  { icon: CreditCard, label: "Payments", active: false, href: "#payments" },
  { icon: Shield, label: "Privacy", active: false, href: "#privacy" },
  { icon: KeyRound, label: "Security", active: false, href: "#security" },
  {
    icon: ShoppingBag,
    label: "E-commerce",
    active: false,
    href: "#e-commerce",
  },
  {
    icon: Globe,
    label: "International",
    active: false,
    href: "#international",
  },
];

export function CategorySidebar() {
  return (
    <SidebarProvider defaultOpen={true}>
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
            <SidebarTrigger className="flex items-center justify-center w-4 h-4 rounded-full bg-black text-white hover:bg-black/90" />
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
                  <SidebarMenuItem key={category.label}>
                    <SidebarMenuButton asChild>
                      <a
                        href={category.href}
                        className={`flex items-center gap-3 rounded-md ${
                          category.active
                            ? "bg-gray-100 hover:bg-gray-100"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <category.icon size={24} />

                        <span
                          className={`text-sm  ${
                            category.active ? "text-gray-900" : "text-gray-500"
                          }`}
                        >
                          {category.label}
                        </span>
                      </a>
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
                  className="w-full bg-black text-white hover:bg-gray-800 !rounded-full "
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
