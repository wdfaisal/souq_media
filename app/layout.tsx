

import type { Metadata } from 'next'
import { Cairo,IBM_Plex_Sans_Arabic,Tajawal,Aref_Ruqaa} from 'next/font/google'
import './globals.css'
import Hedear from '@/components/Hedear'

const tajwal = Tajawal({
  weight: ['200','300','400','500','700'],
  subsets: ['arabic'],

})

const cairo = Cairo({
  weight: ['200','300','400','500','700'],
  subsets: ['arabic'],
})

const iBM_Plex_Sans_Arabic = IBM_Plex_Sans_Arabic({
  weight: ['100','200','300','400','500','700'],
  subsets: ['arabic'],
})



export const metadata: Metadata = {
  title: 'Souq Media| سوق ميديا ',
  description: ' ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html className={tajwal.className} lang="ar" dir='rtl'>
    
      <body >
        {children}</body>
    </html>
    </>
  )
}
