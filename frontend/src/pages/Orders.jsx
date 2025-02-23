import useOrderStore from "../store/OrderStore"; // Zustand store for orders

const Orders = () => {
  // Fetch ordered items from the store
  const orderedItems = useOrderStore((state) => state.orders);

  // Calculate Total Price
  const totalPrice = orderedItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Orders</h1>

        {/* Display Ordered Items */}
        {orderedItems.length > 0 ? (
          <div className="space-y-6">
            {orderedItems.map((item) => (
              <div
                key={item.id}
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
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600">₹{item.price}</p>
                    <p className="text-gray-600">Quantity: {item.qty}</p>
                  </div>
                </div>

                {/* Total Price for the Item */}
                <p className="text-lg font-semibold text-gray-800">
                  ₹{item.qty * item.price}
                </p>
              </div>
            ))}

            {/* Total Price */}
            <div className="text-right mt-6">
              <p className="text-xl font-semibold text-gray-800">
                Total Amount: <span className="text-orange-600">₹{totalPrice}</span>
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
              Looks like you haven&apos;t ordered anything yet. Time to explore the menu!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;