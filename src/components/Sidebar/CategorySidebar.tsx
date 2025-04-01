import React from "react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Package,
  Book,
  Building2,
  BarChart2,
  Code,
  Bug,
  Briefcase,
  FileText,
  GraduationCap,
  Code2,
  DollarSign,
  Truck,
  Newspaper,
  CreditCard,
  Lock,
  Plus,
  Mail,
} from "lucide-react";

export function CategorySidebar() {
  return (
    <Sidebar className="w-72 flex flex-col border-r bg-white">
      <SidebarContent className="p-4">
        <div>
          <div className="text-xl font-bold mb-2">
            <span className="text-black">the</span>
            <span className="text-black">curator</span>
            <span className="text-black">.</span>
          </div>
          <div className="text-gray-400 text-sm">Categories</div>
        </div>

        <ScrollArea className="h-[calc(100vh-200px)] mt-3">
          <div className="space-y-0.5">
            <CategoryItem
              icon={<Package className="h-4 w-4" />}
              label="All"
              active
            />
            <CategoryItem icon={<Book className="h-4 w-4" />} label="AI" />
            <CategoryItem
              icon={<Building2 className="h-4 w-4" />}
              label="Administration"
            />
            <CategoryItem
              icon={<BarChart2 className="h-4 w-4" />}
              label="Analytics"
            />
            <CategoryItem icon={<Code className="h-4 w-4" />} label="APIs" />
            <CategoryItem icon={<Bug className="h-4 w-4" />} label="Bug Hunt" />
            <CategoryItem
              icon={<Briefcase className="h-4 w-4" />}
              label="Business"
            />
            <CategoryItem icon={<FileText className="h-4 w-4" />} label="CMS" />
            <CategoryItem
              icon={<GraduationCap className="h-4 w-4" />}
              label="Education"
            />
            <CategoryItem
              icon={<Code2 className="h-4 w-4" />}
              label="Developers"
            />
            <CategoryItem
              icon={<DollarSign className="h-4 w-4" />}
              label="Finance"
            />
            <CategoryItem
              icon={<Truck className="h-4 w-4" />}
              label="Logistic"
            />
            <CategoryItem
              icon={<Newspaper className="h-4 w-4" />}
              label="News"
            />
            <CategoryItem
              icon={<CreditCard className="h-4 w-4" />}
              label="Payments"
            />
            <CategoryItem icon={<Lock className="h-4 w-4" />} label="Privacy" />
          </div>
        </ScrollArea>

        <div className="space-y-2 mt-4 pb-4">
          <Button className="w-full bg-black text-white hover:bg-gray-800 h-11 rounded-md flex items-center justify-center gap-2.5">
            <Plus className="h-4 w-4" /> Submit Your Product
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white border border-gray-200 text-gray-600 h-11 rounded-md flex items-center justify-center gap-2.5"
          >
            <Mail className="h-4 w-4" /> Contact With Us
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

interface CategoryItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function CategoryItem({ icon, label, active }: CategoryItemProps) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer ${
        active ? "bg-gray-100" : "hover:bg-gray-50"
      }`}
    >
      <div className={`text-gray-500 ${active ? "text-gray-800" : ""}`}>
        {icon}
      </div>
      <span className={`text-sm ${active ? "font-medium" : "text-gray-500"}`}>
        {label}
      </span>
    </div>
  );
}
