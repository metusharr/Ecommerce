import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 group">
      
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col h-full">
        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-900 truncate group-hover:text-black">
          {product.name}
        </h3>

        {/* Brand Link */}
        <Link
          to={`/brand/${encodeURIComponent(product.brand)}`}
          className="text-sm text-gray-500 hover:text-black transition-colors"
        >
          {product.brand}
        </Link>

        {/* Price & Stock */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold text-black">${product.price}</p>
          <span className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
            In Stock
          </span>
        </div>

        {/* View Button */}
        <Link
          to={`/product/${product.id}`}
          className="mt-5 block text-center bg-black text-white font-semibold py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
