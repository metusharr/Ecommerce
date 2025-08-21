import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4 animate-fadeIn">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
          alt="Empty Wishlist"
          className="w-36 mb-6 opacity-80"
        />
        <h2 className="text-3xl font-bold text-black mb-3">
          Your Wishlist is Empty
        </h2>
        <p className="text-gray-500 max-w-sm leading-relaxed">
          Looks like you haven’t added anything yet. Start exploring and save
          your favorites for later.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-all"
        >
          <span className="text-2xl">←</span>
          <span className="text-lg font-medium">Back</span>
        </button>

        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-black mb-12">
          My Wishlist
        </h1>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-4 right-4 bg-white border border-gray-300 text-black rounded-full px-2 py-1 hover:bg-black hover:text-white shadow-sm hover:scale-110 transition-all"
                  title="Remove from wishlist"
                >
                  ✕
                </button>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-black mb-1 truncate">
                  {item.name}
                </h2>
                <p className="text-gray-500 text-sm">{item.brand}</p>
                <p className="mt-3 text-lg font-semibold text-black">
                  ${item.price}
                </p>
                <Link
                  to={`/product/${item.id}`}
                  className="mt-5 block w-full text-center bg-black text-white py-3 rounded-lg font-semibold shadow hover:bg-gray-900 transition-all"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade In Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
