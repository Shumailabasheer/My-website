"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-[#F2F0F1] py-9 md:h-[500px]  flex flex-col md:flex-row items-start justify-between px-4">
 
        {/* Left Section */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-start text-black lg:px-14 mt-8">
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
        <div className="relative w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-4">
          {/* Main Image */}
          <Image
            src="/imag.png"
            alt="Main Image"
            width={800}
            height={700}
            className="object-cover lg:mr-56 mx-auto "
          />

        {/* Left Vector Image */}
<Image
  src="/Vector.png"
  alt="Vector Left"
  width={30}
  height={50}
  className="absolute top-20 right-40 sm:top-20 sm:right-80 md:top-24 md:right-72 lg:top-32 lg:right-96"
/>

{/* Right Vector Image */}
<Image
  src="/Vector.png"
  alt="Vector Right"
  width={50}
  height={50}
  className="absolute top-0 right-2 sm:top-2 sm:right-16 md:top-3 md:right-20 lg:top-6 lg:right-40"
/>
        </div>
      </div>
  );
}