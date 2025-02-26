import { SidebarProvider } from "@/contexts/SidebarContext";
import { Outlet, ScrollRestoration, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <SidebarProvider>
        <ScrollRestoration />
        <Outlet />
      </SidebarProvider>
    </>
  );
}
