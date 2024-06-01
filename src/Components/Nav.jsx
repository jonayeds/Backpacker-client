import { GoDotFill } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const navigation = <>
    <NavLink to={'/'} className={({isActive})=> isActive? 'text-[#347d87] hover:scale-110 duration-200 font-semibold': 'hover:scale-110 duration-200'}><li><a>Home</a></li></NavLink>
    <NavLink to={'/community'}  className={({isActive})=> isActive? 'text-[#347d87] hover:scale-110 duration-200 font-semibold': 'hover:scale-110 duration-200'}><li><a>Community</a></li></NavLink>
    <NavLink to={'/blogs'}  className={({isActive})=> isActive? 'text-[#347d87] hover:scale-110 duration-200 font-semibold': 'hover:scale-110 duration-200'}><li><a>Blogs</a></li></NavLink>
    <NavLink to={'/about'}  className={({isActive})=> isActive? 'text-[#347d87] hover:scale-110 duration-200 font-semibold': 'hover:scale-110 duration-200'}><li><a>About Us</a></li></NavLink>
    <NavLink to={'/contact'}  className={({isActive})=> isActive? 'text-[#347d87] hover:scale-110 duration-200 font-semibold': 'hover:scale-110 duration-200'}><li><a>Contact Us</a></li></NavLink>
      
    </>
    return (
        <div className="navbar bg-base-100 mx-auto w-full container">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        navigation
       }
      </ul>
    </div>
    <Link to={'/'} className="flex items-end logo text-3xl text-[#cbb164]">BackPacker<span className="text-[#72acb4] text-xl flex justify-end"> <GoDotFill className="text-lg " /></span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navigation
      }
    </ul>
  </div>
  <div className="navbar-end">
  <Link  to={'/login'} href="#_" className="relative px-6 py-3 font-bold text-white group">
<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#cbb164] group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span className="absolute inset-0 w-full h-full border-4 border-gray-400"></span>
<span className="relative">Log in</span>
</Link>
  </div>
</div>
    );
};

export default Nav;