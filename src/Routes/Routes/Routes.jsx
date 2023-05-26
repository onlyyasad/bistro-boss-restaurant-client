import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import OurMenu from "../../Pages/OurMenu/OurMenu/OurMenu";
import OrderFood from "../../Pages/OrderFood/OrderFood/OrderFood";

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
        path: "menu",
        element: <OurMenu></OurMenu>
      },
      {
        path: "order/:category",
        element: <OrderFood></OrderFood>
      }
    ]
  },
]);

export default router;