import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './assets/styles/main.css';
import './assets/styles/input.css';
import {
  DefaultError,
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { handleError } from './utils/HandleError';
import { InputMasterProvider } from 'input-master';
import { defaultInputProps } from './configs/input/default';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: DefaultError) => {
      handleError(error);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: DefaultError) => {
      handleError(error);
    },
  }),
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (error instanceof Error && error.message.includes('401')) {
          return false;
        }
        return failureCount < 3;
      },
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 30 * 60 * 1000, // 30 minutes
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <InputMasterProvider defaultProps={defaultInputProps}>
        <RouterProvider router={router} />
      </InputMasterProvider>
    </QueryClientProvider>
  );
}
