import Image from 'next/image';
import React from 'react';

const ProductsPage = async () => {
  let productsData = [];

  try {
    const res = await fetch('http://localhost:5000/products', {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch products');

    productsData = await res.json();
  } catch (error) {
    console.error(error);
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-red-500 text-center px-4">
        Failed to load products. Please try again later.
      </div>
    );
  }

  if (!productsData?.length) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-gray-500 text-center px-4">
        No products found.
      </div>
    );
  }

  return (
    <div className="w-11/12 max-w-7xl mx-auto py-10 sm:py-14">

      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Featured Products
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Discover premium products at the best prices
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">

        {productsData.map((product) => (
          <div
            key={product._id || product.name}
            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
          >

            {/* Image */}
            <div className="relative overflow-hidden bg-gray-50">

              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={400}
                className="w-full h-52 sm:h-56 object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Discount Badge */}
              {product.discount && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                  -{product.discount}%
                </span>
              )}

              {/* Stock Badge */}
              {!product.inStock && (
                <span className="absolute top-3 right-3 bg-gray-900 text-white text-[10px] px-2 py-1 rounded-full">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">

              {/* Category */}
              <p className="text-[11px] sm:text-xs text-gray-500 mb-1">
                {product.category} • {product.brand}
              </p>

              {/* Title */}
              <h3 className="font-semibold  text-gray-900 text-base sm:text-lg leading-snug mb-2 line-clamp-1">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <span className="text-lg sm:text-xl font-bold text-gray-900">
                  ${product.price}
                </span>

                {product.originalPrice && (
                  <span className="text-xs sm:text-sm text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">

                {/* Rating */}
                <span className="text-xs sm:text-sm text-yellow-500 font-medium">
                  ⭐ {product.rating}
                </span>

                {/* Button */}
                <button
                  disabled={!product.inStock}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition
                    ${
                      product.inStock
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

export default ProductsPage;