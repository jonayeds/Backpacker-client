import { useEffect, useState } from "react";
import useAuth from "../../customHooks/useAuth";

const AssignedTours = () => {
    const {auth} = useAuth()
    const guide = auth.currentUser
    const [tours, setTours] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/bookings/assigned/${guide.email}`)
        .then(res=> res.json())
        .then(data => {
            // console.log(data)
			setTours(data)
        })
    },[guide])
	// console.log('tours', tours)
	const handleAccept = id =>{
		fetch(`http://localhost:5000/bookings/${id}`, {
			method: 'PUT',
			headers:{
				'content-type'  : 'application/json'
			},
			body: JSON.stringify({status: 'Accepted'})
		})
		.then(res=> res.json())
		.then(data=>{
			console.log(data)
			if(data.modifiedCount){
				window.location.reload()
			}
		})
	}
	const handleReject = id =>{
		fetch(`http://localhost:5000/bookings/${id}`, {
			method: 'PUT',
			headers:{
				'content-type'  : 'application/json'
			},
			body: JSON.stringify({status: 'Rejected'})
		})
		.then(res=> res.json())
		.then(data=>{
			console.log(data)
			if(data.modifiedCount){
				window.location.reload()
			}
		})
	}
    return (
         <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <p className="text-4xl text-center  mt-12 mb-6 logo text-[#283A2B] font-bold">My Assigned Tours</p>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
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
					<th className="p-3">Tourist Name</th>
					<th className="p-3 text-left">Price</th>
					<th className="p-3 text-center">Date</th>
					<th className="p-3 text-center">Status</th>
					<th className="p-3 text-center">Status</th>
				</tr>
			</thead>
			<tbody>
				{
                    tours.map(tour=><tr key={tour._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>{tour.tour}</p>
					</td>
					<td className="p-3">
						<p>{tour.name}</p>
					</td>
					
					<td className="p-3 text-left">
						<p>${tour.price}</p>
					</td>
					<td className="p-3 text-center " >
							<p>{tour.date}</p>
						
					</td>
					<td className="p-3 text-center   text-white" >
							<button onClick={()=>handleAccept(tour._id)} className={`bg-green-500 py-2 px-4 rounded-md ${tour.status === 'Accepted'? 'bg-transparent text-green-500': tour.status ==='Rejected'? ' hidden ': ''}`}>{tour.status === 'Accepted' ? 'Accepted' :  tour.status === 'Rejected'? '':'Accept'}</button>
						
					</td>
					<td className="p-3 text-center  text-white" >
							<button onClick={()=>handleReject(tour._id)}  className={`bg-red-500 py-2 px-4 rounded-md ${tour.status === 'Rejected'? 'bg-transparent text-red-500': tour.status ==='Accepted'? ' hidden ': ''}`}>{tour.status === 'Rejected' ? 'Rejected' :  tour.status === 'Accepted'? '':'Reject'}</button>
						
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

export default AssignedTours;