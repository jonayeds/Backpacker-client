import Slider from "../Components/Slider";
import TourType from "../Sections/TourType";
import Tourism from "../Sections/Tourism";
import TouristSories from "../Sections/TouristSories";

const Home = () => {
    return (
        <div className="">
            <Slider></Slider>
            <Tourism></Tourism>
            <TourType>s</TourType>
            <TouristSories></TouristSories>
        </div>
    );
};

export default Home;