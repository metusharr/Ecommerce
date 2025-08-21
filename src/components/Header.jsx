import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Search, ShoppingCart, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <Link
              to="/"
              className="text-xl sm:text-2xl font-bold tracking-wider"
            >
              SHOPZONE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["New & Featured", "Women", "Men", "Kids", "Limited Edition"].map(
              (item, idx) => (
                <button
                  key={idx}
                  className="text-gray-800 hover:text-black font-medium text-sm tracking-wide uppercase"
                >
                  {item}
                </button>
              )
            )}
            <button className="text-red-600 hover:text-red-700 font-medium text-sm tracking-wide uppercase">
              Sale
            </button>
          </nav>

          {/* Search Bar */}
          <div className="hidden sm:block flex-1 max-w-[200px] lg:max-w-[250px] mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 rounded-full py-2 pr-10 border bg-black text-white text-sm focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-white" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-800 hover:text-black text-sm font-bold hidden sm:block">
              Sign In
            </button>
            <Link to="/wishlist">
              <button className="hover:text-black transition-colors">
                <Heart size={20} />
              </button>
            </Link>
            <button className="hover:text-black transition-colors relative">
              <ShoppingCart size={20} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {/* Search for Mobile */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 rounded-full py-2 pr-10 border bg-black text-white text-sm focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-white" />
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col space-y-3">
              {[
                "New & Featured",
                "Women",
                "Men",
                "Kids",
                "Limited Edition",
                "Sale",
              ].map((item, idx) => (
                <button
                  key={idx}
                  className={`text-sm font-medium tracking-wide uppercase text-left ${
                    item === "Sale"
                      ? "text-red-600 hover:text-red-700"
                      : "text-gray-800 hover:text-black"
                  }`}
                >
                  {item}
                </button>
              ))}
              <button className="text-gray-800 hover:text-black font-bold">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
