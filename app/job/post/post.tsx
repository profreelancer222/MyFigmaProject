"use client"
import Image from "next/image"
import Link from 'next/link'
import check from '../../../public/assest/icons/check.svg'
import { useState } from "react"
import axios from "axios"
import qs from "qs"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function post() {

    const [companyName, setcompanyName] = useState("");
    const [managerName, setmanagerName] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [zip, setzip] = useState("");
    const [salaryAmount, setsalaryAmount] = useState("");
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");


    const getValue = () => {
        return ({
            companyName: companyName,
            managerName: managerName,
            email: email,
            address: address,
            city: city,
            state: state,
            zip: zip,
            salaryAmount: salaryAmount,
            title: title,
            description: description
        })
    }

    const onSubmit = async () => {
        console.log(getValue())
		axios.defaults.headers.common['authorization'] = window.localStorage.getItem("token");
		await axios.post(`http://localhost:8000/api/postjob`, qs.stringify(getValue()))
			.then(result => {
				//alert(result.data);
				toast("success");
                location.href='/job/hire'
			})
			.catch(
				err => {
                    //alert(err.message)
					console.log(err.message)
					toast("error")
				}
			)
	}

    return <div>
        <div className="w-[80vw] p-8 mx-[10vw] bg-white rounded-2xl flex-col justify-start items-center gap-3 inline-flex"><ToastContainer />
            <div className="self-stretch h-auto p-6 rounded-lg border border-black border-opacity-10 flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Company Name</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input onChange={e => { setcompanyName(e.target.value) }} className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Hiring Manager Name</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input onChange={e => { setmanagerName(e.target.value) }} className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Email</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input onChange={e => { setemail(e.target.value) }} className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Address</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input onChange={e => { setaddress(e.target.value) }} className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">City</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input onChange={e => { setcity(e.target.value) }} className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">State</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input onChange={e => { setstate(e.target.value) }} className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Zip</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input onChange={e => { setzip(e.target.value) }} className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Salary Amount</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input onChange={e => { setsalaryAmount(e.target.value) }} className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Title</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input onChange={e => { settitle(e.target.value) }} className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[108px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Company Description</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <textarea onChange={e => { setdescription(e.target.value) }} className="self-stretch h-[83px] px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-start gap-2.5 inline-flex" placeholder="Please Input here.">
                    </textarea>
                </div>
                <button className="relative right-0 w-[125px] h-8 px-6 py-2 bg-indigo-900 rounded-lg justify-center items-center gap-2.5 inline-flex" onClick={onSubmit}>
                    <Image src={check} alt='check' className="" />
                    <div className="text-slate-200 text-sm font-normal font-['Rubik'] capitalize">Submit</div>
                </button>
            </div>
        </div>
    </div>
}
