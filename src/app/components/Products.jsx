import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Products = async () => {
    let productsData = [];

    try {
        const res = await fetch('http://localhost:5000/products', {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }

        productsData = await res.json();
    } catch (error) {
        console.error(error);
        return (
            <div className="text-center py-10 text-red-500">
                Failed to load products.
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                    Featured Products
                </h2>
                <Link href="/products" className="text-sm text-gray-500 mb-6">
                    View All
                </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {productsData?.slice(0, 6).map((product) => (
                    <div
                        key={product._id || product.name}
                        className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden group"
                    >

                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <Image
                                src={product.image}
                                width={400}
                                height={300}
                                alt={product.name}
                                className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                            />

                            {product.discount && (
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                    -{product.discount}%
                                </span>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-5">

                            <p className="text-xs text-gray-500 mb-1">
                                {product.category} • {product.brand}
                            </p>

                            <h3 className="font-semibold text-gray-900 text-lg leading-snug mb-2">
                                {product.name}
                            </h3>

                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                {product.description}
                            </p>

                            {/* Price */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xl font-bold text-gray-900">
                                    ${product.price}
                                </span>

                                {product.originalPrice && (
                                    <span className="text-sm text-gray-400 line-through">
                                        ${product.originalPrice}
                                    </span>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between">

                                <span className="text-sm text-yellow-500 font-medium">
                                    ⭐ {product.rating}
                                </span>

                                <button
                                    disabled={!product.inStock}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition
                    ${product.inStock
                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                </button>

                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Products;