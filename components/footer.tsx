import Image from 'next/image'
import Link from 'next/link'
import john from '../public/assest/avatar/john.png'
import logo from '../public/assest/pictures/logo.png'
import svg1 from '../public/assest/icons/socialSvg_1.svg'
import svg2 from '../public/assest/icons/socialSvg_2.svg'
import svg3 from '../public/assest/icons/socialSvg_3.svg'
import svg4 from '../public/assest/icons/socialSvg_4.svg'


export default function footer() {
    return <div className="mx-[1.5vw] w-[97vw] h-[253px] px-8 py-12 bg-slate-200 rounded-2xl flex-col justify-start items-center gap-8 inline-flex">
            <div className="self-stretch h-[157px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch justify-start items-start gap-8 inline-flex">
                    <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-[231px] h-[29px] justify-center items-center inline-flex">
                            <Image className="w-[231px] h-[29px] relative" src={logo} alt='logo'/>
                        </div>
                        <div className="self-stretch grow shrink basis-0 text-blue-950 text-sm font-normal font-['Rubik']">Lorem ipsum dolor sit amet consectetur. Lectus facilisi id bibendum quis consectetur egestas. </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="text-indigo-900 text-lg font-medium font-['Rubik']">Bussiness</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Hire</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Training</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Scaling</div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="text-indigo-900 text-lg font-medium font-['Rubik']">Bussiness</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Hire</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Training</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Scaling</div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="text-indigo-900 text-lg font-medium font-['Rubik']">Bussiness</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Hire</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Training</div>
                        <div className="text-neutral-600 text-base font-normal font-['Rubik']">Scaling</div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="text-indigo-900 text-lg font-medium font-['Rubik']">Fllow Us</div>
                        <div className="justify-start items-start gap-4 inline-flex">
                            <Image src={svg1} className='w-6 h-6' alt='search Image' />
                            <Image src={svg2} className='w-6 h-6' alt='search Image' />
                            <Image src={svg3} className='w-6 h-6' alt='search Image' />
                            <Image src={svg4} className='w-6 h-6' alt='search Image' />
                        </div>
                    </div>
                </div>
                <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                    <div><span className="text-neutral-600 text-sm font-normal font-['Rubik']">Copyright © All rights reserved by </span><span className="text-blue-500 text-sm font-normal font-['Rubik'] underline">Salesmagiq</span></div>
                </div>
            </div>
        </div>
}
