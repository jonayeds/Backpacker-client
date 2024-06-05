import { FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom'
import useAuth from "../customHooks/useAuth";
import Swal from "sweetalert2";

const Signin = () => {
    const { passwordLogin, googleLogin, githubLogin} = useAuth() 
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
            const photo = result.user?.photoURL

			Swal.fire({
				title: 'Successful',
				text: 'Log In Successful',
				icon: 'success',
				confirmButtonText: 'OK'
			})
            fetch('https://backpacker-server.vercel.app/users', {
                method:'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({email, name, photo, role:'tourist', requested: 'Request'})
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data)
            })
			navigate('/')
			
			
		})
    }
    const handldeGithubLogin = ()=>{
        githubLogin()
        .then(() => {
			Swal.fire({
				title: 'Successful',
				text: 'Log In Successful',
				icon: 'success',
				confirmButtonText: 'OK'
			})
			navigate('/')
			
			
		})
    }

    const handleEmailLogin = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        passwordLogin(email, password)
        .then(() => {
			// update(name, photo)
			// console.log(auth.currentUser)
			Swal.fire({
				title: 'Successful',
				text: 'Log In Successful',
				icon: 'success',
				confirmButtonText: 'OK'
			})
			navigate('/')
			
			
		}).catch((err) => {
			Swal.fire({
				title: 'error',
				text: 'Wrong email or password',
				icon: 'error',
				confirmButtonText: 'OK'
			})
			console.log(err.message)
		});
    }
    return (
        <div className="min-h-[calc(100vh-70px)] flex flex-col justify-center items-center">
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8   ">
    <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
    <p className="text-sm text-center ">Don`t have account?
        <Link to={'/signup'} href="#" rel="noopener noreferrer" className="focus:underline hover:underline hover:text-[#b59d56] ml-2">Sign up here</Link>
    </p>
    <div className="my-6 space-y-4">
        <button onClick={handelGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 group">
            
                
        <FaGoogle  className="group-hover:text-[#65a5ac]"/>
            
            <p>Login with Google</p>
        </button>
        <button onClick={handldeGithubLogin} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 group">
        <FiGithub className="group-hover:text-[#65a5ac] text-lg"/>
            <p>Login with GitHub</p>
        </button>
       
    </div>
    <div className="flex items-center w-full my-4">
        <hr  className="w-full " />
        <p className="px-3 ">OR</p>
        <hr  className="w-full " />
    </div>
    <form onSubmit={handleEmailLogin} className="space-y-8">
        <div className="space-y-4">
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">Email address</label>
                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-3  rounded-md  border" />
            </div>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm">Password</label>
                    
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
<span className="relative mx-auto">Log In</span>
</button>
    </form>
</div>
    </div>
    );
};


export default Signin;