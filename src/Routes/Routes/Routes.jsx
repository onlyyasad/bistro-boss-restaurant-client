import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import OurMenu from "../../Pages/OurMenu/OurMenu/OurMenu";
import OrderFood from "../../Pages/OrderFood/OrderFood/OrderFood";
import Login from "../../Pages/Login/Login/Login";
import Registration from "../../Pages/Login/Registration/Registration";
import Dashboard from "../../Layouts/Dashboard/Dashboard";
import MyCart from "../../Pages/MyCart/MyCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import AddItems from "../../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "../AdminRoute/AdminRoute";
import ManageItems from "../../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../../Pages/Dashboard/Payment/Payment";


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
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // User routes 
      {
        path: "mycart",
        element: <MyCart></MyCart>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      // Admin Routes: 
      {
        path: "allusers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "additems",
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: "manageitems",
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },

    ]
  }
]);

export default router;