import { BiBook, BiMenu } from "react-icons/bi";
import useAuth from "../customHooks/useAuth";
import { BsHeartFill, BsPerson } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

const Dashboard = () => {
  const { auth } = useAuth();
  const user = auth.currentUser;
  const [role,  setRole] = useState('')
  useEffect(()=>{
    fetch(`http://localhost:5000/users/${user?.email}`)
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        setRole(data.role)
        
    })
  },[user])
  console.log(role)
  return (
    <div className="flex  flex-col lg:flex-row">
      <div>
      <div className="drawer lg:drawer-open z-50">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  ">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="text-3xl drawer-button lg:hidden mt-6 ml-6 "><BiMenu/></label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu w-80 min-h-full bg-base-200 text-base-content p-0 ">
      {/* Sidebar content here */}
      <div className="h-full p-3 space-y-2 rou  bg-[#CCD6D5] min-h-screen w-full">
          <div className="flex items-center p-2 space-x-4">
            <img
              src={user.photoURL}
              alt=""
              className="w-12 h-12 rounded-full dark:bg-gray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.displayName}</h2>
              <span className="flex items-center space-x-1">
                
                  <NavLink to={'/dashboard/myProfile'}
                  rel="noopener noreferrer"
                  href="#"
                  className={({isActive})=> isActive? 'text-[#23575C] duration-200 font-semibold text-sm hover:underline': 'text-sm hover:underline'}
                >
                  My profile
                </NavLink>
                
                
              </span>
            </div>
          </div>
          <div className="divide-y dark:divide-gray-300">
           {
            (role === 'tourist') &&  <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li>
              <NavLink to={'/'} className={({isActive})=> isActive? 'text-[#23575C] duration-200 font-semibold flex items-center p-2 space-x-3 rounded-md': 'flex items-center p-2 space-x-3 rounded-md'}
              >
                <BiBook className="text-xl" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard/bookings'} className={({isActive})=> isActive? 'text-[#23575C] duration-200 font-semibold flex items-center p-2 space-x-3 rounded-md': 'flex items-center p-2 space-x-3 rounded-md'}
              >
                <BiBook className="text-xl" />
                <span>My Bookings</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard/wishlist'}
                
                className={({isActive})=> isActive? 'text-[#23575C] duration-200 font-semibold flex items-center p-2 space-x-3 rounded-md': 'flex items-center p-2 space-x-3 rounded-md'}
              >
                <BsHeartFill className="text-xl" />
                <span>My Wishlist</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard/request'}
                className={({isActive})=> isActive? 'text-[#23575C] duration-200 font-semibold flex items-center p-2 space-x-3 rounded-md': 'flex items-center p-2 space-x-3 rounded-md'}
              >
                <BsPerson className="text-xl" />
                <span>Request to Admin</span>
              </NavLink>
            </li>
          </ul>
           }
           {
             (role === 'guide') &&  <ul className="pt-2 pb-4 space-y-1 text-sm">
             <li>
               <NavLink to={'/'} className={({isActive})=> isActive? 'text-[#23575C] duration-200 font-semibold flex items-center p-2 space-x-3 rounded-md': 'flex items-center p-2 space-x-3 rounded-md'}
               >
                 <BiBook className="text-xl" />
                 <span>Home</span>
               </NavLink>
             </li>
             <li>
               <NavLink to={'/dashboard/assignedTours'} className={({isActive})=> isActive? 'text-[#23575C] duration-200 font-semibold flex items-center p-2 space-x-3 rounded-md': 'flex items-center p-2 space-x-3 rounded-md'}
               >
                 <BiBook className="text-xl" />
                 <span>My Assigned Tours</span>
               </NavLink>
             </li>
             
           </ul>
           }

{
             (role === 'admin') &&  <ul className="pt-2 pb-4 space-y-1 text-sm">
             <li>
               <NavLink to={'/'} className={({isActive})=> isActive? 'text-[#23575C] duration-200 font-semibold flex items-center p-2 space-x-3 rounded-md': 'flex items-center p-2 space-x-3 rounded-md'}
               >
                 <BiBook className="text-xl" />
                 <span>Home</span>
               </NavLink>
             </li>
             <li>
               <NavLink to={'/dashboard/addPackage'} className={({isActive})=> isActive? 'text-[#23575C] duration-200 font-semibold flex items-center p-2 space-x-3 rounded-md': 'flex items-center p-2 space-x-3 rounded-md'}
               >
                <IoMdAddCircle  className="text-xl" />
                 <span>Add Packages</span>
               </NavLink>
             </li>
             <li>
               <NavLink to={'/dashboard/manageUsers'} className={({isActive})=> isActive? 'text-[#23575C] duration-200 font-semibold flex items-center p-2 space-x-3 rounded-md': 'flex items-center p-2 space-x-3 rounded-md'}
               >
                 <BsPerson className="text-xl" />
                 <span>Manage Users</span>
               </NavLink>
             </li>
             
           </ul>
           }
          </div>
        </div>
    </ul>
  
  </div>
</div>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
