import { createRoot } from "react-dom/client";
import "./app/styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./app/provider/errorBoundary";
import ThemeProvider from "./app/provider/themesContex/ThemeProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </QueryClientProvider>
    </ThemeProvider>
  </BrowserRouter>
);
