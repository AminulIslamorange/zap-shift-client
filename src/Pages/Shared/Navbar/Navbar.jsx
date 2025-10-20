import { Link, NavLink } from "react-router-dom";
import navbarImage from '../../../assets/arrow-up-right 1.svg';
import navbar1 from '../../../assets/navbar1.svg';
import ProFastLogo from "../ProFastLogo/ProFastLogo";


const Navbar = () => {
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>About Us</NavLink></li>
        <li><NavLink to='/'>Services</NavLink></li>
        <li><NavLink to='/sendPercel'>Send A Percel</NavLink></li>
        <li><NavLink to='/coverage'>Coverage</NavLink></li>
        <li><NavLink to='/'>About Us</NavLink></li>
        <li><NavLink to='/'>Pricing</NavLink></li>
        <li><NavLink to='/'>Be a Rider</NavLink></li>




    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
               
                    <a className="btn btn-ghost">
                        <ProFastLogo></ProFastLogo>
                    </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'><button className="btn  mr-4">Sign In</button></Link>
                <button className="btn bg-[#CAEB66] border-radius-[12px]">Be a rider</button>
                <img
                    src={navbarImage}
                    alt=""
                    style={{
                        borderRadius: '99px',
                        background: 'var(--Colors-Dark-black-12, #1F1F1F)'
                    }}
                />
            </div>
        </div>
    );
};

export default Navbar;