import { categories } from "../data/categories";
import { Link } from "react-router-dom";
import DealsSection from "../pages/modal";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16 relative">
          {/* Decorative gradient circles in background */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-52 h-52 bg-indigo-400 rounded-full blur-3xl opacity-20 animate-ping"></div>

          {/* Title */}
          <h1 className="relative text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight drop-shadow-xl">
            Shop by{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-text-shine">
              Category
              {/* glowing underline */}
              <span className="absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-sm opacity-70"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            ✨ Discover{" "}
            <span className="font-semibold text-indigo-500">
              handpicked collections
            </span>
            designed to inspire your{" "}
            <span className="italic text-pink-500">next look</span>. From
            everyday essentials to bold statements, we’ve got you covered.
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
        <DealsSection />
      </div>
    </div>
  );
}
