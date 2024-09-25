import LoginPage from "@/pages/Login/login";
import { QueryClient } from "@tanstack/react-query";
import {
  RouterProvider as CustomRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import PrivateRouter from "../routers/PrivateRouter";
import PrivacyPage from "@/pages/Privacy/privacy";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <LoginPage />,
    path: "/login",
  },
  {
    element: <PrivacyPage />,
    path: "/privacy",
  },
  {
    element: <PrivateRouter />,
    loader: PrivateRouter.loader(queryClient),
    children: [
      {
        element: <div>Login</div>,
        path: "/",
      },
    ],
  },
]);

export default function RouterProvider() {
  return <CustomRouterProvider router={router} />;
}
