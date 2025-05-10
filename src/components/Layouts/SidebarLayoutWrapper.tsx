import { cookies } from "next/headers";
import { SidebarLayout } from "./SidebarLayout";

interface SidebarLayoutWrapperProps {
  children: React.ReactNode;
}

export function SidebarLayoutWrapper({ children }: SidebarLayoutWrapperProps) {
  // Read cookie on the server
  const cookieStore = cookies();
  const sidebarState = cookieStore.get("categorysidebar:state");
  const isOpen = sidebarState ? sidebarState.value === "true" : true; // Default to open if no cookie

  return <SidebarLayout defaultSidebarOpen={isOpen}>{children}</SidebarLayout>;
}
