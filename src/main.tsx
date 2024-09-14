import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterProvider from "./shared/providers/RouterProvider";
import FontProvider from "./shared/providers/FontProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FontProvider>
      <RouterProvider />
    </FontProvider>
  </StrictMode>
);
