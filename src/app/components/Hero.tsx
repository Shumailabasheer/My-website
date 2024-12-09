"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-[#F2F0F1] py-9">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        {/* Left Section */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-start text-black lg:px-14">
          {/* Heading and Description */}
          <h1 className="text-4xl lg:text-[40px] font-extrabold mb-4 text-center lg:text-left">
            FIND CLOTHES <br />THAT MATCH <br />YOUR STYLE
          </h1>
          <p className="text-sm lg:text-base mb-6 text-center lg:text-left">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          {/* Shop Now Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-black text-white text-sm font-bold rounded-md px-6 py-2 hover:bg-gray-800">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          {/* Main Image */}
          <Image
            src="/imag.png"
            alt="Main Image"
            width={950}
            height={700}
            className="object-cover lg:mr-44 mx-auto"
          />

          {/* Left Vector Image */}
          <Image
            src="/Vector.png"
            alt="Vector Left"
            width={30}
            height={50}
            className="absolute top-32 right-96 hidden lg:block"
          />

          {/* Right Vector Image */}
          <Image
            src="/Vector.png"
            alt="Vector Right"
            width={50}
            height={50}
            className="absolute top-4 right-24 hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}