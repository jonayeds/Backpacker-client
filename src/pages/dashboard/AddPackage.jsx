import { useState } from "react";
import { GiConsoleController } from "react-icons/gi";
import Swal from "sweetalert2";

const AddPackage = () => {
    const [images, setImages] =  useState(['a','b','c','d','e'])
    const [days, setDays] = useState(['a1','b2','c3','d4','e5'])
    const handleAddImage = ()=>{
        const newImages = [...images, images[images.length - 1] + 'a']
        setImages(newImages)
        console.log(images)
    }
    const handleAddDays = ()=>{
        const newDays = [...days, days.length + 1]
        setDays(newDays)
        console.log(newDays)
    }
    const handleAddPackage = e =>{
        e.preventDefault()
        const form = e.target
        const package_title = form.title.value
        const about_tour = form.about.value
        const tour_type = form.type.value
        const price = form.price.value
        const images = [form.imagea.value,  form.imageb.value, form.imagec.value, form.imaged.value, form.imagee.value]
        const tour_plan  = [form.daya.value,  form.dayb.value, form.dayc.value, form.dayd.value, form.daye.value]
        const tour = {package_title,about_tour,images,price, tour_plan, tour_type}
        fetch('http://localhost:5000/packages', {
            method:  'POST',
            headers:  {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(tour)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            Swal.fire({
				title: 'Successful',
				text: 'Package added Successfully',
				icon: 'success',
				confirmButtonText: 'OK'
			})
      e.target.reset()
        })
        
    }
    return (
        <div className="mt-32">
           
        <section className="p-6  ">
	<form onSubmit={handleAddPackage} noValidate="" action="" className="container flex flex-col items-center mx-auto space-y-12">
        <h1 className="text-center mt-12 text-4xl logo text-[#CAB064] ">
          Add package
        </h1>
		<div className="w-full gap-6 p-6 rounded-md shadow-sm dark:bg-gray-100 ">
			<div className="grid grid-cols-6 gap-4  col-span-full lg:col-span-3">
				<div className="col-span-full ">
					<label  className="text-sm">Package Title</label>
					<input name="title" id="firstname" type="text" placeholder="Package Name" className="w-full px-3 py-3   rounded-md  border outline-none" />
				</div>
				<div className="col-span-full  flex flex-col ">
					<label className="text-sm">About Tour</label>
                    {/* <input type="text" name="about" className="px-3 py-3  h-24  rounded-md  border outline-none"  /> */}
                    <textarea name="about" className="px-3 py-3  h-24  rounded-md  border outline-none" id=""></textarea>
				</div>
                <div className="col-span-full ">
					<label  className="text-sm">Price</label>
					<input name="price" id="firstname" type="number" placeholder="Price" className="w-full px-3 py-3   rounded-md  border outline-none" />
				</div>
				<div className="col-span-full  flex flex-col ">
					<label className="text-sm">Tour Type</label>
                    <select
                name="type"
                id="cars"
                className="w-full px-3 py-3  rounded-md  border outline-none"
              >
                <option className="" value='Adventure'>Adventure</option>
                <option className="" value='Beach'>Beach</option>
                <option className="" value='Cultural'>Cultural</option>
                <option className="" value='Luxury'>Luxury</option>
                <option className="" value='Budget'>Budget</option>
                
              </select>
				</div>
				<div className="col-span-full">
					<label htmlFor="email" className="text-sm">Photos</label>
					<div className="space-y-4 ">
                    {
                        images.map(image=><input key={image} id="firstname" type="text" name={`image${image}`} placeholder="Image  URL" className="w-full px-3 py-3   rounded-md  border outline-none" />)
                    }
                    </div>
                    {/* <span onClick={handleAddImage} className="flex items-center gap-2 border mt-4  p-2 w-max cursor-pointer">Add Image <CgAdd /></span> */}
				</div>
				<div className="col-span-full">
					<label htmlFor="address" className="text-sm">Tour Plan</label>
                    <div className="space-y-4 ">
                    {
                        days.map(day=><input key={day} id="firstname" type="text" name={`day${day[0]}`} placeholder={`Plan for Day ${day[1]}`} className="w-full px-3 py-3   rounded-md  border outline-none" />)
                    }
                    </div>
					{/* <span onClick={handleAddDays} className="flex items-center gap-2 border mt-4  p-2 w-max cursor-pointer">Add Day <CgAdd /></span> */}
				</div>
				
			</div>
		</div>
		<button  type="submit" className="bg-[#DCBF67] text-white px-8 py-2 rounded-md  duration-500 shadow-xl hover:shadow-md">Add Package</button>
	</form>
</section>
        </div>
    );
};

export default AddPackage;