import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";


const Layout = () => {
    return (
        <div>
           <div className="h-[70px] ">
           <div className="   fixed   z-50 w-full ">  
            <Nav></Nav>
            </div>
           </div>
           <div className="container mx-auto">  
           
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Layout;