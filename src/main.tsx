import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./assets/styles/main.css";
import "./assets/styles/input.css";
import {
  DefaultError,
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { handleError } from "./utils/HandleError";

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
      retry: 0, // تعداد دفعات تلاش مجدد
      refetchOnWindowFocus: false, // غیرفعال کردن درخواست در هنگام فوکوس
      refetchOnReconnect: false, // جلوگیری از درخواست دوباره هنگام اتصال مجدد
    },
  },
});

const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  );
}
