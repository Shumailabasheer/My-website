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
<footer className="bg-slate-200 text-slate-950 py-10 ">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Footer Column 1 */}


    <div className="space-y-4 px-20">
    <h3 className="text-lg font-semibold">SHOP.CO</h3>
    <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
    </div>





    <div className="space-y-4 px-20">
      <h3 className="text-lg font-semibold">Company</h3>
      <ul>
        <li><a href="/about" className="hover:underline">About Us</a></li>
        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
        <li><a href="/careers" className="hover:underline">Careers</a></li>
      </ul>
    </div>

    {/* Footer Column 2 */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Quick Links</h3>
      <ul>
        <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
        <li><a href="/faq" className="hover:underline">FAQ</a></li>
      </ul>
    </div>

    {/* Footer Column 3 */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="text-black hover:text-blue-400">Facebook</a>
        <a href="#" className="text-black hover:text-blue-400">Twitter</a>
        <a href="#" className="text-black hover:text-blue-400">Instagram</a>
      </div>
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
  
  