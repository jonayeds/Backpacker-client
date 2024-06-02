import { useState } from "react";
import { FaEye, FaGoogle, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../customHooks/useAuth";
const Signup = () => {
    const {createUser, update, googleLogin} = useAuth()
    
    const [show, setShow] = useState(false)
	const handleShow = ()=>{
		setShow(!show)
	}
    const navigate = useNavigate()
    const handelGoogleLogin = ()=>{
        googleLogin()
        .then((result) => {
            const email = result.user?.email
            const name = result.user?.displayName

			Swal.fire({
				title: 'Successful',
				text: 'Log In Successful',
				icon: 'success',
				confirmButtonText: 'OK'
			})
            fetch('http://localhost:5000/users', {
                method:'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({email, name})
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data)
            })
			navigate('/')
			
			
		})
    }
    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        const user = {name, email, password, photo}
        console.log(user)
        createUser(email, password)
        .then((result) => {
			update(name, photo)
			// console.log(auth.currentUser)
			Swal.fire({
				title: 'Successful',
				text: 'User created successfully',
				icon: 'success',
				confirmButtonText: 'OK'
			})
            fetch('http://localhost:5000/users', {
                method:'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({email, name})
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data)
            })
			navigate('/')
			console.log(result)
			
		}).catch((err) => {
			Swal.fire({
				title: 'error',
				text: 'User already exist',
				icon: 'error',
				confirmButtonText: 'OK'
			})
			console.log(err.message)
		});
    }
    return (
        <div className="min-h-[calc(100vh-70px)] flex flex-col justify-center items-center">
             <h2 className="mb-3 text-3xl font-semibold text-center">Sign Up </h2>
        <p className="text-sm text-center ">Already have account?
            <Link to={'/login'} href="#" rel="noopener noreferrer" className="focus:underline hover:underline hover:text-[#588f95] ml-2">Login here</Link>
        </p>
            <form onSubmit={handleSignUp} className="space-y-8 p-12  border-[1px] border-opacity-30 rounded-3xl mt-10  border-gray-500 max-w-md w-full">
            <div className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-3  rounded-md  border outline-none" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Email address</label>
                    <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-3  rounded-md  border outline-none" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Photo</label>
                    <input type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-3 py-3  rounded-md  border outline-none" />
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <label htmlFor="password" className="text-sm">Password</label>
                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline ">Forgot password?</a>
                    </div>
                    <div className="flex items-center">
                    <input type={show?'text': 'password'} name="password" id="password" placeholder="*****" className="w-full px-3 py-3 rounded-md outline-none border" />
                    <div onClick={handleShow} className="text-xl relative right-[40px] text-gray-500 w-0">
					{
						show? <FaEye />: <FaRegEyeSlash />
					}
				</div>
                    </div>
                </div>
            </div>
            <button type="submit" className="relative inline-flex items-center px-12 py-2 w-full text-center overflow-hidden text-lg font-medium text-[#b59d56] border-2 border-[#b59d56] rounded-full hover:text-white group hover:bg-gray-50">
<span className="absolute left-0 block w-full h-0 transition-all bg-[#b59d56] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative mx-auto">Sign Up</span>
</button>
                <div className="my-6 space-y-4">
        <button onClick={handelGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 group">
            
                
        <FaGoogle  className="group-hover:text-[#65a5ac]"/>
            
            <p>Login with Google</p>
        </button>
       
       
    </div>
        </form>
        </div>
    );
};

export default Signup;