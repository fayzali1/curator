import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Search, Grid, Users, MessageSquare } from "lucide-react";
import Link from "next/link";
import { SearchModal } from "@/components/SearchModal";
import { ThemeToggle } from "@/components/ThemeToggle";

export function LeftSidebar() {
  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar collapsible="icon">
        <SidebarHeader className="flex justify-center">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Search">
                <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors flex items-center justify-center cursor-pointer">
                  <SearchModal>
                    <Search
                      size={24}
                      className="text-gray-500 dark:text-gray-400"
                    />
                  </SearchModal>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Home">
                    <Link
                      href="/"
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors flex items-center justify-center"
                    >
                      <Grid
                        size={24}
                        className="text-gray-500 dark:text-gray-400"
                      />
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="About">
                    <Link
                      href="/about"
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors flex items-center justify-center"
                    >
                      <Users
                        size={24}
                        className="text-gray-500 dark:text-gray-400"
                      />
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Contact">
                    <Link
                      href="/contact"
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors flex items-center justify-center"
                    >
                      <MessageSquare
                        size={24}
                        className="text-gray-500 dark:text-gray-400"
                      />
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu className="space-y-3">
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Toggle Theme">
                <ThemeToggle />
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Facebook">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-md border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-medium text-gray-400 dark:text-gray-500">
                    f
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="LinkedIn">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-md border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-medium text-gray-400 dark:text-gray-500">
                    in
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Twitter">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-md border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-medium text-gray-400 dark:text-gray-500">
                    𝕏
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Your Profile">
                <Link
                  href="/profile"
                  className="w-10 h-10 rounded-full overflow-hidden bg-purple-100 dark:bg-purple-900 flex items-center justify-center hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                >
                  <span role="img" aria-label="Profile" className="text-lg">
                    👨
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
