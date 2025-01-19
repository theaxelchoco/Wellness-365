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
  const [showModal, setShowModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactsModal, setShowContactsModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setShowAboutModal(false);
    setShowContactsModal(false);
    setModalContent('');
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed left-0 top-0 flex w-full justify-between bg-[#549369] py-2 backdrop-blur-2xl dark:bg-[#549369] lg:bg-[#549369] lg:py-2 z-10">
        <div className="flex items-center ml-4">
          {/* <button onClick={() => setIsOpen(!isOpen)} className="mr-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button> */}
          <Link href="/">
            <p className={`${josefin_sans.className} text-3xl font-extrabold text-white cursor-pointer`}>
              Wellness365
            </p>
          </Link>
        </div>

        <ol className="flex flex-row gap-30 mx-auto items-center text-lg">
          <li className="font-bold cursor-pointer text-white" onClick={() => setShowAboutModal(true)}>
            About Us
          </li>
          <li className="font-bold cursor-pointer text-white" onClick={() => setShowContactsModal(true)}>
            Contact
          </li>
          <li className="font-bold cursor-pointer text-white" onClick={() => setShowModal(true)}>
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

      {/* Modals */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#FDCD93] text-black p-8 rounded-lg shadow-lg relative max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2 border-b-2 border-black pb-2">How Wellness365 Can Help</h2>
            <p className="mb-6">
              <strong>Journal:</strong> This is where you can view the good things that occurred throughout the year. Check here to see how far you came!
            </p>
            <p className="mb-6">
              <strong>Daily Challenge:</strong> A challenge to help with shifting to a more positive and encouraging mindset by accomplishing tasks based on the input provided to aid self-improvement.
            </p>
            <p className="mb-6">
              <strong>Streaks:</strong> In the top right of the navigation bar, see your activity streak which updates by interacting daily!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-black hover:text-gray-600 font-bold text-xl w-8 h-8 flex items-center justify-center rounded-full border-2 border-black bg-[#FDCD93]"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {showAboutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#FDCD93] text-black p-8 rounded-lg shadow-lg relative max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2 border-b-2 border-black pb-2">About Us</h2>
            <p className="mb-6">
              At Wellness365, we are dedicated to helping individuals dealing with isolation by providing a platform that encourages daily journaling of positive thoughts. Our service offers personalized tasks that are designed to enhance mental well-being and build resilience over the course of the year. Each task is thoughtfully crafted to promote mindfulness, self-care, and healthy habits, helping users improve their mindset one step at a time. With Wellness365, you're not alone on your journey—our goal is to guide you toward a happier and more fulfilling life.
            </p>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black hover:text-gray-600 font-bold text-xl w-8 h-8 flex items-center justify-center rounded-full border-2 border-black bg-[#FDCD93]"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {showContactsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#FDCD93] text-black p-8 rounded-lg shadow-lg relative max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2 border-b-2 border-black pb-2">Contact Us</h2>
            <p className="mb-6">
              If you have any questions or need assistance, feel free to reach out to us. You can contact us through the following channels:
              <ul>
                <li>Telephone: +1 (123) 456-7890</li>
                <li>Email Address: example123@gmail.com</li>
                <li>Address: 123 Alphabet Drive  Los Angeles, CA 90210, USA</li>
              </ul>
            </p>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black hover:text-gray-600 font-bold text-xl w-8 h-8 flex items-center justify-center rounded-full border-2 border-black bg-[#FDCD93]"
            >
              ✕
            </button>
          </div>
        </div>
      )}
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