import { useState } from "react";
// import { Link } from "react-router-dom";

import profilePicImg from '../assets/prfilePic.png'

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    balance: 500,
    profilePic: profilePicImg,
    orders: [
      { id: 1, item: "Burger", price: 100, date: "2025-02-20" },
      { id: 2, item: "Pizza", price: 200, date: "2025-02-22" },
      { id: 3, item: "Pasta", price: 150, date: "2025-02-25" },
    ],
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        {/* Profile Picture */}
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
        />
        
        {/* User Info */}
        <h2 className="text-xl font-semibold mt-4">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="mt-2 text-green-600 font-bold">Balance: ₹{user.balance}</p>
        
        {/* Edit Profile & Logout Buttons */}
        <div className="mt-4 flex justify-center gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Edit Profile</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Logout</button>
        </div>
      </div>

      {/* Order History */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mt-6">
        <h3 className="text-lg font-semibold mb-4">Order History</h3>
        <ul className="divide-y divide-gray-300">
          {user.orders.map((order) => (
            <li key={order.id} className="py-2 flex justify-between text-gray-700">
              <span>{order.item}</span>
              <span>₹{order.price}</span>
              <span className="text-sm text-gray-500">{order.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
