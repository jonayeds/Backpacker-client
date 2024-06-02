/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

const PrivateRoutes = ({children}) => {
    const {auth, loading , setLoading} = useAuth()
    const user= auth?.currentUser
    if(loading){
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
        return <div  className="h-screen  w-screen flex justify-center items-center text-5xl">
            <span className="loading loading-ring  w-32"></span>
        </div>
    }
    if(!user){
        
        return <Navigate to={'/login'}></Navigate>
    }
    return children
};

export default PrivateRoutes;