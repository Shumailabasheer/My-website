import Image from "next/image";
import Link from "next/link";
export default function Sale() {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <div className="w-[90%]">
        {/* Top side */}
        <div>
          <h2 className="text-3xl font-bold mt-4 flex justify-center items-center">NEW ARRIVALS</h2>
        </div>

        {/* Products */}
        <div className="flex flex-nowrap justify-start items-start gap-16 mt-7 overflow-x-auto scrollbar-hide ml-14">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            {/* Image */}
            <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/image 7.png" alt="image" width={150} height={100} />
            </div>
            {/* Title and Price */}
            <div className="mt-2 text-center">
              <span className="font-bold block">T-SHIRT WITH TAPE DETAILS</span>
              <span className="text-black font-bold block">$120</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center">
            {/* Image */}
            <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 33.png" alt="image" width={150} height={100} />
            </div>
            {/* Title and Price */}
            <div className="mt-2 text-center">
              <span className="font-bold block">SKINNY FIT JEANS</span>
              <span className="text-black font-bold block">$240</span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center">
            {/* Image */}
            <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 34.png" alt="image" width={150} height={100} />
            </div>
            {/* Title and Price */}
            <div className="mt-2 text-center">
              <span className="font-bold block">CHECKERED SHIRT</span>
              <span className="text-black font-bold block">$180</span>
            </div>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center">
            {/* Image */}
            <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 38.png" alt="image" width={150} height={100} />
            </div>
            {/* Title and Price */}
            <div className="mt-2 text-center">
              <span className="font-bold block">SLEEVE STRIPED T-SHIRT</span>
              <span className="text-black font-bold block">$130</span>
            </div>
          </div>
        </div>

      </div>
      <Link href="/NewArrivals">
      <button className="py-2 px-4 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 mt-20 rounded-md">View All</button>
  </Link>

   {/* Horizontal Line */}
   <hr className="w-full border-t-2 border-zinc-100 my-6" />
   {/* Sale Section */}
   <div className="w-full flex flex-col items-center mt-10">
     <div className="w-[90%]">
       {/* Top side */}
       <div>
         <h2 className="text-3xl font-bold mt-4 flex justify-center items-center">
           TOP SELLING
         </h2>
       </div>

       {/* Products */}
       <div className="flex flex-nowrap justify-start items-start gap-16 mt-7 overflow-x-auto scrollbar-hide ml-14">
         {/* Product 1 */}
         <div className="flex flex-col items-center">
           <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
             <Image src="/Frame 32.png" alt="image" width={150} height={100} />
           </div>
           <div className="mt-2 text-center">
             <span className="font-bold block">Vertical Striped Shirt</span>
             <span className="text-black font-bold block">$212</span>
           </div>
         </div>

         {/* Product 2 */}
         <div className="flex flex-col items-center">
           <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
             <Image src="/Frame 33 (1).png" alt="image" width={150} height={100} />
           </div>
           <div className="mt-2 text-center">
             <span className="font-bold block">Courage Graphic T-Shirt</span>
             <span className="text-black font-bold block">$145</span>
           </div>
         </div>

         {/* Product 3 */}
         <div className="flex flex-col items-center">
           <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
             <Image src="/Frame 34 (1).png" alt="image" width={150} height={100} />
           </div>
           <div className="mt-2 text-center">
             <span className="font-bold block">Loose fit Bermuda Shorts</span>
             <span className="text-black font-bold block">$80</span>
           </div>
         </div>

         {/* Product 4 */}
         <div className="flex flex-col items-center">
           <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
             <Image src="/Frame 38 (1).png" alt="image" width={150} height={100} />
           </div>
           <div className="mt-2 text-center">
             <span className="font-bold block ">Faded Skinny Jeans</span>
             <span className="text-black font-bold block">$210</span>
           </div>
         </div>
       </div>
     </div>
     <Link href="/NewArrivals">
     <button className="py-2 px-4 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 mt-20 rounded-md">
       View All
     </button>
</Link>

  </div>
 </div>
);
}
