import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    // TODO: Load data from the server to have dynamic isAdmin based on data 
    // const isAdmin = false;
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>
                </div>
                <div className="drawer-side bg-yellow-600">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 uppercase text-black">
                        {/* <!-- Sidebar content here --> */}
                        <Link
                            to="/"
                            className="text-xl font-cinzel">
                            <p
                                className="font-bold text-2xl">
                                BISTRO BOSS
                            </p>
                            <p
                                className="font-bold text-sm tracking-[0.6em]">
                                RestauranT
                            </p>
                        </Link>
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink
                                        to="/dashboard/admin"
                                        className={({ isActive }) => isActive ? "text-white" : ""}>
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/additems"
                                        className={({ isActive }) => isActive ? "text-white" : ""}>
                                        Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/manageitems"
                                        className={({ isActive }) => isActive ? "text-white" : ""}>
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/bookings"
                                        className={({ isActive }) => isActive ? "text-white" : ""}>
                                        Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allusers" className={({ isActive }) => isActive ? "text-white" : ""}>
                                        All Users
                                    </NavLink>
                                </li>
                            </> : <>
                                <li>
                                    <NavLink
                                        to="/dashboard/"
                                        className={({ isActive }) => isActive ? "text-white" : ""}>
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment" className={({ isActive }) => isActive ? "text-white" : ""}>
                                        Payment
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/history"
                                        className={({ isActive }) => isActive ? "text-white" : ""}>
                                        Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/mycart"
                                        className={({ isActive }) => isActive ? "text-white" : ""}>
                                        My Cart
                                        <div
                                            className="badge badge-secondary">
                                            +{cart?.length}
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/review"
                                        className={({ isActive }) => isActive ? "text-white" : ""}>
                                        Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/booking"
                                        className={({ isActive }) => isActive ? "text-white" : ""}>
                                        My Booking
                                    </NavLink>
                                </li>
                            </>
                        }
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) => isActive ? "text-white" : ""}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/menu"
                                className={({ isActive }) => isActive ? "text-white" : ""}>
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/order"
                                className={({ isActive }) => isActive ? "text-white" : ""}>
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => isActive ? "text-white" : ""}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;