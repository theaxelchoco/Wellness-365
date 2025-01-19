"use client";

import './globals.css';
import { Josefin_Sans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const josefin_sans = Josefin_Sans({ subsets: ['latin'], weight: '400' });

const Modal = ({ content, onClose }: { content: string; onClose: () => void }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded shadow-lg w-96 h-96 mx-4 relative">
      <button onClick={onClose} className="absolute top-2 right-2">
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div>{content}</div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handlePopup = (content: string) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent('');
  };

  return (
    <>
      <nav className="fixed left-0 top-0 flex w-full justify-between bg-[#549369] py-2 backdrop-blur-2xl dark:bg-[#549369] lg:bg-[#549369] lg:py-2 z-10">
        <div className="flex items-center ml-4">
          <button onClick={() => setIsOpen(!isOpen)} className="mr-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <p className={`${josefin_sans.className} text-3xl font-extrabold text-white`}>Wellness365</p>
        </div>

        <ol className="flex flex-row gap-30 mx-auto items-center text-lg">
          <li className="font-bold cursor-pointer text-white" onClick={() => handlePopup('About Us content')}>
            About Us
          </li>
          <li className="font-bold cursor-pointer text-white" onClick={() => handlePopup('Contact content')}>
            Contact
          </li>
          <li className="font-bold cursor-pointer text-white" onClick={() => handlePopup('Help content')}>
            Help
          </li>
          <li className="font-bold text-white">
            <Link href="/journal">Journal</Link>
          </li>
        </ol>

        <div className="flex items-center mr-4">
          <Image src="/streak.png" alt="Streak Icon" width={24} height={24} />
          <span className="font-bold ml-2 text-lg text-white">5</span>
        </div>
      </nav>

      {isOpen && <Modal content={modalContent} onClose={closeModal} />}
    </>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${josefin_sans.className} bg-[#FFFFF5]`}>
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}