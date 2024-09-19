import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterProvider from "./shared/providers/RouterProvider";
import FontProvider from "./shared/providers/FontProvider";
import QueryProvider from "./shared/providers/QueryProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <FontProvider>
        <RouterProvider />
      </FontProvider>
    </QueryProvider>
  </StrictMode>
);
