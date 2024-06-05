import { useEffect, useState } from "react";
import useAuth from "../../customHooks/useAuth";
import { IoTrashBinSharp } from "react-icons/io5";
import Swal from "sweetalert2";


const MyWishlist = () => {
    const [wish, setWish] = useState([])
    const {auth}  = useAuth()
    const {email} = auth.currentUser
    useEffect(()=>{
        fetch(`https://backpacker-server.vercel.app/wishlist/${email}`)
        .then(res=> res.json())
        .then(data =>{
            setWish(data)
        })
    },[email])
	const handleDelete = (id) =>{
		Swal.fire({
            title: 'Are You Sure?',
            text: 'Delete this item',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: 'red',
            cancelButtonText: 'Cancel',
        })
		.then(result=>{
			if(result.isConfirmed){
				fetch(`https://backpacker-server.vercel.app/wishlist/${id}`, {
					method: 'DELETE'
				}).then(res=>res.json())
				.then(data=>{
					console.log(data)
					setWish(wish.filter(w=>w._id != id))
				})
			}
		})
	}
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <p className="text-4xl text-center  mt-12 mb-6 logo text-[#283A2B] font-bold">My Wishlist</p>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-200">
				<tr className="text-left">
					<th className="p-3">Package type</th>
					<th className="p-3">Package Tile</th>
					<th className="p-3 text-left">Price</th>
					<th className="p-3 text-center">Status</th>
				</tr>
			</thead>
			<tbody>
				{
                    wish.map(w=><tr key={w._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>{w.tour_type}</p>
					</td>
					<td className="p-3">
						<p>{w.package_title}</p>
					</td>
					
					<td className="p-3 text-left">
						<p>${w.price}</p>
					</td>
					<td className="p-3 text-center text-lg text-red-500" onClick={()=>handleDelete(w._id)}>
							<IoTrashBinSharp className="mx-auto cursor-pointer"  />
						
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

export default MyWishlist;