import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MeetGuides = () => {
    const [guides, setGuides] = useState([])
    useEffect(()=>{
        fetch('https://backpacker-server.vercel.app/guide')
       .then(res=> res.json())
       .then(data=>{
        setGuides(data)
       })
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    guides.map(guide=> <div key={guide._id} className="bg-[#CCD6D5] rounded-xl py-6 flex flex-col justify-center items-center">
                        <div className="w-52 h-52 bg-gray-500 rounded-full">
                        <img src={guide.photo} alt="" className="w-52 h-52 rounded-full mx-auto" />
                        </div>
                        <h1 className="text-center logo text-3xl mt-6 text-[#23575C]">{guide.name}</h1>
                        <Link to={`/guide/${guide.email}`} className="mx-auto bg-[#DCBF67] text-white px-4 py-2 rounded-md mt-4 hover:bg-[#a58d45] duration-500">Details</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MeetGuides;