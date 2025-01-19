"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Inter, Khula } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const khula = Khula({ subsets: ['latin'], weight: '800' })

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <nav className="fixed left-0 top-0 flex w-full justify-between bg-[#549369] py-2 backdrop-blur-2xl dark:bg-[#549369] lg:bg-[#549369] lg:py-2">
          <div className="flex items-center ml-4">
            <button onClick={() => setIsOpen(!isOpen)} className="mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <p className={`${khula.className} text-3xl font-extrabold`}>Wellness365</p>
          </div>
          
          <ol className="flex flex-row gap-30 mx-auto items-center text-lg">
            <li className={`${inter.className} font-bold`}>
              <a>About Us</a>
            </li>

            <li className={`${inter.className} font-bold`}>
              Contact
            </li>

            <li className={`${inter.className} font-bold`}>
              Help
            </li>

            <li className={`${inter.className} font-bold`}>
              Journal
            </li>
          </ol>

          <div className="flex items-center mr-4">
            <Image src="/streak.png" alt="Streak Icon" width={24} height={24} />
            <span className={`${inter.className} font-bold ml-2 text-lg`}>5</span>
          </div>
        </nav>
      </div>
    </main>
  )
}
