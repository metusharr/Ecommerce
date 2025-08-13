import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product)
    return (
      <div className="p-6 text-center text-lg text-gray-500">
        Product not found.
      </div>
    );

  const addToWishlist = () => {
    const existing = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!existing.find((item) => item.id === product.id)) {
      existing.push(product);
      localStorage.setItem("wishlist", JSON.stringify(existing));
      alert("Added to wishlist!");
    } else {
      alert("Already in wishlist!");
    }
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-all"
        >
          <span className="text-2xl">←</span>
          <span className="text-lg font-medium">Back</span>
        </button>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-xl shadow-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-lg transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-black">{product.name}</h1>
            <p className="mt-2 text-lg text-gray-500">{product.brand}</p>

            <p className="mt-6 text-3xl font-bold text-black">
              ${product.price}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {product.description ||
                "This premium quality product is crafted for comfort and style."}
            </p>

            {/* Add to Cart / Wishlist */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md transition-all">
                Add to Cart
              </button>
              <button
                onClick={addToWishlist}
                className="bg-white border border-black hover:bg-black hover:text-white text-black px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
