import { createFileRoute, ScrollRestoration } from "@tanstack/react-router";
import Sidebar from "./_layout/_sidebar/-components/Sidebar";
import { Outlet } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";

export const Route = createFileRoute("/about/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="bg-white w-full xl:w-[calc(100%-350px)]">
          <Outlet />
        </div>
      </div>
      <Toaster />
      <ScrollRestoration />
    </>
  );
}
