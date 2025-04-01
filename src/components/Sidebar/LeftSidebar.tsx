import React from "react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import {
  Search,
  Grid,
  Users,
  Bell,
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export function LeftSidebar() {
  return (
    <Sidebar
      collapsible="none"
      className="border-r w-16 flex flex-col justify-between py-4 bg-gray-50"
    >
      <SidebarContent>
        <div className="flex flex-col items-center gap-6">
          <button className="p-2 rounded-lg hover:bg-gray-200">
            <Search className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-2 rounded-lg bg-gray-200">
            <Grid className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-200">
            <Users className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-200">
            <Bell className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-200">
            <MessageSquare className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </SidebarContent>

      <div className="flex flex-col items-center gap-4">
        <button className="text-gray-500 hover:text-gray-700">
          <Facebook className="h-5 w-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <Instagram className="h-5 w-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <Twitter className="h-5 w-5" />
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-purple-200 flex items-center justify-center mt-2">
          <span className="text-purple-600 text-xl">👩</span>
        </div>
      </div>
    </Sidebar>
  );
}
