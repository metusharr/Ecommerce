import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [sortOption, setSortOption] = useState("Popularity");

  const categoryProducts = products.filter((p) => p.category === categoryId);
  const brands = [...new Set(categoryProducts.map((p) => p.brand))];

  // Pre-filter by brand if selected
  let filteredProducts = selectedBrand
    ? categoryProducts.filter((p) => p.brand === selectedBrand)
    : categoryProducts;

  // Sort products according to sortOption
  if (sortOption === "Price: Low to High") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "Price: High to Low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortOption === "Newest First") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }
  // For "Popularity" and default, don't sort—keep original order

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Category Title and Product Count */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end pb-6 border-b border-gray-200">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 capitalize">
              {categoryId}
            </h1>
            <p className="mt-2 text-gray-600">
              Showing {filteredProducts.length} of {categoryProducts.length} products
            </p>
          </div>
          {/* Sort Dropdown - Professional UI Element */}
          <div className="mt-4 md:mt-0">
            <label
              htmlFor="sort"
              className="text-sm font-medium text-gray-700 mr-2"
            >
              Sort by:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={e => setSortOption(e.target.value)}
              className="rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        {/* Main Content Area with Filters and Products */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Professional Design */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                FILTERS
              </h2>

              {/* Brand Filter Section */}
              <div className="mb-6">
                <h3 className="text-base font-semibold text-gray-800 mb-3 flex items-center justify-between">
                  <span>Brand</span>
                  <button
                    className="text-blue-600 text-sm font-medium"
                    onClick={() => setSelectedBrand(null)}
                  >
                    Clear
                  </button>
                </h3>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                  {/* "All Brands" Option */}
                  <div className="flex items-center">
                    <input
                      id="brand-all"
                      name="brand"
                      type="radio"
                      checked={selectedBrand === null}
                      onChange={() => setSelectedBrand(null)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label
                      htmlFor="brand-all"
                      className="ml-3 text-sm text-gray-700"
                    >
                      All Brands
                    </label>
                  </div>

                  {/* Individual Brand Options */}
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center">
                      <input
                        id={`brand-${brand}`}
                        name="brand"
                        type="radio"
                        checked={selectedBrand === brand}
                        onChange={() => setSelectedBrand(brand)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label
                        htmlFor={`brand-${brand}`}
                        className="ml-3 text-sm text-gray-700"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range, Discount, Rating Filters Stub - UI only */}
              {/* ...Keep your filters here as in your original... */}
            </div>
          </div>

          {/* Products Grid - Professional Layout */}
          <div className="lg:w-3/4">
            {/* Active Filters Display */}
            {selectedBrand && (
              <div className="mb-6 flex items-center">
                <span className="text-sm text-gray-600 mr-2">
                  Active filters:
                </span>
                <div className="inline-flex items-center bg-blue-50 rounded-full px-3 py-1 text-sm font-medium text-blue-800">
                  {selectedBrand}
                  <button
                    onClick={() => setSelectedBrand(null)}
                    className="ml-2 text-blue-600 hover:text-blue-900"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-12 text-center">
                {/* ...No products found UI... */}
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No products found
                </h3>
                <p className="mt-2 text-gray-500">
                  We couldn't find any products matching your selected filters.
                </p>
                <button
                  onClick={() => setSelectedBrand(null)}
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
