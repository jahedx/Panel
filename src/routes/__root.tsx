import { SidebarProvider } from '@/contexts/SidebarContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Outlet, createRootRoute, redirect } from '@tanstack/react-router';
import { isAuthenticated } from '@/utils/auth';

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: ({ location }) => {
    const authenticated = isAuthenticated();
    const isAuthRoute = location.pathname.startsWith('/auth');

    // if (!authenticated && !isAuthRoute) {
    //   throw redirect({ to: "/auth/login" });
    // }

    if (authenticated && isAuthRoute) {
      throw redirect({ to: '/dashboard' });
    }

    // Redirect root path to dashboard if authenticated, otherwise to login
    if (location.pathname === '/') {
      throw redirect({ to: authenticated ? '/dashboard' : '/auth/login' });
    }
  },
});

function RootComponent() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Outlet />
      </SidebarProvider>
    </ThemeProvider>
  );
}
