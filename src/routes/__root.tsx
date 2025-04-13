import { SidebarProvider } from '@/contexts/SidebarContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Outlet, createRootRoute, redirect } from '@tanstack/react-router';
import { isAuthenticated } from '@/utils/auth';
import { Toaster } from 'react-hot-toast';

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: ({ location }) => {
    const authenticated = isAuthenticated();
    const isAuthRoute = location.pathname.startsWith('/auth');

    if (!authenticated && !isAuthRoute) {
      throw redirect({ to: '/auth/login' });
    }

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
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: 'var(--background)',
              color: 'var(--foreground)',
              border: '1px solid var(--border)',
            },
            success: {
              iconTheme: {
                primary: 'var(--color-success)',
                secondary: 'var(--background)',
              },
            },
            error: {
              iconTheme: {
                primary: 'var(--color-error)',
                secondary: 'var(--background)',
              },
            },
          }}
        />
      </SidebarProvider>
    </ThemeProvider>
  );
}
