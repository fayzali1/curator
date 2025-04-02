import React from "react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Mail } from "lucide-react";

export function CategorySidebar() {
  return (
    <Sidebar className="w-64 flex flex-col border border-gray-200 bg-white rounded-xl m-2 mr-0">
      <SidebarContent className="p-4">
        <div>
          <div className="text-xl font-semibold mb-1">
            <span className="text-black">the</span>
            <span className="text-gray-500">curator</span>
            <span className="text-black">.</span>
          </div>
          <div className="text-gray-400 text-sm">Categories</div>
        </div>

        <ScrollArea className="h-[calc(100vh-200px)] mt-3 pr-3">
          <div className="space-y-0.5">
            <CategoryItem
              icon={<CategoryIcon type="package" />}
              label="All"
              active
            />
            <CategoryItem icon={<CategoryIcon type="book" />} label="AI" />
            <CategoryItem
              icon={<CategoryIcon type="building" />}
              label="Administration"
            />
            <CategoryItem
              icon={<CategoryIcon type="chart" />}
              label="Analytics"
            />
            <CategoryItem icon={<CategoryIcon type="api" />} label="APIs" />
            <CategoryItem icon={<CategoryIcon type="bug" />} label="Bug Hunt" />
            <CategoryItem
              icon={<CategoryIcon type="briefcase" />}
              label="Business"
            />
            <CategoryItem icon={<CategoryIcon type="cms" />} label="CMS" />
            <CategoryItem
              icon={<CategoryIcon type="education" />}
              label="Education"
            />
            <CategoryItem
              icon={<CategoryIcon type="code" />}
              label="Developers"
            />
            <CategoryItem
              icon={<CategoryIcon type="finance" />}
              label="Finance"
            />
            <CategoryItem
              icon={<CategoryIcon type="truck" />}
              label="Logistic"
            />
            <CategoryItem icon={<CategoryIcon type="news" />} label="News" />
            <CategoryItem
              icon={<CategoryIcon type="payment" />}
              label="Payments"
            />
            <CategoryItem
              icon={<CategoryIcon type="privacy" />}
              label="Privacy"
            />
          </div>
        </ScrollArea>

        <div className="space-y-3 mt-4 pb-4">
          <Button className="w-full bg-black text-white hover:bg-gray-800 h-11 rounded-full flex items-center justify-center gap-2">
            <Plus className="h-4 w-4" /> Submit Your Product
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white border border-gray-200 text-gray-600 h-11 rounded-full flex items-center justify-center gap-2"
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
      <div className="text-gray-400">{icon}</div>
      <span className={`text-sm ${active ? "text-gray-900" : "text-gray-500"}`}>
        {label}
      </span>
    </div>
  );
}

function CategoryIcon({ type }: { type: string }) {
  // Simple SVG icons that match the image
  switch (type) {
    case "package":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "book":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 19.5V4.5C4 3.67157 4.67157 3 5.5 3H18.5C19.3284 3 20 3.67157 20 4.5V19.5C20 20.3284 19.3284 21 18.5 21H5.5C4.67157 21 4 20.3284 4 19.5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M7 7H17" stroke="currentColor" strokeWidth="2" />
          <path d="M7 11H17" stroke="currentColor" strokeWidth="2" />
          <path d="M7 15H13" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "building":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5"
            y="3"
            width="14"
            height="18"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M8 7H16" stroke="currentColor" strokeWidth="2" />
          <path d="M8 11H16" stroke="currentColor" strokeWidth="2" />
          <path d="M8 15H16" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "chart":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 20V10M12 20V4M18 20V14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "api":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "bug":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
          <circle cx="8" cy="10" r="1" fill="currentColor" />
          <circle cx="16" cy="10" r="1" fill="currentColor" />
          <path
            d="M9 15C9.5 16 10.5 17 12 17C13.5 17 14.5 16 15 15"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "briefcase":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="7"
            width="18"
            height="13"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "cms":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M4 10H20" stroke="currentColor" strokeWidth="2" />
          <path d="M9 16H15" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "education":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L3 8.5L12 13L21 8.5L12 4Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M7 10.5V15.5" stroke="currentColor" strokeWidth="2" />
          <path d="M17 10.5V15.5" stroke="currentColor" strokeWidth="2" />
          <path
            d="M7 16C7 18.2091 9.23858 20 12 20C14.7614 20 17 18.2091 17 16"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "code":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 21L15 3" stroke="currentColor" strokeWidth="2" />
          <path d="M4 8L1 12L4 16" stroke="currentColor" strokeWidth="2" />
          <path d="M20 8L23 12L20 16" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "finance":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="6"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M8 14H16" stroke="currentColor" strokeWidth="2" />
          <path d="M8 10H12" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="3" r="2" fill="currentColor" />
        </svg>
      );
    case "truck":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 16V6C16 4.89543 15.1046 4 14 4H3C1.89543 4 1 4.89543 1 6V16"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M16 8H19L23 12V16" stroke="currentColor" strokeWidth="2" />
          <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="2" />
          <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "news":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M8 8H16" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" />
          <path d="M8 16H12" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "payment":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
          <circle cx="9" cy="15" r="1" fill="currentColor" />
        </svg>
      );
    case "privacy":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 10C4 10 8 7 12 7C16 7 20 10 20 10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M18 14C18 16.2091 15.3137 18 12 18C8.68629 18 6 16.2091 6 14"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    default:
      return <div className="w-4 h-4"></div>;
  }
}
