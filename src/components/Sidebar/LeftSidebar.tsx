import React from "react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import {
  Search,
  Grid,
  Users,
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export function LeftSidebar() {
  return (
    <Sidebar
      collapsible="none"
      className="border-r w-16 flex flex-col justify-between py-4 bg-white"
    >
      <SidebarContent>
        <div className="flex flex-col items-center gap-6">
          <div className="p-2">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <div className="p-2">
            <Grid className="h-5 w-5 text-gray-500" />
          </div>
          <div className="p-2">
            <Users className="h-5 w-5 text-gray-500" />
          </div>
          <div className="p-2">
            <MessageSquare className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </SidebarContent>

      <div className="flex flex-col items-center gap-4 mb-4">
        <div className="h-6 w-6 rounded-md border border-gray-200 flex items-center justify-center">
          <Facebook className="h-3.5 w-3.5 text-gray-500" />
        </div>
        <div className="h-6 w-6 rounded-md border border-gray-200 flex items-center justify-center">
          <Instagram className="h-3.5 w-3.5 text-gray-500" />
        </div>
        <div className="h-6 w-6 rounded-md border border-gray-200 flex items-center justify-center">
          <Twitter className="h-3.5 w-3.5 text-gray-500" />
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-purple-100 flex items-center justify-center">
          <span className="text-purple-600 text-sm">👨</span>
        </div>
      </div>
    </Sidebar>
  );
}
