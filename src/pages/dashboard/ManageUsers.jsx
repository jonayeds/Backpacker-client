import { useEffect, useState } from "react";
import useAuth from "../../customHooks/useAuth";

const ManageUsers = () => {
    const [allUsers, setAllUsers] = useState([])
    const {auth} = useAuth()
    const admin = auth.currentUser
    const [notFiltered, setNotFiltered] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/users`)
        .then(res=> res.json())
        .then(data => {
            setAllUsers(data.filter(user=> user.email !== admin.email))
            setNotFiltered(data.filter(user=> user.email !== admin.email))
        })
    },[admin])
    console.log(allUsers)
    const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/updateRole/${id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                role: 'admin',
                updated : true
            })
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                window.location.reload()
            }
        })
    }
    const handleMakeGuide = id =>{
        fetch(`http://localhost:5000/users/updateRole/${id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                role: 'guide',
                updated : true
            })
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                window.location.reload()
            }
        })
    }
    const handleSearch = e =>{
        e.preventDefault()
        const search  = (e.target.search.value).toLowerCase().split(' ').join('')
       if(search){
        setAllUsers(notFiltered.filter(user=> (user.name.toLowerCase().split(' ').join('') === search) || (user.email.toLowerCase().split(' ').join('') === search) ))
       }else{
        setAllUsers(notFiltered)
       }
        
    }
    return (
        <div>
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <p className="text-4xl text-center mb-10 mt-12  logo text-[#283A2B] font-bold">Manage Users</p>
            <form onSubmit={handleSearch} action="" className="w-full flex justify-center items-center mb-8" >
                <input type="text" name="search" className="bg-[#d8dede] text-[#23575C] rounded-l-full py-2 px-4 focus:outline-none "  placeholder="Search by Email or Name"/>
                <button type="submit" className="py-2 pr-4 pl-2 rounded-r-full text-white bg-[#23575C]">Search</button>
            </form>
<div className="overflow-x-auto">
    <table className="min-w-full text-xs">
        <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="" />
        </colgroup>
        <thead className="dark:bg-gray-200">
            <tr className="text-left">
                <th className="p-3">User Name</th>
                <th className="p-3">User Email</th>
                <th className="p-3 text-center">Role</th>
                <th className="p-3 text-center">Requested to be guide</th>
                <th className="p-3 text-center">Make Admin</th>
                <th className="p-3 text-center">Make Tour Guide</th>
            </tr>
        </thead>
        <tbody>
            {
                allUsers.map(user=><tr key={user._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                    <p>{user.name}</p>
                </td>
                <td className="p-3">
                    <p>{user.email}</p>
                </td>
                <td className="p-3 text-center " >
                        <p>{user.role}</p>
                    
                </td>
                <td className="p-3 text-center " >
                        <p className={`max-w-max text-center mx-auto ${user.requested === 'Requested' ? ' bg-green-200 py-2 rounded-r-full pl-2 pr-4' : ''}  ${user.updated ? 'hidden': ''}`}>{user.requested === 'Requested' ? 'Requested' : ' Not Requested'}</p>
                    
                </td>
                <td className="p-3 text-center   text-white" >
                        <button onClick={()=>handleMakeAdmin(user._id)} className={`bg-orange-400 py-2 px-4 rounded-sm ${user.updated? 'hidden': ''}`}> Make Admin</button>
                    
                </td>
                <td className="p-3 text-center   text-white" >
                        <button onClick={()=>handleMakeGuide(user._id)} className={`bg-yellow-500 py-2 px-4 rounded-sm ${user.updated? 'hidden': ''}`}> Make Guide</button>
                    
                </td>
            </tr>)
            }
        </tbody>
    </table>
</div>
</div>
    </div>
    );
};

export default ManageUsers;