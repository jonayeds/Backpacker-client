import { useEffect, useState } from "react";
import useAuth from "../../customHooks/useAuth";

const MyBookings = () => {
    const {auth} = useAuth()
    const tourist = auth.currentUser
    const [tours, setTours] = useState([])
    useEffect(()=>{
        fetch(`https://backpacker-server.vercel.app/bookings/myBookings/${tourist.email}`)
        .then(res=> res.json())
        .then(data => {
			setTours(data)
        })
    },[tourist])
    // console.log(tours)
    const handleCancel = id =>{
        fetch(`https://backpacker-server.vercel.app/bookings/${id}`, {
            method:'DELETE'
        }).then(res=>res.json())
        .then(data =>{
            console.log(data)
            setTours(tours.filter(tour=> tour._id !== id))
        })
    }
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <p className="text-4xl text-center  mt-12 mb-6 logo text-[#283A2B] font-bold">My Bookings</p>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-200">
				<tr className="text-left">
					<th className="p-3">Package Name</th>
					<th className="p-3">Tour Guide Name</th>
					<th className="p-3 text-center">Date</th>
					<th className="p-3 text-left">Price</th>
					<th className="p-3 text-center">Status</th>
					<th className="p-3 text-center">Pay</th>
					<th className="p-3 text-center">Cancel</th>
				</tr>
			</thead>
			<tbody>
				{
                    tours.map(tour=><tr key={tour._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>{tour.tour}</p>
					</td>
					<td className="p-3">
						<p>{tour.guide}</p>
					</td>
					<td className="p-3 text-center " >
							<p>{tour.date}</p>
						
					</td>
					
					<td className="p-3 text-left">
						<p>${tour.price}</p>
					</td>
					<td className="p-3 text-center  " >
							<p className={`${tour.status === 'Accepted'? 'text-green-500': tour.status === 'Rejected'? 'text-red-500': tour.status === 'pending'? 'text-yellow-600': ''}`}>{tour.status}</p>
						
					</td>
					<td className="p-3 text-center   text-white" >
							<button className={`bg-green-500 py-2 px-6 rounded-md ${tour.status === 'Accepted'? '  ' : ' hidden'}`}> Pay</button>
						
					</td>
					<td className="p-3 text-center  text-white" >
							<button onClick={()=>handleCancel(tour._id)} className={`bg-gray-400 py-2 px-6 rounded-md ${tour.status === 'pending'? ' ' : ' hidden '}`}> Cancel</button>
						
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

export default MyBookings;