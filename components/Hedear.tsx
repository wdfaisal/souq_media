'use client'
import React from 'react'
import Link from 'next/link'
import {useState}  from 'react';
import { instagram,linkedin,logo,github_icon,menu2 } from '@/public/assets';
import Image from 'next/image';
import {motion} from 'framer-motion'

function Hedear() {
  const [isopen ,setisopen] = useState(false);

  const openmenu =()=>{
    setisopen(!isopen);
    console.log(isopen);
  }
  return (
    <>
    <nav className='max-container w-full flex items-center justify-between pt-5 px-10 '>
        <div className=' hidden sm:flex gap-5'>
            <Link href="/" className=' cursor-pointer hover:text-[#334155] border-b-2 '>Home</Link>
            <Link href="/" className=' cursor-pointer hover:text-[#334155]'>Projects</Link>
            <Link href="#Experience" className=' cursor-pointer hover:text-[#334155]'>Experience</Link>
            <Link href="/" className=' cursor-pointer hover:text-[#334155]'>About</Link>
        </div>

        {/*togelmenu button in mobile dev */}
        <button onClick={openmenu}>
          <Image className='sm:hidden' src={menu2} alt='logo' width={48} height={48}/>
        </button>

        <div className=" sm:absolute left-1/2 top-3">
          <button className=' hover:scale-105'>
          <Image className='' src={logo} alt='logo' width={50} height={50}/>
          </button>
        </div>

        <div className='flex items-center gap-3'>
        <Image src={instagram} alt='insgram' width={26} height={26}/>
        <Image src={linkedin} alt='linkedin' width={26} height={26}/>
        <Image src={github_icon} alt='linkedin' width={26} height={26}/>
        <button className=' border-2 py-1 px-2 rounded-md hover:bg-[#151B20] hover:text-white' >Download CV</button>
        </div>
        
    </nav>
    <div className={' hidden w-full bg-black text-yellow-100 h-10 ml-2 mr-3 lg:hidden ${}'} >
      home

    </div>
    </>
  )
}

export default Hedear