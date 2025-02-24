const Orders = () => {
  // Dummy order data
  const orderedItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 299,
      qty: 2,
      img: "https://via.placeholder.com/150", // Placeholder image URL
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      price: 399,
      qty: 1,
      img: "https://via.placeholder.com/150", // Placeholder image URL
    },
    {
      id: 3,
      name: "Veggie Burger",
      price: 199,
      qty: 3,
      img: "https://via.placeholder.com/150", // Placeholder image URL
    },
  ];

  // Calculate Total Price
  const totalPrice = orderedItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center my-5">
          <div className="mr-2 md:mr-3 h-[2px] w-8 md:w-20 bg-gray-400"></div>
          <h2 className="text-xl md:text-3xl font-bold text-red-950 ">Your Orders</h2>
          <div className="ml-2 md:ml-3 h-[2px] w-8 md:w-20 bg-gray-400"></div>
        </div>

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
                    <h2 className=" md:text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-600">₹{item.price}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.qty}</p>
                  </div>
                </div>

                {/* Total Price for the Item */}
                <p className="text-sm md:text-lg font-semibold text-gray-800">
                  ₹{item.qty * item.price}
                </p>
              </div>
            ))}

            {/* Total Price */}
            <div className="text-right mt-6">
              <p className="md:text-xl font-semibold text-gray-800">
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