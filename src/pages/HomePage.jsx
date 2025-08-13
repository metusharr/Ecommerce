import { categories } from "../data/categories";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight drop-shadow-lg">
            Shop by <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Category</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover handpicked collections designed to inspire your next look.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className="group relative rounded-3xl  overflow-hidden   transition-all duration-400  transform hover:-translate-y-1 "
              style={{ perspective: "1000px" }}
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-72 object-cover  transform group-hover:scale-110  transition-transform duration-700 ease-out"
              />

              {/* Glass Overlay */}

              {/* Floating Glow Effect */}
              <div className="absolute inset-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-gray-300 opacity-0 group-hover:opacity-30 blur-2xl transition duration-700"></div>
              </div>

              {/* Text */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                <h3 className="text-white text-3xl font-bold mb-3 drop-shadow-lg">
                  {cat.name}
                </h3>
                <span className="inline-block text-white text-sm font-medium tracking-wide bg-white/20 px-4 py-2 rounded-full backdrop-blur-md border border-white/30 shadow-md transition group-hover:bg-white/30">
                  Explore Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
