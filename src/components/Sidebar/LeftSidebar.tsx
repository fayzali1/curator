import React from "react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { Search, Grid, Users, MessageSquare } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function LeftSidebar() {
  return (
    <Sidebar
      collapsible="none"
      className="border border-gray-200 w-16 flex flex-col justify-between py-4 bg-white rounded-xl m-2"
    >
      <SidebarContent>
        <div className="flex flex-col items-center gap-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/search"
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <Search className="h-5 w-5 text-gray-500" />
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="bg-gray-100 border-none text-sm px-2 py-1 text-black"
              >
                <p>Search</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <Grid className="h-5 w-5 text-gray-500" />
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="bg-gray-100 border-none text-sm px-2 py-1 text-black"
              >
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/about"
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <Users className="h-5 w-5 text-gray-500" />
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="bg-gray-100 border-none text-sm px-2 py-1 text-black"
              >
                <p>About</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/contact"
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <MessageSquare className="h-5 w-5 text-gray-500" />
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="bg-gray-100 border-none text-sm px-2 py-1 text-black"
              >
                <p>Contact</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </SidebarContent>

      <div className="flex flex-col items-center gap-3 mb-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium text-gray-400">f</span>
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-gray-100 border-none text-sm px-2 py-1 text-black"
            >
              <p>Facebook</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium text-gray-400">in</span>
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-gray-100 border-none text-sm px-2 py-1 text-black"
            >
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium text-gray-400">𝕏</span>
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-gray-100 border-none text-sm px-2 py-1 text-black"
            >
              <p>Twitter</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/profile"
                className="w-10 h-10 rounded-full overflow-hidden bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition-colors"
              >
                <span role="img" aria-label="Profile" className="text-lg">
                  👨
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-gray-100 border-none text-sm px-2 py-1 text-black"
            >
              <p>Your Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Sidebar>
  );
}
