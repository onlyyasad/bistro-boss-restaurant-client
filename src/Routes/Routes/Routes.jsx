import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import OurMenu from "../../Pages/OurMenu/OurMenu/OurMenu";
import OrderFood from "../../Pages/OrderFood/OrderFood/OrderFood";
import Login from "../../Pages/Login/Login/Login";
import Registration from "../../Pages/Login/Registration/Registration";

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
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "registration",
        element: <Registration></Registration>
      }
    ]
  },
]);

export default router;