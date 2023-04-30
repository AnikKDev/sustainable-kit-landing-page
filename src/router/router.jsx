import { createBrowserRouter } from "react-router-dom";
import Signin from "../Pages/Authentication/Signin";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Homepage from "../Pages/Homepage/Homepage";
import Main from "../Pages/Main";
import MicrobiomeReport from "../test/pages/Report/MicrobiomeReport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/mb",
        element: <MicrobiomeReport />,
      },
    ],
  },
]);

export default router;
