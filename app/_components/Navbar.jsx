"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import logo from "../../assets/logosaas.jpg"

const Navbar = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="py-4 md:py-6 relative z-50">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between relative">
              <div className="flex-shrink-0 p-4 sm:p-0">
                <Link
                  href="/"
                  className="flex rounded outline-none font-bold text-3xl focus:ring-gray-900 focus:ring-offset-2"
                >
                  <Image src={logo} alt="logo" width={55} height={55} 
                  />
                  <div className="flex mt-2">
                  Open
                  <span className="text-blue-600">Course</span>.
                  </div>
               
                </Link>
              </div>

              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-900 z-50"
                  onClick={toggleMobileMenu}
                >
                  <span aria-hidden="true">
                    {isMobileMenuOpen ? (
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              </div>

              <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                <a
                  href="#features"
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Pricing
                </a>
                <a
                  href="https://github.com/Aryainguz/opencourse.in"
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Contribute
                </a>
              </div>

              <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                <Link href="/dashboard">
                  <div
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                    role="button"
                  >
                    Dashboard
                  </div>
                </Link>
              </div>
            </div>

            <nav className={`hidden menu w-screen absolute right-0 bg-white z-10 p-5  rounded-b-xl border-2`}>
              <div className="px-1 py-8">
                <div className="grid gap-y-7">
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Features{" "}
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Pricing{" "}
                  </a>
                  <a
                    href="https://github.com/Aryainguz/opencourse.in"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Contribute{" "}
                  </a>
                  <Link href="/dashboard">
                      
                      <div
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                        role="button"
                      >
                        Dashboard
                      </div>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div
          className={`lg:hidden fixed inset-0 z-40 bg-gray-50 transform ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full pt-20">
            <div className="flex flex-col flex-grow justify-center items-center">
              <a
                href="#features"
                className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 mb-8"
                onClick={toggleMobileMenu}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 mb-8"
                onClick={toggleMobileMenu}
              >
                Pricing
              </a>
              <a
                href="https://github.com/Aryainguz/opencourse.in"
                className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 mb-8"
                onClick={toggleMobileMenu}
              >
                Contribute
              </a>
              <Link href="/dashboard">
                <div
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                  role="button"
                >
                  Dashboard
                </div>
              </Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
