"use client"
import book from '../../../public/assest/icons/book.svg'
import search from '../../../public/assest/icons/search.svg'
import filter from '../../../public/assest/icons/filter.svg'
import post from '../../../public/assest/icons/post.svg'
import avatar from '../../../public/assest/icons/avatar.svg'
import money from '../../../public/assest/icons/money.svg'
import note from '../../../public/assest/icons/note.svg'
import previous from '../../../public/assest/icons/previous.svg'
import Link from 'next/link'
import next from '../../../public/assest/icons/next.svg'
import Image from 'next/image'
import Hire from '../hire/hire'
import { useEffect, useState } from 'react';
import { isEmpty } from 'is-empty';
import { sign } from 'crypto';
import axios from 'axios';


export default function content() {


    const [data, setData] = useState([])

    const getJob = async () => {

        await axios.get(`http://localhost:8000/api/getJob`)
            .then(result => {
                setData(result.data)
                console.log(data)
            })
            .catch(err => {
                console.log("error")
            })

    }

    useEffect(() => {
        getJob()
    }, []) 



    return <div className=''>
        <div className="w-[80vw] p-6 mx-[10vw] bg-white rounded-2xl flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="w-6 h-6 px-1 py-[3px] justify-center items-center flex">
                    <Image className="w-4 h-[18px] relative" src={book} alt='book' />
                </div>
                <div className="text-neutral-600 text-base font-normal font-['Rubik']">My All Jobs</div>
                <div></div>
                <div className="grow shrink basis-0 h-8 justify-end items-start gap-2.5 flex">
                    <div className="w-[141px] h-8 p-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 flex">
                        <Image className="w-[18px] h-[18px] relative" src={search} alt='search' />
                        <div className="text-zinc-400 text-sm font-normal font-['Rubik']">Search</div>
                    </div>
                    <div className="h-8 px-2 py-1 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 flex">
                        <Image className="w-[18px] h-[18px] relative" src={filter} alt='search' />
                        <div className="grow shrink basis-0 text-zinc-400 text-sm font-normal font-['Rubik']">Filter</div>
                    </div>
                    <Link href={'/job/post'}><button className="w-[168px] px-6 py-2 bg-indigo-900 rounded-lg justify-center items-center gap-2.5 flex">
                        <div className="w-5 h-5 pl-[3.33px] pr-[2.61px] pt-[1.67px] pb-[1.63px] justify-center items-center flex">
                            <Image className="w-[14.06px] h-[16.70px] relative" src={post} alt='post' />
                        </div>
                        <div className="text-slate-200 text-sm font-normal font-['Rubik'] capitalize">Post new job</div>
                    </button></Link>
                </div>
            </div>
            {data.map((item: any ) => (
            <div className="self-stretch h-auto flex-col justify-start items-start flex">
                <div className="self-stretch py-2 border-b border-black border-opacity-0 justify-start items-center gap-3 inline-flex">
                    <div className="w-10 h-10 bg-slate-200 rounded-[40px] justify-start items-start gap-2.5 flex">
                        <Image src={avatar} alt='avatar' />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                        <div className="self-stretch justify-start items-center gap-6 inline-flex">
                            <div className="grow shrink basis-0 h-6 justify-between items-center flex">
                                <div className="grow shrink basis-0 text-neutral-600 text-xl font-normal font-['Rubik']">{item.title}</div>
                            </div>
                            <div className="justify-start items-start gap-2 flex">
                                <div className="justify-start items-center gap-2 flex">
                                    <div className="w-[18px] h-[18px] p-[2.25px] justify-center items-center flex">
                                        <Image src={money} alt='money' />
                                    </div>
                                    <div className="px-4 py-0.5 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 flex">
                                        <div className="text-white text-xs font-normal font-['Rubik']">{item.salaryAmount}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div className="py-0.5 justify-start items-start flex">
                                <div className="w-[18px] h-[18px] px-[3px] py-[1.50px] justify-center items-center flex">
                                    <Image className="w-3 h-[15px] relative" src={note} alt='note' />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 text-zinc-400 text-xs font-light font-['Rubik']">{item.description}</div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
            <div className="self-stretch h-8 flex-col justify-start items-center gap-2.5 flex">
                <div className="justify-start items-start gap-4 inline-flex">
                    <button className="w-9 p-2 bg-white rounded-lg border border-indigo-900 justify-center items-center gap-2.5 flex">
                        <Image src={previous} alt='previous' className="w-5 h-5 relative" />
                    </button>
                    <button className="w-[38px] px-4 py-2 bg-gray-300 rounded-lg justify-center items-center gap-2.5 flex">
                        <div className="text-indigo-900 text-sm font-normal font-['Rubik'] capitalize">1</div>
                    </button>
                    <button className="w-[41px] px-4 py-2 rounded-lg justify-center items-center gap-2.5 flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Rubik'] capitalize">2</div>
                    </button>
                    <button className="w-[41px] px-4 py-2 rounded-lg justify-center items-center gap-2.5 flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Rubik'] capitalize">3</div>
                    </button>
                    <button className="w-9 p-2 bg-white rounded-lg border border-indigo-900 justify-center items-center gap-2.5 flex">
                        <Image src={next} alt='next' className="w-5 h-5 relative" />
                    </button>
                </div>
            </div>
        </div>
    </div>
}