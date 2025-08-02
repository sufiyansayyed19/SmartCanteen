import { Link } from "react-router-dom";
import useOrderStore from "../store/orderStore";

const Orders = () => {
  const orderItems = useOrderStore((state) => state.orderItems);

  // Calculate Total Price
  let totalPrice = 0; // Initialized to 0 for safety
  if (orderItems.length > 0) { // Added length check for better safety
    totalPrice = orderItems.reduce(
      (total, item) => total + item.qty * item.price,
      0
    );
  }

  // Calculate Paid Amount
  const paidAmount = orderItems.reduce((total, item) => {
    return item.status === "Paid" ? total + item.qty * item.price : total;
  }, 0);

  // Calculate Remaining Amount
  const remainingAmount = totalPrice - paidAmount;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center my-5">
          <div className="mr-2 md:mr-3 h-[2px] w-8 md:w-20 bg-gray-400"></div>
          <h2 className="text-xl md:text-3xl font-bold text-red-950">Your Orders</h2>
          <div className="ml-2 md:ml-3 h-[2px] w-8 md:w-20 bg-gray-400"></div>
        </div>

        {/* Display Ordered Items */}
        {orderItems.length > 0 ? (
          <div className="space-y-6">
            {orderItems.map((item) => (
              <div
                key={item._id} // Changed id to _id
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between"
              >
                {/* Item Image and Details */}
                <div className="flex items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h2 className="md:text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="font-semibold text-sm text-gray-600">₹{item.price}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.qty}</p>
                    {/* Display Status */}
                    <p
                      className={`text-sm font-semibold ${
                        item.status === "Paid" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      Status: {item.status}
                    </p>
                  </div>
                </div>

                {/* Total Price for the Item */}
                <p className="text-sm md:text-lg font-semibold text-gray-800">
                  ₹{item.qty * item.price}
                </p>
              </div>
            ))}

            {/* Total Price, Paid Amount, and Remaining Amount */}
            <div className="text-right mt-6 space-y-2">
              <p className="md:text-xl font-semibold text-gray-800">
                Total Amount: <span className="text-orange-600">₹{totalPrice}</span>
              </p>
              <p className="md:text-lg font-semibold text-green-600">
                Paid Amount: ₹{paidAmount}
              </p>
              <p className="md:text-lg font-semibold text-red-600">
                Remaining Amount: ₹{remainingAmount}
              </p>
            </div>
          </div>
        ) : (
          // Empty Orders Message
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍕</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              No orders yet!
            </h2>
            <p className="text-gray-600">
              Looks like you haven't ordered anything yet. Time to explore the menu!
            </p>
            {/* CTA Button */}
            <Link to="/menu">
              <button
                type="button"
                className="mt-4 px-6 py-2 bg-red-950 text-white rounded-lg hover:bg-red-900 transition duration-300"
              >
                Explore the Menu
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
