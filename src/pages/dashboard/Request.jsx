import { useEffect, useState } from "react";
import useAuth from "../../customHooks/useAuth";
import Swal from "sweetalert2";

const Request = () => {
    const {auth} = useAuth()
    const  [user,  setUser] = useState({})
    const [state,  setState] = useState('')
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${auth?.currentUser?.email}`)
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setUser(data)
            setState(data.requested)
            
        })
    },[auth?.currentUser?.email])
    console.log(user?.requested)
    const handleRequest = () =>{
        if(user?.requested === 'Requested'){
            Swal.fire({
                title: 'Failed',
				text: 'Already Requested',
				icon: 'error',
				confirmButtonText: 'OK'
			})
        }else{
            setState('Requested')
            fetch(`http://localhost:5000/users/${auth?.currentUser?.email}`, {
                method: 'PUT',
                headers:  {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({requested: 'Requested'})
            }).then(res=> res.json())
            .then(data=> {
                console.log(data)
            })
        }
    }
    return (
        <div  className=" flex items-center justify-center gap-8 mt-32">
            <h1 className="text-center  text-2xl font-semibold opacity-70 ">Request to be a tour Guide</h1>
            <button onClick={handleRequest} className={` px-4 py-1 rounded-sm text-white  ${(state === 'Requested')? 'bg-[#CCD6D5]' : 'bg-[#23575C]'}`}>{state}</button>
        </div>
    );
};

export default Request;