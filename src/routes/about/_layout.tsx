import { SidebarContext, SidebarContextProps } from "@/contexts/SidebarContext";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import Sidebar from "./_layout/-components/-sidebar/Sidebar";
import { useContext } from "react";

import Header from "./_layout/-components/-header/Header";

export const Route = createFileRoute("/about/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  const { sidebarStatus } = useContext<SidebarContextProps>(SidebarContext);
  return (
    <>
      <div className="flex bg-background min-h-screen">
        <Sidebar />
        <div
          className={`transition-all ease-in-out duration-1000 w-full px-2 ${sidebarStatus === "open" && "md:mr-sidebar-distance pr-0 md:w-content"}`}
        >
          <div>
            <Header />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
