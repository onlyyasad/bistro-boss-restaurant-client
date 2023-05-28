import { Link } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <h1>Hello World!</h1>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>

            </div>
            <div className="drawer-side bg-yellow-600">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <Link to="/" className="text-xl font-cinzel"><p className="font-bold text-2xl">BISTRO BOSS</p><p className="font-bold text-sm tracking-[0.6em]">RestauranT</p></Link>
                    <li><a>Add Item</a></li>
                    <li><a>Manage Item</a></li>
                    <li><a>Manage Bookings</a></li>
                    <li><a>All Users</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;