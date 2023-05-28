import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../Pages/Shared/NavBar/NavBar";
import Footer from "../../Pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation()
    const noNavbarFooter = location.pathname === "/login" || location.pathname === "/registration";
    
    return (
        <div className="font-poppins">
            {noNavbarFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;