import Image from "next/image"

export default function Style() {
    return(

        <div className="py-4 mx-[100px] bg-gray-100 rounded-2xl mt-14 ">
      {/* Heading */}
      <div className="flex justify-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          BROWSE BY DRESS STYLE
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {/* Child Div 1 */}
        <div className="bg-gray-50 h-[140px] flex justify-center items-center rounded-lg ml-6">
          <Image src="/Frame 61.png" alt="image" width={200} height={80} />
        </div>

        {/* Child Div 2 */}
        <div className="bg-white h-[170px] flex justify-center items-center rounded-lg mr-5">
          <Image src="/Frame 62.png" alt="image" width={500} height={100} />
        </div>

        {/* Child Div 3 */}
        <div className="bg-white h-[170px] flex justify-center items-center rounded-lg ml-5">
          <Image src="/Frame 64.png" alt="image" width={500} height={100} />
        </div>

        {/* Child Div 4 */}
        <div className="bg-white h-[140px] flex justify-center items-center rounded-lg mr-7">
          <Image src="/Frame 63.png" alt="image" width={200} height={100} />
        </div>


      </div>
    </div>
  );
}