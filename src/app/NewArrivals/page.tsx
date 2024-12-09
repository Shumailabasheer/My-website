import Image from "next/image"

export default function Shop() {
  return (
    <div className="flex ml-20 mt-10">
      {/* Sidebar */}
      <aside className="w-60 p-3 border-r">
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        {/* Categories */}
        <div className="mb-4">
          <h3 className="font-medium">Categories</h3>
          <ul className="space-y-2">
            <li>T-shirts</li>
            <li>Shorts</li>
            <li>Shirts</li>
            <li>Hoodies</li>
            <li>Jeans</li>
          </ul>
        </div>

        {/* Price */}
        <div className="mb-4">
          <h3 className="font-medium">Price</h3>
          <input type="range" min="50" max="200" className="w-[200px]" />
          <p className="text-sm mt-2">$50 - $200</p>
        </div>

        {/* Colors */}
        <div className="mb-4">
          <h3 className="font-medium">Colors</h3>
          <div className="flex gap-2 mt-2">
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
          </div>
        </div>

        {/* Size */}
        <div className="mb-4">
          <h3 className="font-medium">Size</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="border px-2 py-1 rounded">Small</button>
            <button className="border px-2 py-1 rounded">Medium</button>
            <button className="border px-2 py-1 rounded">Large</button>
          </div>
        </div>

        {/* Apply Filters Button */}
        <button className="w-full bg-black text-white py-2 mt-4 rounded">
          Apply Filter
        </button>
      </aside>

      {/* Product Grid */}
      <div className="w-3/4 p-4">
        <h2 className="text-3xl font-bold mb-6 mt-3">Casual</h2>

        <div className="grid grid-cols-3 gap-6 mr-6">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[150px] h-[160px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 33 (2).png" alt="image" width={150} height={100} />
            </div>
            <div className="mt-2 text-center">
              <span className="font-bold block">Gradient Graphic T-shirt</span>
              <span className="text-black font-bold block">$145</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[150px] h-[160px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 34 (2).png" alt="image" width={150} height={100} />
            </div>
            <div className="mt-2 text-center">
              <span className="font-bold block">Polo with Tipping Details</span>
              <span className="text-black font-bold block">$160</span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <div className="w-[150px] h-[160px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 38 (2).png" alt="image" width={150} height={100} />
            </div>
            <div className="mt-2 text-center">
              <span className="font-bold block">Black Striped T-shirt</span>
              <span className="text-black font-bold block">$120</span>
            </div>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center">
            <div className="w-[150px] h-[160px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 33.png" alt="image" width={150} height={100} />
            </div>
            <div className="mt-2 text-center">
              <span className="font-bold block">SKINNY FIT JEANS</span>
              <span className="text-black font-bold block">$240</span>
            </div>
          </div>


  {/* Product 5*/}
  <div className="flex flex-col items-center">
            <div className="w-[150px] h-[160px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 34.png" alt="image" width={150} height={100} />
            </div>
            <div className="mt-2 text-center">
              <span className="font-bold block">CHECKERED SHIRT</span>
              <span className="text-black font-bold block">$180</span>
            </div>
          </div>



  {/* Product 6 */}
  <div className="flex flex-col items-center">
            <div className="w-[150px] h-[160px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 38.png" alt="image" width={150} height={100} />
            </div>
            <div className="mt-2 text-center">
              <span className="font-bold block">SLEEVE STRIPED T-SHIRT</span>
              <span className="text-black font-bold block">$130</span>
            </div>
          </div>

  {/* Product 7*/}
  <div className="flex flex-col items-center">
            <div className="w-[150px] h-[160px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 32.png" alt="image" width={150} height={100} />
            </div>
            <div className="mt-2 text-center">
              <span className="font-bold block">VERTICAL STRIPED SHIRT</span>
              <span className="text-black font-bold block">$212</span>
            </div>
          </div>


            {/* Product 8 */}
            <div className="flex flex-col items-center">
            <div className="w-[150px] h-[160px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 33 (1).png" alt="image" width={150} height={100} />
            </div>
            <div className="mt-2 text-center">
              <span className="font-bold block">COURAGE GRAPHIC T-SHIRT</span>
              <span className="text-black font-bold block">$145</span>
            </div>
          </div>

            {/* Product 8*/}
            <div className="flex flex-col items-center">
            <div className="w-[150px] h-[160px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 34 (1).png" alt="image" width={150} height={100} />
            </div>
            <div className="mt-2 text-center">
              <span className="font-bold block">LOOSE FIT BERMUDA SHORTS</span>
              <span className="text-black font-bold block">$80</span>
            </div>
          </div>



          {/* Add more products here as needed */}
        </div>
      </div>
    </div>
  );
}