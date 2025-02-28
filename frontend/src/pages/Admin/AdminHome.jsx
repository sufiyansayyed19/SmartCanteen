import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  FiPlus, FiShoppingBag, FiUsers, FiTruck, 
  FiBarChart2, FiDollarSign, FiShoppingCart, FiAlertCircle 
} from "react-icons/fi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import useAdminStore from "../../store/adminStore";

const AdminDashboardPage = () => {
  // Get products from store
  const { AllProducts } = useAdminStore();
  //FiGrid
  // Dashboard stats - in real app, fetch these from your API
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
    lowStockItems: 0,
    todayOrders: 0,
    popularCategory: "",
    categoryCounts: {}
  });
  
  // Simulate fetching dashboard data
  useEffect(() => {
    // Update product count from store
    const categoryCounts = AllProducts.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});
    
    // Find most popular category
    let popularCategory = "";
    let maxCount = 0;
    
    Object.entries(categoryCounts).forEach(([category, count]) => {
      if (count > maxCount) {
        maxCount = count;
        popularCategory = category;
      }
    });
    
    // Set mock data - in real app, this would come from your API
    setStats({
      totalProducts: AllProducts.length,
      totalOrders: 187,
      totalRevenue: 24560,
      pendingOrders: 14,
      lowStockItems: 5,
      todayOrders: 24,
      popularCategory,
      categoryCounts
    });
  }, [AllProducts]);
  
  // Recent orders - mock data
  const recentOrders = [
    { id: "ORD-7829", customer: "Rajesh Kumar", total: 285, status: "Delivered", date: "Today, 13:45" },
    { id: "ORD-7828", customer: "Priya Sharma", total: 560, status: "Processing", date: "Today, 11:20" },
    { id: "ORD-7827", customer: "Amit Patel", total: 195, status: "Delivered", date: "Today, 09:30" },
    { id: "ORD-7826", customer: "Neha Singh", total: 340, status: "Pending", date: "Yesterday, 18:15" },
  ];
  
  // Color mapping for status badges
  const statusColors = {
    Delivered: "bg-green-100 text-green-800",
    Processing: "bg-blue-100 text-blue-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Cancelled: "bg-red-100 text-red-800"
  };
  
  // Quick access links
  const quickLinks = [
    { name: "Products", icon: <FiShoppingBag />, link: "/admin/products", color: "bg-blue-500" },
    { name: "Orders", icon: <FiShoppingCart />, link: "/admin/orders", color: "bg-green-500" },
    { name: "Customers", icon: <FiUsers />, link: "/admin/customers", color: "bg-purple-500" },
    { name: "Reports", icon: <FiBarChart2 />, link: "/admin/reports", color: "bg-orange-500" }
  ];
  
  return (
    <div className="container mx-auto py-6 px-4">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your canteen today.</p>
      </div>
      
      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {quickLinks.map((link, index) => (
          <Link 
            key={index} 
            to={link.link} 
            className="bg-white rounded-lg shadow-md p-4 flex items-center transition-transform hover:translate-y-1 hover:shadow-lg"
          >
            <div className={`${link.color} p-3 rounded-lg text-white mr-4`}>
              {link.icon}
            </div>
            <span className="font-medium text-gray-800">{link.name}</span>
          </Link>
        ))}
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Products */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-500 text-sm font-medium">Total Products</h3>
            <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
              <FiShoppingBag className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-baseline">
            <p className="text-2xl font-bold text-gray-800">{stats.totalProducts}</p>
            <Link to="/admin/products" className="ml-auto text-sm text-blue-600 hover:underline">
              View all
            </Link>
          </div>
        </div>
        
        {/* Total Orders */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-500 text-sm font-medium">Total Orders</h3>
            <span className="bg-green-100 text-green-800 p-1 rounded-full">
              <FiShoppingCart className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-baseline">
            <p className="text-2xl font-bold text-gray-800">{stats.totalOrders}</p>
            <p className="ml-2 text-xs text-green-600">
              +{stats.todayOrders} today
            </p>
            <Link to="/admin/orders" className="ml-auto text-sm text-blue-600 hover:underline">
              View all
            </Link>
          </div>
        </div>
        
        {/* Total Revenue */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
            <span className="bg-purple-100 text-purple-800 p-1 rounded-full">
              <FiDollarSign className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-baseline">
            <p className="text-2xl font-bold text-gray-800">₹{stats.totalRevenue.toLocaleString()}</p>
            <Link to="/admin/reports" className="ml-auto text-sm text-blue-600 hover:underline">
              View details
            </Link>
          </div>
        </div>
        
        {/* Pending Orders */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-500 text-sm font-medium">Pending Orders</h3>
            <span className="bg-yellow-100 text-yellow-800 p-1 rounded-full">
              <FiTruck className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-baseline">
            <p className="text-2xl font-bold text-gray-800">{stats.pendingOrders}</p>
            <Link to="/admin/orders?status=pending" className="ml-auto text-sm text-blue-600 hover:underline">
              View pending
            </Link>
          </div>
        </div>
      </div>
      
      {/* Product Categories & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Categories */}
        <div className="bg-white rounded-lg shadow-md p-5 lg:col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Product Categories
            </h2>
            <Link to="/admin/products" className="text-sm text-blue-600 hover:underline">
              View all
            </Link>
          </div>
          
          <div className="space-y-3">
            {Object.entries(stats.categoryCounts).slice(0, 5).map(([category, count], index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <MdOutlineRestaurantMenu className="text-orange-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">{category}</span>
                </div>
                <div className="text-sm font-medium">
                  {count} {count === 1 ? 'item' : 'items'}
                </div>
              </div>
            ))}
            
            {Object.keys(stats.categoryCounts).length === 0 && (
              <div className="text-center text-gray-500 py-4">
                No products available
              </div>
            )}
          </div>
          
          {stats.popularCategory && (
            <div className="mt-4 pt-4 border-t">
              <div className="text-sm text-gray-500">Most Popular Category</div>
              <div className="text-md font-medium text-gray-900 mt-1">{stats.popularCategory}</div>
            </div>
          )}
        </div>
        
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-5 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Orders
            </h2>
            <Link to="/admin/orders" className="text-sm text-blue-600 hover:underline">
              View all
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index}>
                    <td className="px-3 py-3 border-b border-gray-200 bg-white">
                      <div className="text-sm font-medium text-gray-900">{order.id}</div>
                    </td>
                    <td className="px-3 py-3 border-b border-gray-200 bg-white">
                      <div className="text-sm text-gray-900">{order.customer}</div>
                    </td>
                    <td className="px-3 py-3 border-b border-gray-200 bg-white">
                      <div className="text-sm text-gray-900">₹{order.total}</div>
                    </td>
                    <td className="px-3 py-3 border-b border-gray-200 bg-white">
                      <span className={`px-2 py-1 text-xs rounded-full ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-3 py-3 border-b border-gray-200 bg-white">
                      <div className="text-sm text-gray-500">{order.date}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Alert Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Low Stock Alert */}
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg shadow-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <FiAlertCircle className="h-5 w-5 text-orange-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-orange-800">Low Stock Alert</h3>
              <div className="mt-2 text-sm text-orange-700">
                <p>{stats.lowStockItems} products are running low on stock. <Link to="/admin/products?filter=lowstock" className="font-medium underline">Check inventory</Link></p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Add Product */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg shadow-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <FiShoppingBag className="h-5 w-5 text-blue-500" />
            </div>
            <div className="ml-3 flex-grow">
              <h3 className="text-sm font-medium text-blue-800">Quick Actions</h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>Add new products to your inventory or check pending orders.</p>
              </div>
              <div className="mt-3 flex space-x-3">
                <Link 
                  to="/admin/add-product" 
                  className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  <FiPlus className="mr-1" /> Add Product
                </Link>
                <Link 
                  to="/admin/orders?status=pending" 
                  className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                >
                  View Pending Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;