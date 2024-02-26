import React from 'react'
import Image from 'next/image'
import facboock from '@/public/assets/facebook.png'
import instagram from '@/public/assets/instagram.svg'
import twitar from '@/public/assets/twitter.png'

function SocialIcons() {
  return (
    <div className='flex flex-row gap-3'>
        <Image src={facboock}alt='facboock' width={24}height={24}/>
        <Image src={instagram}alt='facboock' width={24}height={24}/>
        <Image src={twitar}alt='facboock' width={24}height={24}/>
        <Image src={facboock}alt='facboock' width={24}height={24}/>
    </div>
  )
}

export default SocialIcons