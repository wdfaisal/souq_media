import { Souq_logo, logo, hight_q } from '@/public/assets';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../constants/index'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialIcons from './Ui Components/SocialIcons';

const Footer = () => {
  return (
    <footer className="max-container bg-gray-50 mt-10 flex flex-col min-h-[50vh] ">
      <div className=' flex md:flex-row flex-col gap-20 h-full py-20 '>
        <h1 className=' text-2xl'>لم يكتمل بعد </h1>
        <div className=' flex flex-col items-center justify-center'>
          <Image src={Souq_logo} width={250} height={100} alt='logo'></Image>
        </div>
        <div className='flex flex-col items-center justify-center '>
          <h1 className=' text-2xl '>الخدمات</h1>
          <ul className=' text-center'>
            <li className='mt-3 text-sm'> الطباعه</li>
            <li className='mt-3 text-sm'> التصوير</li>
            <li className='mt-3 text-sm'> التصميم</li>
            <li className='mt-3 text-sm'> التسويق</li>
            <li className='mt-3 text-sm'>تطوير المواقع</li>

          </ul>
        </div>


        <div className='flex flex-col items-center justify-center '>
          <h1 className=' text-2xl font-semibold'>الحملات التسويقيه</h1>
          <ul className=' text-center'>
            <li className='mt-3 text-sm'>خدمات الطباعه</li>
            <li className='mt-3 text-sm'>خدمات التصوير</li>
            <li className='mt-3 text-sm'>خدمات التصميم</li>
            <li className='mt-3 text-sm'>خدمات التسويق</li>
            <li className='mt-3 text-sm'>خدمات تطوير المواقع</li>

          </ul>
        </div>
        <div className='flex flex-col items-center justify-center '>
          <h1 className=' text-2xl font-semibold'>تواصل معنا</h1>
          <ul className=' text-center'>
            <li className='mt-3 text-sm'>خدمات الطباعه</li>
            <li className='mt-3 text-sm'>خدمات التصوير</li>
            <li className='mt-3 text-sm'>خدمات التصميم</li>
            <li className='mt-3 text-sm'>خدمات التسويق</li>
            <li className='mt-3 text-sm'>خدمات تطوير المواقع</li>

          </ul>
        </div>
        <div className='flex flex-col items-center justify-center '>
          <h1 className=' text-2xl font-semibold'>تواصل معنا</h1>
         <SocialIcons/>
        </div>


      </div>
      <div className=' flex flex-row justify-center items-center border-t-[1px] py-5 h-20'>
        <p>جميع الحقوق محفوظه ل<span className='text-[#9E276A] text-lg'>souq.media</span></p>

      </div>
     
    </footer>
  )
  }
export default Footer