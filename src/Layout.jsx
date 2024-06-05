import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Sections/Footer";


const Layout = () => {
    return (
        <div>
           <div className="h-[70px] ">
           <div className="   fixed   z-50 w-full ">  
            <Nav></Nav>
            </div>
           </div>
           <div className="container mx-auto min-h-screen">  
           
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Layout;