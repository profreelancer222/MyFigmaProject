"use client";
import Image from 'next/image'
import Link from 'next/link'
import Input from '../../../components/semicomponents/Input'
import Button from '../../../components/semicomponents/Input'
import keyboard from '../../../public/assest/pictures/keybord.png'
import logo from '../../../public/assest/pictures/logo.png'
import search from '../../../public/assest/icons/search.svg'
import eye from '../../../public/assest/icons/eye.svg'
import facebook from '../../../public/assest/icons/facebook.svg'
import google from '../../../public/assest/icons/google.svg'
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import isEmpty from "is-empty";
import axios from "axios";
import qs from "qs";
import { ToastContainer, toast } from 'react-toastify';
import apiFactory from "../../../src/helper/apiFactory";
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {
	//const router = useRouter(); 
	const [cookies, setCookie] = useCookies(['jwtToken']);

	const [type, setType] = useState(true); // type = false -> sign in page, true -> sign up
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");


	const signUp = async () => {

		await axios.post(`http://localhost:8000/api/signup`, qs.stringify({ email: email, password: password }))
			.then(result => {
					console.log(result.data)
					toast(result.data.success)
					toast(result.data.error)
				})
			.catch(err => {
				toast(err.message)
				console.log("error")
			})

	}
	
	useEffect(() => {
		if (!isEmpty(cookies.jwtToken)) {
			signUp()
			apiFactory.test(cookies.jwtToken)
				.then(() => {
					localStorage.setItem("token", cookies.jwtToken);
					//router.push("/job/hire");
				})
				.catch(() => {
					setCookie("jwtToken", null);
					localStorage.removeItem("token");
				});
		}
	}, [])

	
	  
	return (
		<div className="w-full h-[100vh] bg-slate-200 justify-center items-center inline-flex"><ToastContainer />
			<div className="w-[721px] h-[557px]">
				<div className="w-[721px] h-[557px] self-center grow shrink basis-0 p-6 bg-white rounded-2xl shadow justify-center items-center gap-6 inline-flex">
					<Image
						className="self-stretch rounded-lg"
						width={246}
						height={509}
						src={keyboard}
						alt="Sign image"
					/>
					<div className="grow shrink basis-0 self-stretch pt-6 flex-col justify-start items-center gap-6 inline-flex">
						<div className="w-[258px] h-7 justify-center items-center inline-flex">
							<Image className='w-[258px] h-7 relative' src={logo} alt='Logo image' />
						</div>
						<div className="flex-col justify-start items-center gap-1 flex">
							<div className="text-sky-700 text-base font-semibold font-['Rubik']">Create an account</div>
							<div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Create a new account</div>
						</div>
						<div className="self-stretch h-[136px] flex-col justify-start items-center gap-[18px] flex">
							<div className="self-stretch h-[59px] flex-col justify-start items-start gap-2.5 flex">
								<div className="text-neutral-600 text-sm font-normal font-['Rubik']">Email Address</div>
								<Input type="search" onChange={(value) => setEmail(value)} value={email} />
							</div>
							<div className="self-stretch h-[59px] flex-col justify-start items-start gap-2.5 flex">
								<div className="text-neutral-600 text-sm font-normal font-['Rubik']">User Password</div>
								<Input type="password" onChange={(value) => setPassword(value)} value={password} />
							</div>
						</div>
						<button className="w-[403px] h-8 px-6 py-2 bg-indigo-900 rounded-lg justify-center items-center gap-2.5 inline-flex" onClick={signUp}>
							<div className="text-slate-200 text-sm font-normal font-['Rubik'] capitalize">Sign Up</div>
						</button>
						<div className="self-stretch justify-start items-center gap-3 inline-flex">
							<div className="grow shrink basis-0 h-[0px] border border-zinc-400"></div>
							<div className="text-zinc-400 text-sm font-normal font-['Rubik']">or</div>
							<div className="grow shrink basis-0 h-[0px] border border-zinc-400"></div>
						</div>
						<div className="self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
							<a className="bg-white hover:shadow hover:cursor-pointer w-[100%] h-8 px-6 py-2 rounded-lg justify-center items-center gap-2.5 transition-all inline-flex border border-gray-300">
								<Image
									width={20}
									height={20}
									alt="Button Image"
									src={google}
								/>
								<div className="text-indigo-900 text-sm font-normal font-['Rubik'] capitalize" >Google</div>
							</a>
							<a className="bg-white hover:shadow hover:cursor-pointer w-[100%] h-8 px-6 py-2 rounded-lg justify-center items-center gap-2.5 transition-all inline-flex border border-gray-300">
								<Image
									width={20}
									height={20}
									alt="Button Image"
									src={facebook}
								/>
								<div className="text-indigo-900 text-sm font-normal font-['Rubik'] capitalize" >Facebook</div>
							</a>
						</div>
						<div className="justify-center items-start gap-1 inline-flex">
							<div className="text-neutral-600 text-sm font-normal font-['Rubik']"> Already have an account?</div>
							<div className="justify-center items-center gap-2.5 flex">
								<Link className="text-blue-500 text-sm font-medium font-['Rubik'] underline" href="/auth/signin" >Log in</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}   