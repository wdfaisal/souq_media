import React from 'react'
import Image from 'next/image'
import { logo,awesome,hight_q,pixel,icon1,icon2 } from '@/public/assets'
import { Url } from 'url'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface cardprops{
  title:string,
  text?:string,
  url :StaticImport,
}

function Card({title,text,url}:cardprops){

  return(
    <div className='flex flex-col items-center justify-center py-3 px-5 rounded-lg h-96 w-80 my-20 border-2 lg:border-0 lg:w-72 '>

      <Image src={url} width={100} height={100} alt='logo'/>
      

      <h2 className='font-bold text-2xl capitalize mt-5'>{title} </h2>
      <p className=' font-sans text-lg text-center my-3 text-[#866B90] '>{text ? text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad inventore explicabo dignissimos rerum consequuntur dolore debitis at. Corporis, magni? Nam.'}</p>

    </div>
  )
}

function Cards() {
  return (
    <div className=''>
    <div className=' max-container-extra flex flex-col justify-between items-center py-10 lg:flex-row lg:h-[80vh] '>
      <Card title='High Quality' text='The production of high quality that work well on desktop is responsive and adaptive design. , flaw-free projects fully meets all expectations.' url={awesome}/>
      <Card title='High Quality' url={pixel}/>
      <Card title='High Quality' url={hight_q}/>
      
    </div>
    </div>
  )
}

export default Cards