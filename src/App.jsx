import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/homepage";
import Header from "./components/Header";
import Wishlist from "./pages/WishlistPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Footer from "./components/footer";
import Modal from "./pages/modal.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";

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
      <Modal/>
    </Router>
  );
}
