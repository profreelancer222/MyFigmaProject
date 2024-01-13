import Image from 'next/image'
import Link from 'next/link'
import john from '../public/assest/avatar/john.png'
import logo from '../public/assest/pictures/logo.png'
import search from '../public/assest/icons/searchHeader.svg'
import userPlus from '../public/assest/icons/userPlus.svg'
import chart from '../public/assest/icons/chart.svg'
import train from '../public/assest/icons/train.svg'
import community from '../public/assest/icons/community.svg'
import bell from '../public/assest/icons/bell.svg'

export default function header() {
   return <div className="mx-[10vw] w-[80vw] h-[69px] px-8 py-3.5 bg-white justify-center items-center gap-8 inline-flex">
      <div className="grow shrink basis-0 h-[47px] justify-start items-center gap-8 flex">
         <div className="w-[231px] h-[29px] justify-center items-center flex">
            <Image className="w-[231px] h-[29px] " src={logo} alt='logo' />
         </div>
         <div className="grow shrink basis-0 h-8 pl-20 justify-center items-start gap-[54px] flex">
            <div className="flex-col justify-center items-center gap-2 inline-flex">
               <div className="flex-col justify-center items-center gap-4 flex">
                  <div className="justify-center items-center gap-1.5 inline-flex">
                     <Image className="w-15 h-15 " src={userPlus} alt='userPuls' />
                     <div className="text-blue-950 text-xl font-normal font-['Rubik']">Hire</div>
                  </div>
               </div>
            </div>
            <div className="flex-col justify-center items-center gap-1 inline-flex">
               <div className="justify-center items-center gap-1.5 inline-flex">
                  <Image className="w-5 h-5 " src={chart} alt='userPuls' />
                  <div className="text-neutral-600 text-xl font-normal font-['Rubik']">Lead</div>
               </div>
            </div>
            <div className="flex-col justify-center items-center gap-1 inline-flex">
               <div className="justify-center items-center gap-1.5 inline-flex">
                  <div className="w-5 h-5 px-[3.33px] py-[2.50px] justify-center items-center flex">
                     <Image className="w-[13.33px] h-[15px] " src={train} alt='userPuls' />
                  </div>
                  <div className="text-neutral-600 text-xl font-normal font-['Rubik']">Train</div>
               </div>
            </div>
            <div className="flex-col justify-center items-center gap-1 inline-flex">
               <div className="justify-center items-center gap-1.5 inline-flex">
                  <Image className="w-5 h-5 " src={community} alt='community' />
                  <div className="text-neutral-600 text-xl font-normal font-['Rubik']">Community</div>
               </div>
            </div>
         </div>
         {/* <div className="w-[217px] h-9 px-4 py-2 bg-slate-200 rounded-2xl justify-start items-center gap-2.5 flex">
            <Image className="w-5 h-5 " src={search} alt='search' />
            <input className="text-white bg-slate-200 text-sm font-normal font-['Rubik']" placeholder='Search'></input>
         </div> */}
         <div className="flex relative items-center">
            <input className="w-[217px] h-6 pl-10 text-black rounded-2xl text-sm font-normal font-['Rubik'] bg-slate-200 placeholder-white outline-[#555555]" placeholder='Search'></input>
            <Image className="absolute left-[10px]" src ={search} alt='alt'  />
         </div>
         <Image className="w-6 h-6 " src={bell} alt='bell' />
         <div className="justify-start items-center gap-3 flex">
            <div className="w-10 h-10 justify-center items-center flex">
               <Image className="w-10 h-10 rounded-full border-2 border-slate-200" src={john} alt='john' />
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
               <div className="text-neutral-600 text-xl font-medium font-['Rubik']">John Doe</div>
               <div className="text-zinc-400 text-base font-normal font-['Rubik']">Hiring Manager</div>
            </div>
         </div>
      </div>
   </div>
}