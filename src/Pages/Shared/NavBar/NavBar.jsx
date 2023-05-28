import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";


const NavBar = () => {

    const { user, logOutUser } = useContext(AuthContext);
    const [cart] = useCart();
    const menuLi = <>
        <Link to="/" className="hover:text-yellow-400 duration-300">Home</Link>
        <Link to="" className="hover:text-yellow-400 duration-300">Contact Us</Link>
        <Link to="" className="hover:text-yellow-400 duration-300">Dashboard</Link>
        <Link to="/menu" className="hover:text-yellow-400 duration-300">Our Menu</Link>
        <Link to="/order/salads" className="hover:text-yellow-400 duration-300">Order Food</Link>
        <Link to="/dashboard">
            <button className="btn gap-2">
                <FaShoppingCart />
                <div className="badge badge-secondary">+{cart?.length}</div>
            </button>
        </Link>

    </>
    return (
        <div className="bg-gray-800 fixed z-10 w-full bg-opacity-30">
            <div className="navbar container mx-auto text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className="menu menu-compact gap-4 uppercase font-poppins font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuLi}
                        </div>
                    </div>
                    <Link to="/" className="text-xl font-cinzel"><p className="font-bold text-2xl">BISTRO BOSS</p><p className="font-bold text-sm tracking-[0.6em]">RestauranT</p></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal items-center gap-4 uppercase font-poppins font-semibold px-1">
                        {menuLi}
                    </div>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="flex items-center gap-4">
                            <img className=" w-12 rounded-full" src={user.photoURL} alt="user" title={user.displayName} />
                            <button onClick={() => logOutUser()} className="btn">Logout</button>
                        </div> :
                        <>
                            <Link to="/login" className="btn">Login</Link>
                        </>}

                </div>
            </div>
        </div>
    );
};

export default NavBar;