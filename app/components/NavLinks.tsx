"use client";
import Image from "next/image";
import { FaBars, FaTimes, FaBell, FaUser } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Optionally lock background scrolling when sidebar is open
    if (!isSidebarOpen) {
      document.body.style.overflow = "hidden"; // Lock scroll
    } else {
      document.body.style.overflow = "auto"; // Restore scroll
    }
  };

  return (
    <div className="relative flex lg:justify-around justify-between lg:px-8 items-center text-center text-xl text-white">
      <div className="lg:max-w-md md:max-w-[12rem] sm:max-w-[10rem] max-w-[7rem]">
        <Link href={"/"}>
          <Image
            src={"/assets/images/Navbar-logo.png"}
            alt="Not Available"
            width={130}
            height={100}
            style={{ height: "auto", width: "auto" }}
            priority
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="lg:text-lg md:text-base text-sm font-medium hidden sm:block">
        <ul className="flex items-center text-center justify-center flex-wrap lg:gap-5 gap-2">
          <li className="hover:text-[#f3a13f]">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#f3a13f]">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-[#f3a13f]">
            <Link href="/blog">Blogs</Link>
          </li>
          <li className="hover:text-[#f3a13f]">
            <Link href="/faq">Faq</Link>
          </li>
          <li className="hover:text-[#f3a13f]">
            <Link href="/team">Team</Link>
          </li>
          <li className="hover:text-[#f3a13f]">
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className="relative">
            <div
              className="flex items-center cursor-pointer hover:text-[#f3a13f]"
              onClick={toggleMenu}
            >
              Pages
              <FiChevronDown className="ml-1 transform translate-y-[2px]" />
            </div>

            {/* Dropdown menu */}
            {isMenuOpen && (
              <ul className="absolute left-0 mt-2 w-40  bg-[#253138] rounded-md shadow-lg">
                <li className="px-4 py-2 hover:text-[#f3a13f]">
                  <Link href="/partner">Be Partner</Link>
                </li>
                <li className="px-4 py-2 hover:text-[#f3a13f]">
                  <Link href="/service">Service</Link>
                </li>
                <li className="px-4 py-2 hover:text-[#f3a13f]">
                  <Link href="/404">404</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Sidebar Toggle and Icons */}
      <div className="flex justify-evenly items-center text-center flex-wrap gap-1 lg:gap-6">
        <div className="sm:hidden block">
          {/* Menu / Sidebar Toggle Button */}
          {!isSidebarOpen ? (
            <FaBars
              className="text-xl cursor-pointer hover:text-[#aaa]"
              onClick={toggleSidebar}
            />
          ) : null}
        </div>
        <div className="hidden sm:block ">
          <Link
            href="/contact"
            className="bg-[#f3a13f] hover:bg-[#e3bf94] tracking-tighter lg:text-lg text-sm py-2 md:px-3 px-2 rounded-[5%] font-medium"
          >
            Contact Us
          </Link>
        </div>

        <div>
          <FaUser className="lg:text-2xl md:text-xl text-base cursor-pointer hover:text-[#aaa]" />
        </div>
      </div>

      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <div className="fixed inset-y-0 right-0 sm:max-w-[25%] md:w-[45%] z-50 bg-white flex flex-col justify-start text-start items-start py-8 px-6 gap-6 sm:hidden shadow-lg transition-transform transform translate-x-0">
          {/* Close icon inside the sidebar */}
          <FaTimes
            className="text-2xl absolute top-4 right-4 cursor-pointer text-[#333] hover:text-[#333333bf]"
            onClick={toggleSidebar}
          />
          <ul className="flex flex-col gap-4 text-black w-full">
            <li className="hover:text-[#fa13f]">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#fa13f]">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-[#fa13f]">
              <Link href="/blog">Blogs</Link>
            </li>
            <li className="hover:text-[#fa13f]">
              <Link href="/faq">FAQ</Link>
            </li>
            <li className="hover:text-[#fa13f]">
              <Link href="/team">Team</Link>
            </li>
            <li className="hover:text-[#fa13f]">
              <Link href="/pricing">Pricing</Link>
            </li>

            <li className="relative">
              <div
                className="flex items-center cursor-pointer hover:text-[#f3a13f]"
                onClick={toggleMenu}
              >
                Pages
                <FiChevronDown className="sm:ml-16 ml-8 transform translate-y-[2px]" />
              </div>
              {isMenuOpen && (
                <ul className="mt-2 rounded-md shadow-md">
                  <li className="px-4 py-2 hover:text-[#f3a13f]">
                    <Link href="/partner">Be Partner</Link>
                  </li>
                  <li className="px-4 py-2 hover:text-[#f3a13f]">
                    <Link href="/service">Services</Link>
                  </li>
                  <li className="px-4 py-2 hover:text-[#f3a13f]">
                    <Link href="/404">404</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="hover:text-[#fa13f] mt-6 sm:ml-0 ml-[-.5rem] text-center">
              <Link
                href="/contact"
                className="bg-[#f3a13f] hover:bg-[#e3bf94] text-sm sm:text-base  py-2 px-2 text-white sm:pr-10 rounded-md font-medium"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavLinks;
