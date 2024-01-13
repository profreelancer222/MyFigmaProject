"use client"
import Image from 'next/image'
import userPlus from '../../../public/assest/icons/userPlus_1.svg'
import { useEffect, useState } from 'react';
import {isEmpty} from 'is-empty';
import { sign } from 'crypto';
import axios from 'axios';
export default function hire() {

    const [data, setData] = useState({})

    const getJob = async () => {

		await axios.get(`http://localhost:8000/api/getJob`)
			.then(result => {
					console.log(result.data)
				})
			.catch(err => {
				console.log("error")
			})

	}

    useEffect(()=> {
        getJob()
    }, [])


    return <div>
        <div className="w-[90vw] h-[184px] back pl-[10vw] ml-[32px] flex-col justify-start items-center gap-2.5 inline-flex" >
            <div className="self-stretch h-[120px] flex-col justify-center items-start gap-6 flex">
                <div className="justify-start items-center gap-6 inline-flex">
                    <div className="p-2 bg-slate-200 rounded-2xl justify-start items-center gap-2.5 flex">
                        <Image className="w-12 h-12 relative" src={userPlus} alt='userPlus' />
                    </div>
                    <div className="flex-col justify-center items-start gap-2 inline-flex">
                        <div className="text-neutral-600 text-[32px] font-normal font-['Rubik'] capitalize">My Jobs</div>
                        <div className="text-black text-opacity-50 text-xs font-normal font-['Rubik']">Lorem ipsum dolor sit amet consectetur. Tellus nulla ipsum faucibus consectetur. Felis nunc in tempor aenean purus.</div>
                    </div>
                </div>
                <div className="justify-start items-center gap-2.5 inline-flex">
                    <button className="w-[119px] px-6 py-2 bg-sky-700 rounded-lg justify-center items-center gap-2.5 flex">
                        <div className="text-slate-200 text-sm font-normal font-['Rubik'] capitalize">Dashboard</div>
                    </button>
                    <button className="w-[103px] px-6 py-2 bg-slate-300 rounded-lg justify-center items-center gap-2.5 flex">
                        <div className="text-sky-700 text-sm font-normal font-['Rubik'] capitalize">My Jobs</div>
                    </button>
                    <button className="w-[118px] px-6 py-2 bg-slate-300 rounded-lg justify-center items-center gap-2.5 flex">
                        <div className="text-sky-700 text-sm font-normal font-['Rubik'] capitalize">Applicants</div>
                    </button>
                    <button className="w-[116px] px-6 py-2 bg-slate-300 rounded-lg justify-center items-center gap-2.5 flex">
                        <div className="text-sky-700 text-sm font-normal font-['Rubik'] capitalize">Interviews</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
}