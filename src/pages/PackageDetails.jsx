import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
const PackageDetails = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const { auth } = useAuth();
  const user = auth.currentUser;
  const [see, setSee] = useState(false);
  const tour = useLoaderData();
  console.log('tour',tour)
  const [guides, setGuides] = useState([])
  const [bookings, setBookings]  = useState([])
  useEffect(() => {
    fetch("https://backpacker-server.vercel.app/guide")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setGuides(data)
      });
  }, []);
  const handleBooking = (e) => {
    e.preventDefault();
    fetch(`https://backpacker-server.vercel.app/bookings/${user?.email}`)
    .then(res=> res.json())
    .then(data=>{
      // console.log('all bookings',data)
      setBookings(data)
      if (!user) {
        navigate("/login");
      } else {
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = user?.photoURL;
        const date = form.date.value;
        const price = form.price.value;
        const guide = form.guide.value;
        const booking = { name, email, photo, date, price, guide, tour:tour.package_title, status : 'pending' };
        console.log('all booking',bookings)
        fetch("https://backpacker-server.vercel.app/bookings", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(booking),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.acknowledged ){
              Swal.fire({
                title: 'success',
                text: 'Booked this package',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            } else{
              Swal.fire({
                title: 'error',
                text: 'Already booked a package on this day ',
                icon: 'error',
                confirmButtonText: 'OK'
              })
            }
          });
       
      }
    })
  };
  return (
    <div>
      <div>
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 hidden">
          {tour.images.map((image) => (
            <div key={image} className="overflow-hidden ">
              <img
                src={image}
                alt=""
                className="w-full h-full hover:scale-110 duration-500"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:hidden">
          {(see ? tour.images : tour.images.slice(0, 1)).map((image) => (
            <div key={image} className="overflow-hidden ">
              <img
                src={image}
                alt=""
                className="w-full h-full hover:scale-110 duration-500"
              />
            </div>
          ))}
          <h1
            onClick={() => setSee(true)}
            className={`text-xl z-20  cursor-pointer md:hidden bg-gray-200 max-w-max  rounded-xl bg-opacity-20 text-white  logo  relative bottom-16 left-4 px-6 py-2 ${
              see ? "hidden" : ""
            }`}
          >
            {" "}
            See All
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-12 text-4xl logo text-[#CAB064]">
          About The Tour
        </h1>
        <p className="text-center mt-6 font-semibold opacity-70 max-w-2xl mx-auto">
          {tour.about_tour}
        </p>
      </div>
      <h1 className="mt-16 text-center text-[#CAB064] mb-6 text-4xl logo ">
        Tour Plan
      </h1>
      <div className=" bg-[#CCD6D5] rounded-3xl py-8">
        {tour.tour_plan.map((t) => (
          <div key={t} className="mt-12 space-y-4">
            <h1 className="text-center text-[#23575C] text-3xl logo">
              day {tour.tour_plan.indexOf(t) +1}
            </h1>
            <p className="text-center">{t}</p>
          </div>
        ))}
      </div>
      <div>
        <h1 className="mt-16 text-center text-[#CAB064] mb-6 text-4xl logo ">
          Book This Package
        </h1>
        <form
          onSubmit={handleBooking}
          className="space-y-8 p-12  border-[1px] border-opacity-30 rounded-3xl mt-10  border-gray-500 max-w-md  mx-auto "
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full px-3 py-3  rounded-md  border outline-none"
                defaultValue={user?.displayName}
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-3 py-3  rounded-md  border outline-none"
                defaultValue={user?.email}
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="w-full px-3 py-3  rounded-md  border outline-none"
                defaultValue={user?.photoURL}
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Date
              </label>
              <DatePicker
                name="date"
                className="w-full  px-3 py-3  rounded-md  border outline-none"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Choose Tour Guide</label>
              <select
                name="guide"
                id="cars"
                className="w-full px-3 py-3  rounded-md  border outline-none"
              >
                {
                  guides.map(guide=> <option key={guide._id} value={guide.email}>{guide.name}</option>)
                }
                
                
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="photo"
                placeholder="Price"
                className="w-full px-3 py-3  rounded-md  border outline-none"
                defaultValue={tour.price}
                readOnly
              />
            </div>
          </div>
          <button
            type="submit"
            className="relative inline-flex items-center px-12 py-2 w-full text-center overflow-hidden text-lg font-medium text-[#b59d56] border-2 border-[#b59d56] rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-[#b59d56] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative mx-auto">Book Now</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PackageDetails;
