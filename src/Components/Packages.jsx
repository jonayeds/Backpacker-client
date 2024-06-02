import { BiHeart } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import bandarban from "../assets/images/slide5.jpg";
import cox from "../assets/images/slide3.jpg";
import sundarban from '../assets/images/sundarban.jpg'

import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-8">
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
              <a className="mb-0 capitalize dark:text-gray-800">Hiking</a>
            </div>
            <div className="text-3xl">
              <HiHeart className="text-red-500" />
              <BiHeart />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={bandarban}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold text-[#2e7b82]">
                  Explore raw nature by hiking into the Bandarban Hills.
                </h3>
              </a>
              <p>Price: BDT 5000</p>
              <Link to={'/bandarban'} className="btn bg-[#cbb164] text-white hover:bg-[#a08942]">
                View Package
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
              <a className="mb-0 capitalize dark:text-gray-800">Adventure sports</a>
            </div>
            <div className="text-3xl">
              <HiHeart className="text-red-500" />
              <BiHeart />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={cox}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2 ">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold text-[#2e7b82]">
                 Experience Adventure sports in Cox`s Bazar
                </h3>
              </a>
              <p>Price: BDT 5000</p>
              <Link to={'/coxbazar'} className="btn bg-[#cbb164] text-white hover:bg-[#a08942]">
                View Package
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
              <a className="mb-0 capitalize dark:text-gray-800">Adventure sports</a>
            </div>
            <div className="text-3xl">
              <HiHeart className="text-red-500" />
              <BiHeart />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={sundarban}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2 ">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold text-[#2e7b82]">
                 Experience Adventure sports in Cox`s Bazar
                </h3>
              </a>
              <p>Price: BDT 5000</p>
              <Link to={'/sundarban'} className="btn bg-[#cbb164] text-white hover:bg-[#a08942]">
                View Package
              </Link>
            </div>
          </div>
        </div>
      </div>
	<div className="flex justify-center mt-8">
		<Link to={'/allPackages'} className="text-center px-6 mx-auto logo  text-3xl   hover:shadow-md duration-500 shadow-xl py-2 rounded-md bg-gray-100 text-[#CBB164]"> All Packages...</Link>
	</div>
    </div>
  );
};

export default Packages;
