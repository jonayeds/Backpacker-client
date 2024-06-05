import { useLoaderData } from "react-router-dom";

const StoryDetail = () => {
    const story = useLoaderData()
    console.log(story)
    return (
        <div>
            <div className="flex items-center gap-6 ml-10 mt-8">
                <img src={story.user.photoURL} className="w-20 h-20 rounded-full" alt="" />
                <div>
                <p className="text-lg  font-semibold opacity-80">By {story.user.displayName}</p>
                <p className="text-sm  font-semibold opacity-80">{story.user.email}</p>
                </div>
            </div>
                <p className="mt-16 text-lg opacity-90 leading-8">
                    {story.story}
                </p>
        </div>
    );
};

export default StoryDetail;