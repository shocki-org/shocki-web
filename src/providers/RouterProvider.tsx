import {
  RouterProvider as CustomRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import IndexPage from "../pages";

const router = createBrowserRouter([
  {
    element: <IndexPage />,
    path: "/",
  },
]);

export default function RouterProvider() {
  return <CustomRouterProvider router={router} />;
}
