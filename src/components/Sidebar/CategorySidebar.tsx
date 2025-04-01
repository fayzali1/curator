import React from "react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ShoppingBag,
  Book,
  Building2,
  BarChart2,
  Code,
  Bug,
  Briefcase,
  FileText,
  GraduationCap,
  Code2,
  LandPlot,
  Truck,
  Newspaper,
  CreditCard,
  Lock,
  Plus,
  Mail,
} from "lucide-react";

export function CategorySidebar() {
  return (
    <Sidebar className="w-72 flex flex-col border-r">
      <SidebarContent className="p-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <span className="text-black">the</span>
          <span className="text-black">curator</span>
          <span className="text-black">.</span>
        </div>
        <button className="rounded-full p-1.5 bg-gray-100">
          <span className="sr-only">Toggle theme</span>
          <div className="h-5 w-5 rounded-full bg-gray-800"></div>
        </button>
      </SidebarContent>

      <div className="flex-1 px-4">
        <h3 className="text-gray-400 text-sm font-medium mb-2">Categories</h3>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal"
            >
              <ShoppingBag className="h-4 w-4" /> All
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal text-gray-500"
            >
              <Book className="h-4 w-4" /> AI
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal text-gray-500"
            >
              <Building2 className="h-4 w-4" /> Administration
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal text-gray-500"
            >
              <BarChart2 className="h-4 w-4" /> Analytics
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal text-gray-500"
            >
              <Code className="h-4 w-4" /> APIs
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal text-gray-500"
            >
              <Bug className="h-4 w-4" /> Bug Hunt
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal text-gray-500"
            >
              <Briefcase className="h-4 w-4" /> Business
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal text-gray-500"
            >
              <FileText className="h-4 w-4" /> CMS
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal text-gray-500"
            >
              <GraduationCap className="h-4 w-4" /> Education
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal text-gray-500"
            >
              <Code2 className="h-4 w-4" /> Developers
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal text-gray-500"
            >
              <LandPlot className="h-4 w-4" /> Finance
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal text-gray-500"
            >
              <Truck className="h-4 w-4" /> Logistic
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal text-gray-500"
            >
              <Newspaper className="h-4 w-4" /> News
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal text-gray-500"
            >
              <CreditCard className="h-4 w-4" /> Payments
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-normal text-gray-500"
            >
              <Lock className="h-4 w-4" /> Privacy
            </Button>
          </div>
        </ScrollArea>

        <div className="space-y-2 mt-4 pb-4">
          <Button className="w-full bg-black text-white hover:bg-gray-800 flex items-center gap-2">
            <Plus className="h-4 w-4" /> Submit Your Product
          </Button>
          <Button
            variant="outline"
            className="w-full border-gray-300 text-gray-600 flex items-center gap-2"
          >
            <Mail className="h-4 w-4" /> Contact With Us
          </Button>
        </div>
      </div>
    </Sidebar>
  );
}
