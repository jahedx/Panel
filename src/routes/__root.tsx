import { Outlet, createRootRoute } from "@tanstack/react-router";
import { SidebarProvider } from "@/contexts/SidebarContext";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <SidebarProvider>
      <Outlet />
    </SidebarProvider>
  );
}
