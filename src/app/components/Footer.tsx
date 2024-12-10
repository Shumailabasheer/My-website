import { FaTwitter,FaFacebook, FaInstagramSquare,FaGithub} from "react-icons/fa";
export default function NewsletterFooter() {
    return (
      <>
      {/* Newsletter Section */}
<div className="bg-gray-800 text-white py-4 px-4 sm:px-8 md:px-16 lg:px-32 mr-10 ml-10 rounded-2xl">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated</h2>
    <p className="text-sm sm:text-lg mb-6">Subscribe to our newsletter and never miss out on the latest offers and updates.</p>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      {/* Email Input */}
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 rounded-lg text-black w-full sm:w-64"
      />
      {/* Submit Button */}
      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white mt-4 sm:mt-0">Subscribe</button>
    </div>
  </div>
</div>

{/* Footer Section */}
<footer className="bg-slate-200 text-slate-950 py-10">
  <div className="max-w-7xl mx-auto flex flex-nowrap justify-between items-start gap-6 overflow-x-auto">
    {/* Footer Column 1 */}
    <div className="space-y-4 w-[200px] flex-shrink-0">
    <h3 className="text-lg font-semibold">SHOP.CO</h3>
    <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
    <div className="flex flex-row gap-2">
    <FaTwitter />
    <FaFacebook />
    <FaInstagramSquare/>
    <FaGithub />
    </div>
    
    </div>


{/* footer1 */}
    <div className="space-y-4 w-[200px] flex-shrink-0">
      <h3 className="text-lg font-semibold">Company</h3>
      <ul>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/contact" className="hover:underline">Features</a></li>
        <li><a href="/careers" className="hover:underline">Works</a></li>
        <li><a href="/careers" className="hover:underline">Career</a></li>
      </ul>
    </div>

    {/* Footer Column 2 */}
    <div className="space-y-4 w-[200px] flex-shrink-0">
      <h3 className="text-lg font-semibold">Help</h3>
      <ul>
      <li><a href="/terms" className="hover:underline">Customer Support</a></li>
      <li><a href="/terms" className="hover:underline">Delivery Details</a></li>
        <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
      </ul>
    </div>

 {/* Footer Column 3 */}
 <div className="space-y-4 w-[200px] flex-shrink-0">
      <h3 className="text-lg font-semibold">FAQ</h3>
      <ul>
      <li><a href="/terms" className="hover:underline">Account</a></li>
      <li><a href="/terms" className="hover:underline">Manage Deliveries</a></li>
        <li><a href="/terms" className="hover:underline">Orders</a></li>
        <li><a href="/privacy" className="hover:underline">Payments</a></li>
      </ul>
    </div>

 {/* Footer Column 4 */}
 <div className="space-y-4 w-[200px] flex-shrink-0">
      <h3 className="text-lg font-semibold">Resources</h3>
      <ul>
      <li><a href="/terms" className="hover:underline">Free eBooks</a></li>
      <li><a href="/terms" className="hover:underline">Development Tutorial</a></li>
        <li><a href="/terms" className="hover:underline">How to - Blog</a></li>
        <li><a href="/privacy" className="hover:underline">Youtube Playlist</a></li>
      </ul>
    </div>



  </div>

  {/* Footer Bottom */}
  <div className="mt-6 text-center text-sm text-gray-400">
    &copy; 2024 Your Company. All rights reserved.
  </div>
</footer>
      </>
    );
  }
  
  