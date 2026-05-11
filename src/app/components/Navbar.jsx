'use client';
import Link from 'next/link';
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

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'Products', path: '/products' },
        { name: 'Deals', path: '/deals' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Bar */}
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center gap-3 shrink-0">
                        <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-purple-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-md">
                            <span className="text-white text-xl font-black">M</span>
                        </div>

                        <Link href="/" className="leading-tight hidden sm:block">
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                                Mega-Mart
                            </h1>
                            <p className="text-xs text-gray-500">Shop Everything</p>
                        </Link>
                    </div>

                    {/* Desktop Search */}
                    <div className="hidden md:flex flex-1 max-w-2xl mx-10">
                        <div className="relative w-full group">

                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition" />

                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search products, brands..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-11 pr-4 py-3 text-sm
                           outline-none transition
                           focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>
                    </div>

                    {/* Desktop Nav + Icons */}
                    <div className="hidden md:flex items-center gap-8">

                        {/* Links */}
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className="hover:text-blue-600 transition"
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Icons */}
                        <div className="flex items-center gap-4 text-xl text-gray-700">

                            <button className="relative p-2 hover:text-blue-600 transition rounded-lg hover:bg-gray-100">
                                <FiHeart />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                    3
                                </span>
                            </button>

                            <button className="relative p-2 hover:text-blue-600 transition rounded-lg hover:bg-gray-100">
                                <FiShoppingCart />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                    4
                                </span>
                            </button>

                            <button className="p-2 hover:text-blue-600 transition rounded-lg hover:bg-gray-100">
                                <FiUser />
                            </button>

                        </div>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-3xl text-gray-700 active:scale-95 transition rounded-lg hover:bg-gray-100"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>

                </div>

                {/* Mobile Search */}
                <div className="md:hidden pb-4">
                    <div className="relative">

                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search Mega-Mart..."
                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-11 pr-4 py-3 text-sm
                         outline-none focus:bg-white focus:border-blue-500"
                        />

                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[520px] pb-6' : 'max-h-0'
                        }`}
                >
                    <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className="hover:text-blue-600 transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;