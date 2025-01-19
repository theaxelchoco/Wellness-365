"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactsModal, setShowContactsModal] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-[#FFF5D7]">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">Welcome to Wellness365</h1>
      <p className="text-lg text-gray-700 text-center">
        Your personal path to a healthier mind, every day.
      </p>
      {/* Home Section */}
      <section id="home" className="w-full text-center mb-16">
        
        <button
          onClick={() => setShowModal(true)}
          className="text-blue-500 hover:underline mb-4"
        >
          Learn How Wellness365 Can Help
        </button>
        <br />
        <button
          onClick={() => setShowAboutModal(true)}
          className="text-blue-500 hover:underline mb-4"
        >
          About Us (Modal)
        </button>
        <br />
        <button
          onClick={() => setShowContactsModal(true)} 
          className="text-blue-500 hover:underline"
        >
          Contacts (Modal)
        </button>
      </section>

      {/* Help Modal */}
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

      {/* About Us Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#FDCD93] text-black p-8 rounded-lg shadow-lg relative max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2 border-b-2 border-black pb-2">About Us</h2>
            <p className="mb-6">
              At Wellness365, we are dedicated to helping individuals dealing with isolation by providing a platform that encourages daily journaling of positive thoughts. Our service offers personalized tasks that are designed to enhance mental well-being and build resilience over the course of the year. Each task is thoughtfully crafted to promote mindfulness, self-care, and healthy habits, helping users improve their mindset one step at a time. With Wellness365, you're not alone on your journey—our goal is to guide you toward a happier and more fulfilling life.
            </p>
            <button
              onClick={() => setShowAboutModal(false)}
              className="absolute top-2 right-2 text-black hover:text-gray-600 font-bold text-xl w-8 h-8 flex items-center justify-center rounded-full border-2 border-black bg-[#FDCD93]"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Contacts Modal */}
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
              onClick={() => setShowContactsModal(false)} 
              className="absolute top-2 right-2 text-black hover:text-gray-600 font-bold text-xl w-8 h-8 flex items-center justify-center rounded-full border-2 border-black bg-[#FDCD93]"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      
    </main>
  );
}
