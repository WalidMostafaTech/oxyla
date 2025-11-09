const OrderSummary = () => {
  return (
    <aside className="border border-gray-200 rounded-xl p-4 lg:p-6 bg-white shadow-sm h-fit">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

      <div className="space-y-3">
        {/* Price */}
        <div className="flex justify-between text-gray-700">
          <span>Price</span>
          <span className="font-medium">$319.98</span>
        </div>

        {/* Discount */}
        <div className="flex justify-between text-gray-700">
          <span>Discount</span>
          <span className="font-medium">$31.9</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-gray-700">
          <span>Shipping</span>
          <span className="text-myGreen font-medium cursor-pointer">Free</span>
        </div>

        {/* Coupon */}
        <div className="flex justify-between text-gray-700">
          <span>Coupon Applied</span>
          <span className="font-medium">$0.00</span>
        </div>

        <hr className="my-4" />

        {/* Total */}
        <div className="flex justify-between items-center text-gray-900">
          <span className="font-semibold text-lg">TOTAL</span>
          <span className="font-bold text-lg">$288.08</span>
        </div>

        {/* Date */}
        <div className="flex justify-between items-center text-gray-700">
          <span>Scheduled Session Date</span>
          <span className="font-medium">01 Feb, 2023</span>
        </div>

        {/* Coupon Input */}
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-myGreen"
          />
          <span className="absolute right-3 top-2.5 text-gray-500 text-lg cursor-pointer">
            <i className="fa-solid fa-tag"></i>
          </span>
        </div>

        {/* Checkout Button */}
        <button type="button" className="mainBtn w-full mt-4">
          Proceed to Checkout
        </button>
      </div>
    </aside>
  );
};

export default OrderSummary;
