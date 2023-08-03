import { createBrowserRouter } from "react-router-dom";
import { Layout, AuthLayout } from "../Layouts";
import { Inicio } from "../Pages/Home";
import { Login, Registro } from "../Pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Inicio /> }],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      {
        path: "/auth/registro",
        element: <Registro />,
      },
    ],
  },
]);

export default router;
