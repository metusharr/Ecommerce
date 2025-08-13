// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Shop<span className="text-gray-400">zone</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Your one-stop shop for the latest fashion trends, accessories, and
            lifestyle products. Quality you can trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
            <li><Link to="/returns" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter and get exclusive offers and updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-gray-700 px-4 rounded-r-md hover:bg-gray-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Media + Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        
        {/* Social Links */}
        <div className="flex gap-5 mb-4 sm:mb-0">
          <a href="#" className="hover:text-white transition-colors"><FiFacebook size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><FiInstagram size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><FiTwitter size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><FiYoutube size={20} /></a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} MyShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
