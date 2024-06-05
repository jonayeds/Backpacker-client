import { HiHeart } from "react-icons/hi";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const TypedPackage = () => {
    const {auth} = useAuth()
    const user = auth.currentUser
    const email = user?.email
    const [packages, setPackages] = useState([])
    useEffect(()=>{
      fetch('http://localhost:5000/packages')
      .then(res=> res.json())
      .then(data =>{
        console.log(data)
        setPackages(data)
        console.log(packages)
      })
    },[])
    const typedPackages = useLoaderData()
    console.log(packages)
    const handleWish  = (singlePackage)=>{
        fetch(`http://localhost:5000/wishlist/${email}`)
        .then(res=>res.json())
        .then(data =>{
          const filtered = data.filter(d=>d.id === singlePackage.id)
          console.log(filtered)
          if(filtered.length>0){
            Swal.fire({
              title: 'error',
              text: 'Already added to wishlist',
              icon: 'error',
              confirmButtonText: 'OK'
            })
          }else {
            fetch(`http://localhost:5000/wishlist`, {
            method: 'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify({...singlePackage, email} )
          }) 
          .then(res=> res.json())
          .then(data => {
            Swal.fire({
              title: 'Successful',
              text: 'added to wishlist',
              icon: 'success', 
              confirmButtonText: 'OK'
            })
            console.log(data)
          })
          }
        })
      }
    return (
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-8">
        {
          typedPackages.map((singlePackage)=> <div key={singlePackage.title} className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
              <a className="mb-0 capitalize dark:text-gray-800">{singlePackage.tour_type}</a>
            </div>
            <div className="text-3xl cursor-pointer" onClick={()=>handleWish(singlePackage)}>
                 <HiHeart className="text-red-500" /> 
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={singlePackage.images[4]}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold text-[#2e7b82]">
                  {singlePackage.package_title}
                </h3>
              </a>
              <p>Price: ${singlePackage.price}</p>
              <Link to={`/package/${singlePackage._id}`} className="btn bg-[#cbb164] text-white hover:bg-[#a08942]">
                View Package
              </Link>
            </div>
          </div>
        </div>)
        }
      </div>
        </div>
    );
};

export default TypedPackage;