'use client';
import React, { useState } from 'react';
import { 
  FiSearch, 
  FiShoppingCart, 
  FiHeart, 
  FiUser, 
  FiMenu, 
  FiX 
} from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-purple-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white text-3xl font-black tracking-tighter">M</span>
            </div>
            <div className="leading-none">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-900">Mega-Mart</h1>
              <p className="text-xs text-gray-500 font-medium">Shop Everything</p>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative group">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products, brands, categories..."
                className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white pl-14 py-3.5 rounded-3xl text-sm outline-none transition-all duration-300 shadow-sm focus:shadow-md"
              />
              <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-2xl group-focus-within:text-blue-500 transition-colors" />
            </div>
          </div>

          {/* Desktop Navigation & Icons */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 text-sm font-semibold text-gray-700">
              <a href="#" className="nav-link hover:text-blue-600 transition-all">Home</a>
              <a href="#" className="nav-link hover:text-blue-600 transition-all">Shop</a>
              <a href="#" className="nav-link hover:text-blue-600 transition-all">Categories</a>
              <a href="#" className="nav-link hover:text-blue-600 transition-all">Deals</a>
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-6 text-2xl text-gray-700">
              <button className="icon-btn relative hover:scale-110 transition-transform">
                <FiHeart />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
              </button>
              
              <button className="icon-btn relative hover:scale-110 transition-transform">
                <FiShoppingCart />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">4</span>
              </button>
              
              <button className="icon-btn hover:scale-110 transition-transform">
                <FiUser />
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-3xl text-gray-700 hover:text-gray-900 transition-all active:scale-90"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-5">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Mega-Mart..."
              className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 pl-12 py-3.5 rounded-3xl text-sm outline-none"
            />
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
          <div className="flex flex-col gap-6 text-lg font-medium bg-white border-t pt-6">
            <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Shop All Products</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Categories</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Today's Best Deals</a>
            <a href="#" className="hover:text-blue-600 transition-colors">New Arrivals</a>
            <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>

            {/* Mobile Icons */}
            <div className="flex items-center justify-around pt-6 border-t">
              <button className="flex flex-col items-center gap-1 text-sm text-gray-700 hover:text-blue-600">
                <FiHeart className="text-3xl" />
                <span>Wishlist</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-sm text-gray-700 hover:text-blue-600 relative">
                <FiShoppingCart className="text-3xl" />
                <span>Cart</span>
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">4</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-sm text-gray-700 hover:text-blue-600">
                <FiUser className="text-3xl" />
                <span>Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;