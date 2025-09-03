import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./store.ts";

import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create new query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
