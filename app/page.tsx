"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Inter, Khula } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const khula = Khula({ subsets: ['latin'], weight: '800' })

const Modal = ({ content, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded shadow-lg w-96 h-96 mx-4 relative">
      <button onClick={onClose} className="absolute top-2 right-2">
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div>{content}</div>
    </div>
  </div>
)

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const handlePopup = (content: string) => {
    setModalContent(content)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalContent('')
  }

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
            <li className={`${inter.className} font-bold cursor-pointer`} onClick={() => handlePopup('About Us content')}>
              About Us
            </li>

            <li className={`${inter.className} font-bold cursor-pointer`} onClick={() => handlePopup('Contact content')}>
              Contact
            </li>

            <li className={`${inter.className} font-bold cursor-pointer`} onClick={() => handlePopup('Help content')}>
              Help
            </li>

            <li className={`${inter.className} font-bold`}>
              <Link href="/journal">Journal</Link>
            </li>
          </ol>

          <div className="flex items-center mr-4">
            <Image src="/streak.png" alt="Streak Icon" width={24} height={24} />
            <span className={`${inter.className} font-bold ml-2 text-lg`}>5</span>
          </div>
        </nav>
      </div>

      {isOpen && <Modal content={modalContent} onClose={closeModal} />}
    </main>
  )
}
