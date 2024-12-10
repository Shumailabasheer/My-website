export default function HappyCustomers() {
    return (
      <section className="py-16 px-4 sm:px-8 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Customer 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="font-bold mb-2">Sarah M.</p>
            <p className="text-sm sm:text-base text-gray-600">
            "I'm blown away by the quality and style of the clothes I received from Shop.co. 
            From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
            </p>
          </div>
  
          {/* Customer 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="font-bold mb-2">Alex K.</p>
            <p className="text-sm sm:text-base text-gray-600">
            "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. 
            The range of options they offer is truly remarkable,
             catering to a variety of tastes and occasions.”
            </p>
          </div>
  
          {/* Customer 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="font-bold mb-2">James L.</p>
            <p className="text-sm sm:text-base text-gray-600">
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. 
            The selection of clothes is not only diverse but also on-point with the latest trends.”
            </p>
          </div>
        </div>
      </section>
    );
  }