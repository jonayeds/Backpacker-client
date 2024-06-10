
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TouristSories = () => {
    const [stories, setStories] = useState([])
    useEffect(()=>{
        fetch('https://backpacker-server.vercel.app/stories' )
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            setStories(data)
        })
    },[])
    console.log(stories)
    return (
        <div className="mt-32">
            <h1 className="text-center text-5xl logo font-semibold mb-6 text-[#24565C]">Tourist Stories</h1>
            <div className="py-24 font-semibold text-[#23575C] grid md:grid-cols-2 grid-cols-1 justify-center md:gap-12 gap-4">
                {
                    stories.slice(0, 4).map(story=> <div key={story._id}>
                        <div className="dark:bg-gray-100 shadow-xl hover:shadow-md duration-500 dark:text-gray-800">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
		
		<div className="mt-3">
			<p className="mt-2">{story.story.slice(0, 400)}</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<Link to={`/story/${story._id}`} className="hover:underline text-[#23575A]">Read more</Link>
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src={story.user.photoURL} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-600">{story.user.displayName}</span>
				</a>
			</div>
		</div>
	</div>
</div>
                    </div>)
                }
            </div>
            <div className="flex mb-10"> 
            <Link to={'/allStories'} className="text-center px-6 mx-auto logo  text-3xl   hover:shadow-md duration-500 shadow-xl py-2 rounded-md bg-gray-100 text-[#CBB164]"> All Stories...</Link>
            </div>
        </div>
    );
};

export default TouristSories;