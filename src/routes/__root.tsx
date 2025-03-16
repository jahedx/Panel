import { SidebarProvider } from "@/contexts/SidebarContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  redirect,
} from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: ({ location }) => {
    // Redirect root path to /about
    if (location.pathname === "/") {
      throw redirect({ to: "/about" });
    }
  },
});

function RootComponent() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <ScrollRestoration />
        <Outlet />
      </SidebarProvider>
    </ThemeProvider>
  );
}
