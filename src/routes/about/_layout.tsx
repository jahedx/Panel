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
      {/* <RegistraionSubHeader /> */}
      <div className="flex bg-background min-h-screen">
        <Sidebar />
        <div
          className={`transition-all ease-in-out duration-1000 w-full ${sidebarStatus === "open" && "md:mr-[366px] md:w-[calc(100%-350px)]"}`}
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
