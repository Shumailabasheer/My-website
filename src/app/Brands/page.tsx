import Image from "next/image";

export default function Cart() {
  return (
    <div className="w-full min-h-screen bg-white ml-7">
      <main className="w-[90%] mx-auto my-10">
        {/* Cart Header */}
        <h1 className="text-3xl font-bold mb-8">YOUR CART</h1>

        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          {/* Left: Cart Items */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-6">
              {/* Cart Item 1 */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Image src="/Frame 33 (2).png" alt="Product" width={80} height={80} />
                  <div>
                    <h2 className="font-bold">Gradient Graphic T-shirt</h2>
                    <p className="text-sm text-gray-500">Size: Large</p>
                    <p className="text-sm text-gray-500">Color: White</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">$145</span>
                  <div className="flex items-center border rounded">
                    <button className="px-3 py-1 text-lg">-</button>
                    <span className="px-4">1</span>
                    <button className="px-3 py-1 text-lg">+</button>
                  </div>
                  <button className="text-red-500 text-xl">🗑</button>
                </div>
              </div>

              {/* Cart Item 2 */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Image src="/Frame 34.png" alt="Product" width={80} height={80} />
                  <div>
                    <h2 className="font-bold">Checkered Shirt</h2>
                    <p className="text-sm text-gray-500">Size: Medium</p>
                    <p className="text-sm text-gray-500">Color: Red</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">$180</span>
                  <div className="flex items-center border rounded">
                    <button className="px-3 py-1 text-lg">-</button>
                    <span className="px-4">1</span>
                    <button className="px-3 py-1 text-lg">+</button>
                  </div>
                  <button className="text-red-500 text-xl">🗑</button>
                </div>
              </div>

              {/* Cart Item 3 */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Image src="/Frame 33.png" alt="Product" width={80} height={80} />
                  <div>
                    <h2 className="font-bold">Skinny Fit Jeans</h2>
                    <p className="text-sm text-gray-500">Size: Large</p>
                    <p className="text-sm text-gray-500">Color: Blue</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">$240</span>
                  <div className="flex items-center border rounded">
                    <button className="px-3 py-1 text-lg">-</button>
                    <span className="px-4">1</span>
                    <button className="px-3 py-1 text-lg">+</button>
                  </div>
                  <button className="text-red-500 text-xl">🗑</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="w-full lg:w-1/3 border rounded-lg p-6 mr-7">
            <h2 className="font-bold text-xl mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$565</span>
              </div>
              <div className="flex justify-between">
                <span>Discount (-20%)</span>
                <span>-$113</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>$15</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$467</span>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full px-4 py-2 border rounded mb-4"
              />
              <button className="w-full bg-black text-white py-2 rounded">Apply</button>
            </div>
            <button className="w-full bg-black text-white py-2 mt-4 rounded">
              Go to Checkout →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}