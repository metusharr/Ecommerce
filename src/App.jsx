import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/categorypage";
import HomePage from "./pages/homepage";
import Header from "./components/header";
import Wishlist from "./pages/wishlistpage";
import ProfilePage from "./pages/profilepage";
import Footer from "./components/footer";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
