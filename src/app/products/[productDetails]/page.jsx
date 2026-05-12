import Image from 'next/image';
import React from 'react';
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';

const ProductDetails = async ({ params }) => {
  const { productDetails } = await params;

  const res = await fetch(
    `http://localhost:5000/products/${productDetails}`,
    {
      cache: 'no-store',
    }
  );

  const product = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-10 sm:py-14">
      <div className="w-11/12 max-w-7xl mx-auto">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 sm:p-8 lg:p-10">

            {/* Image Section */}
            <div className="relative bg-gray-100 rounded-3xl overflow-hidden">

              <Image
                src={product.image}
                alt={product.name}
                width={700}
                height={700}
                priority
                className="w-full h-[350px] sm:h-[450px] object-cover hover:scale-105 transition duration-500"
              />

              {/* Discount Badge */}
              {product.discount && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                  -{product.discount}%
                </span>
              )}

            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center">

              {/* Category */}
              <p className="text-sm text-blue-600 font-medium mb-2">
                {product.category} • {product.brand}
              </p>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center text-yellow-500">
                  <FiStar className="fill-yellow-400" />
                  <span className="ml-1 text-sm font-medium text-gray-700">
                    {product.rating}
                  </span>
                </div>

                <span className="text-gray-400 text-sm">
                  • Premium Quality
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-center gap-4 mb-8">

                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>

                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}

              </div>

              {/* Stock */}
              <div className="mb-8">
                {product.inStock ? (
                  <span className="inline-flex items-center bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                    In Stock ({product.stock} available)
                  </span>
                ) : (
                  <span className="inline-flex items-center bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">

                <button
                  disabled={!product.inStock}
                  className={`flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold transition
                    ${
                      product.inStock
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  <FiShoppingCart />
                  Add to Cart
                </button>

                <button className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-gray-200 hover:bg-gray-100 transition font-medium">
                  <FiHeart />
                  Wishlist
                </button>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;