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
              background: 'var(--color-card)',
              color: 'var(--color-foreground)',
              border: '1px solid var(--border)',
              fontSize: '0.875rem',
              padding: '0.75rem',
              borderRadius: '0.375rem',
            },
            success: {
              style: {
                background: 'var(--color-card)',
                border: '1px solid var(--color-success)',
              },
              iconTheme: {
                primary: 'var(--color-success)',
                secondary: 'var(--color-card)',
              },
            },
            error: {
              style: {
                background: 'var(--color-card)',
                border: '1px solid var(--color-error)',
              },
              iconTheme: {
                primary: 'var(--color-error)',
                secondary: 'var(--color-card)',
              },
            },
          }}
        />
      </SidebarProvider>
    </ThemeProvider>
  );
}
