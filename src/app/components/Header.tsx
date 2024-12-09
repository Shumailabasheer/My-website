"use client";

import Link from "next/link"
import { CiSearch} from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true);

  return (
    <div>
      {/* Top Bar */}
      {showTopBar && (
        <div className="w-full bg-black text-white flex justify-center items-center py-2 px-4 text-sm">
          <span>
            Sign up and get 20% off your first order.{" "}
            <span className="font-bold cursor-pointer underline hover:text-gray-300">
              Sign Up Now
            </span>
          </span>
          <button
            onClick={() => setShowTopBar(false)}
            className="text-white hover:text-gray-400 text-lg ml-40"
          >
            ✕
          </button>
        </div>
      )}

      {/* Navbar */}
      <div className="w-full h-[60px] flex justify-between items-center px-4 sm:px-8 md:px-16 border-b-4">
        {/* Left Side */}
        <div className="flex items-center">
          <h1 className="text-xl sm:text-2xl font-bold">SHOPE.CO</h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-between w-full max-w-[800px]">
          {/* Navigation Links */}
          <ul className="flex items-center gap-8 font-semibold">
        <li><Link href="/">Shop</Link></li>
       <li><Link href="/OnSale">On Sale</Link></li>
       <li><Link href="/NewArrivals">New Arrivals</Link></li>
       <li><Link href="/Brands">Brands</Link></li>
     </ul>
          {/* Search Bar and Icons */}
          <div className="flex items-center space-x-5">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center bg-slate-100 rounded-md px-8 py-2">
              <input
                type="text"
                placeholder="Search For Products..."
                className="bg-slate-100 text-sm outline-none"
              />
              <CiSearch />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <IoCartOutline className="text-xl" />
              <Image src="/Frame.png" alt="image" width={30} height={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex items-center justify-between px-4 py-2">
        <div>
          <h1 className="text-xl font-bold">SHOPE.CO</h1>
        </div>
        {/* Mobile Icons */}
        <div className="flex items-center space-x-4">
          <IoCartOutline className="text-xl" />
          <Image src="/Frame.png" alt="image" width={30} height={20} />
        </div>
      </div>
    </div>
  );
}