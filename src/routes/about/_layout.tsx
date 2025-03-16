import { SidebarContext, SidebarContextProps } from "@/contexts/SidebarContext";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import Sidebar from "./_layout/-components/-sidebar/Sidebar";
import { useContext } from "react";

import Header from "./_layout/-components/-header/Header";

export const Route = createFileRoute("/about/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  const { sidebarStatus, isCollapsed } =
    useContext<SidebarContextProps>(SidebarContext);
  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <div
        className={`w-full transition-[width,margin] ease-in-out duration-1000 ${
          sidebarStatus === "open" &&
          (isCollapsed ? "md:mr-16" : "md:mr-sidebar-distance md:w-content")
        }`}
      >
        <div>
          <Header />
          <div className="p-2 h-full bg-white">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
