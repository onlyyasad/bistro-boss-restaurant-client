import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import OurMenu from "../../Pages/OurMenu/OurMenu/OurMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>
      }
    ]
  },
]);

export default router;