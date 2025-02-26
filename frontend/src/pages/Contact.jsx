import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Contact = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', items: ['Burger', 'Fries'], status: 'Pending' },
    { id: 2, customer: 'Jane Smith', items: ['Pizza', 'Coke'], status: 'Delivered' },
    { id: 3, customer: 'Alice Johnson', items: ['Salad', 'Juice'], status: 'Cancelled' },
  ]);

  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Burger', price: 5.99, category: 'Main Course' },
    { id: 2, name: 'Pizza', price: 8.99, category: 'Main Course' },
    { id: 3, name: 'Salad', price: 4.99, category: 'Healthy' },
  ]);

  const [feedback, setFeedback] = useState([
    { id: 1, user: 'John Doe', comment: 'Great food!', rating: 5 },
    { id: 2, user: 'Jane Smith', comment: 'Service could be better.', rating: 3 },
  ]);

  const salesData = [
    { day: 'Mon', sales: 120 },
    { day: 'Tue', sales: 150 },
    { day: 'Wed', sales: 200 },
    { day: 'Thu', sales: 180 },
    { day: 'Fri', sales: 250 },
    { day: 'Sat', sales: 300 },
    { day: 'Sun', sales: 280 },
  ];

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const handleDeleteMenuItem = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800">Total Orders</h3>
            <p className="text-2xl font-bold text-purple-600">1,234</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800">Total Revenue</h3>
            <p className="text-2xl font-bold text-green-600">$12,345</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800">Active Users</h3>
            <p className="text-2xl font-bold text-blue-600">567</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800">Pending Orders</h3>
            <p className="text-2xl font-bold text-yellow-600">23</p>
          </div>
        </div>

        {/* Order Management */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Order Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Order ID</th>
                  <th className="px-4 py-2 text-left">Customer</th>
                  <th className="px-4 py-2 text-left">Items</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-200">
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2">{order.customer}</td>
                    <td className="px-4 py-2">{order.items.join(', ')}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          order.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : order.status === 'Delivered'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDeleteOrder(order.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Menu Management */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Menu Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Item ID</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                    <td className="px-4 py-2">{item.category}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDeleteMenuItem(item.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Feedback */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">User Feedback</h2>
          <div className="space-y-4">
            {feedback.map((fb) => (
              <div key={fb.id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-800 font-semibold">{fb.user}</p>
                    <p className="text-gray-600">{fb.comment}</p>
                  </div>
                  <span className="text-yellow-600">⭐ {fb.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Sales Analytics</h2>
          <BarChart width={600} height={300} data={salesData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#6D28D9" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Contact;