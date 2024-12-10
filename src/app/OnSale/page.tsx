import Image from "next/image";
import Link from "next/link";
export default function ProductDetails() {
  return (
    <div className="w-full bg-white">
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto py-8 px-4">

        <div className="flex flex-col lg:flex-row gap-5">
  {/* Left Section (Main Image + Thumbnails) */}
  <div className="flex w-[90px] lg:w-1/2 flex-row-reverse mr-12">
    {/* Main Image */}
    <div className="flex-shrink-0 ml-7 mt-3">
      <Image
        src="/image 1.png"
        alt="Main Product"
        width={300}
        height={300}
        className="rounded-lg object-cover bg-gray-100"
      />
    </div>

    {/* Thumbnails */}
    <div className="flex flex-col mt-7 gap-10">
      <Image
        src="/image 2.png"
        alt="Thumbnail 1"
        width={70}
        height={70}
        className="rounded-lg object-cover cursor-pointer mb-1"
      />
      <Image
        src="/image 5.png"
        alt="Thumbnail 2"
        width={70}
        height={70}
        className="rounded-lg object-cover cursor-pointer mb-1"
      />
      <Image
        src="/image 6.png"
        alt="Thumbnail 3"
        width={70}
        height={70}
        className="rounded-lg object-cover cursor-pointer mb-1"
      />
    </div>
  </div>

          {/* Right Section (Details) */}
          <div className="w-full lg:w-1/2 mr-14">
            <h1 className="text-3xl font-bold mb-2">ONE LIFE GRAPHIC T-SHIRT</h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-xl mr-2">★★★★☆</span>
              <p className="text-sm text-gray-500">(4.5/5 Ratings)</p>
            </div>
            <div className="text-2xl font-semibold text-green-600 mb-2">
              $260
            </div>
            <div className="text-sm line-through text-gray-500">$300</div>

            <p className="text-sm text-gray-600 mt-4">
              "This graphic fabric is perfect for any occasion. Crafted from a
              soft and breathable fabric, it offers superior comfort and style."
            </p>

            {/* Color and Size Selection */}
            <div className="mt-6">
              <h3 className="text-lg font-bold">Select Colors:</h3>
              <div className="flex gap-2 mt-2">
                <button className="w-8 h-8 bg-gray-800 rounded-full"></button>
                <button className="w-8 h-8 bg-green-500 rounded-full"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full"></button>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold">Choose Size:</h3>
              <div className="flex gap-4 mt-2">
                <button className="px-4 py-2 border rounded-md">Small</button>
                <button className="px-4 py-2 border rounded-md bg-gray-200">
                  Medium
                </button>
                <button className="px-4 py-2 border rounded-md">Large</button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center mt-6">
              <input
                type="number"
                className="border rounded-md w-12 text-center mr-4"
                defaultValue="1"
              />
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

    {/* Reviews Section */}
<div className="max-w-7xl mx-auto py-12 px-6">
  <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">All Reviews</h2>
  
  {/* Reviews Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Review Card 1 */}
    <div className="p-12 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <p className="font-bold text-lg">Samantha D.</p>
      <p className="text-gray-500 text-sm mt-2">
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer,
         I appreciate the attention to detail. It's become my favorite go-to shirt."
      </p>
      <h1 className="mt-4">Posted on August 14, 2023</h1>
    </div>
    
    {/* Review Card 2 */}
    <div className="p-12 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <p className="font-bold text-lg">Alex M.</p>
      <p className="text-gray-500 text-sm mt-2">
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. 
        Being a UI/UX designer myself, I'm quite picky about aesthetics,
         and this t-shirt definitely gets a thumbs up from me."
      </p>
      <h1 className="mt-4">Posted on August 15, 2023</h1>
    </div>

    {/* Review Card 3 */}
    <div className="p-12 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <p className="font-bold text-lg">Ethan R.</p>
      <p className="text-gray-500 text-sm mt-2">
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern 
        caught my eye, and the fit is perfect. 
        I can see the designer's touch in every aspect of this shirt."
      </p>
      <h1 className="mt-4">Posted on August 16, 2023</h1>
    </div>

    {/* Review Card 4 */}
    <div className="p-12 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <p className="font-bold text-lg">Emma W.</p>
      <p className="text-gray-500 text-sm mt-2">
        "Great value for money. My favorite store for shopping!"
      </p>
      <h1 className="mt-4">Posted on August 17, 2023</h1>
    </div>

 {/* Review Card 4 */}
 <div className="p-12 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <p className="font-bold text-lg">Olivia P.</p>
      <p className="text-gray-500 text-sm mt-2">
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those
         principles but also feels great to wear.
        It's evident that the designer poured their creativity into making this t-shirt stand out."
      </p>
      <h1 className="mt-4">Posted on August 18, 2023</h1>
    </div>


 {/* Review Card 4 */}
 <div className="p-12 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <p className="font-bold text-lg">Ava H.</p>
      <p className="text-gray-500 text-sm mt-2">
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. 
        The intricate details and thoughtful layout of the design make this shirt a
         conversation starter."
      </p>
      <h1 className="mt-4">Posted on August 19, 2023</h1>
    </div>
  </div>
  <div className="flex justify-center items-center text-2xl font-bold">
  <Link href="/Brands">
     <button className="py-2 px-4 bg-white transition ease-in-out delay-150 hover:-translate-y-1 
  hover:scale-110 hover:bg-white duration-300 mt-20 rounded-md " >
    Load More Reviews</button>
  </Link>
  </div>
 
{/*  */}
  <div className="w-full flex flex-col items-center mt-10">
      <div className="w-[90%]">
        {/* Top side */}
        <div>
          <h2 className="text-3xl font-bold mt-4 flex justify-center items-center">You might also like</h2>
        </div>

        {/* Products */}
        <div className="flex flex-nowrap justify-start items-start gap-16 mt-7 overflow-x-auto scrollbar-hide ml-14">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            {/* Image */}
            <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 32 (1).png" alt="image" width={150} height={100} />
            </div>
            {/* Title and Price */}
            <div className="mt-2 text-center">
              <span className="font-bold block">Polo with Contrast Trims</span>
              <span className="text-black font-bold block">$212</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center">
            {/* Image */}
            <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 33 (2).png" alt="image" width={150} height={100} />
            </div>
            {/* Title and Price */}
            <div className="mt-2 text-center">
              <span className="font-bold block">Gradient Graphic T-shirt</span>
              <span className="text-black font-bold block">$145</span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center">
            {/* Image */}
            <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 34 (2).png" alt="image" width={150} height={100} />
            </div>
            {/* Title and Price */}
            <div className="mt-2 text-center">
              <span className="font-bold block">Polo with Tipping Details</span>
              <span className="text-black font-bold block">$180</span>
            </div>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center">
            {/* Image */}
            <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
              <Image src="/Frame 38 (2).png" alt="image" width={150} height={100} />
            </div>
            {/* Title and Price */}
            <div className="mt-2 text-center">
              <span className="font-bold block">Black Striped T-shirt</span>
              <span className="text-black font-bold block">$120</span>
            </div>
          </div>

</div>
</div>
    </div>
</div>
</div>
)
}