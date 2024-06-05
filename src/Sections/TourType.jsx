import { BsBackpack4 } from "react-icons/bs";
import { FaHatCowboy, FaUmbrellaBeach } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";
import { Link } from "react-router-dom";

const TourType = () => {
    return (
        <div className="mt-32 ">
            <h1 className="text-center text-5xl logo font-semibold mb-6 text-[#24565C]">Tour Types</h1>
            <div className="bg-[#CCD6D5] py-24 font-semibold text-[#23575C] flex justify-center md:gap-12 gap-4" >
                <Link to={'tours/Adventure'} className=" flex cursor-pointer flex-col uppercase gap-2 items-center"><BsBackpack4 className="text-4xl" />
                    adventure</Link>
                <Link to={'tours/Luxury'}  className=" flex flex-col cursor-pointer uppercase gap-2 items-center">
                <GiTakeMyMoney className="text-4xl" />
                    Luxury</Link>
                <Link to={'tours/Cultural'} className=" flex flex-col uppercase gap-2 cursor-pointer items-center">
                <FaHatCowboy className="text-4xl" />
                    Cultural</Link>
                <Link to={'tours/Beach'} className=" flex flex-col uppercase gap-2 items-center cursor-pointer">
                <FaUmbrellaBeach className="text-4xl" />
                    Beach</Link>
                <Link to={'tours/Budget'} className=" flex cursor-pointer flex-col uppercase gap-2 items-center">
                <TbPigMoney  className="text-4xl" />
                    Budget</Link>
            </div>
        </div>
    );
};

export default TourType;