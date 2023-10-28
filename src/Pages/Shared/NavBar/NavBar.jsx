import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg"

const NavBar = () => {
    const navlinks = <>
        <li className="text-[#FF3811] hover:bg-[#FF3811] hover:rounded-lg">
            <NavLink className="hover:text-white font-semibold" to="/"
                style={({ isActive, isPending }) => {
                    return {
                        backgroundColor: isActive ? "#FF3811" : "",
                        color: isPending ? "#FF3811" : "",
                        
                    };
                }}
            >
                Home</NavLink>
        </li>
        <li className="text-[#FF3811] hover:bg-[#FF3811] hover:rounded-lg">
            <NavLink className="hover:text-white font-semibold" to="/about">About</NavLink>
        </li>
        <li className="text-[#FF3811] hover:bg-[#FF3811] hover:rounded-lg">
            <NavLink className="hover:text-white font-semibold" to="/services">Services</NavLink>
        </li>
        <li className="text-[#FF3811] hover:bg-[#FF3811] hover:rounded-lg">
            <NavLink className="hover:text-white font-semibold" to="/blog">Blog</NavLink>
        </li>
        <li className="text-[#FF3811] hover:bg-[#FF3811] hover:rounded-lg">
            <NavLink className="hover:text-white font-semibold" to="/contact">Contact</NavLink>
        </li>
    </>

    return (
        <div className="navbar h-28 mb-4 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline hover:text-[#FF3811] hover:bg-transparent hover:border-[#FF3811] border-2 hover:border-2 bg-[#FF3811] text-white">Appointment</a>
            </div>
        </div>
    );
};

export default NavBar;