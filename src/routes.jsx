import Layout from "@components/index";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import Projects from "@pages/Projects";
import Resume from "@pages/Resume";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

export default router;
