import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
// components
import Header from './components/inc/header'
import Footer from "./components/inc/footer";
import Home from "./pages/client/home";
import ProductList from "./pages/client/productList";
import ShoppingCart from "./pages/client/cart";
import CheckOutForm from "./pages/client/checkOutForm";
import ProductDetails from "./pages/client/productDetail";
import Contact from "./pages/client/contact";
import Login from "./pages/client/login";
import SignUp from "./pages/client/signUp";
import OrderHistory from "./pages/client/orderHistory";
import Profile from "./pages/client/profile";
import NotFound from "./pages/404";
import OrderConfirmation from "./pages/client/confirmationPage";
import IsPrivate from "./components/isPrivate";
import Dashboard from "./pages/admin/dash";

function App() {
 
  
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

const AppContent = () => {
  const { pathname } = useLocation();
  const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated)

  console.log('Auth across the pages is =========>' , isAuthenticated);
  // Ensure scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const showHeaderFooter =pathname !== "/Dashboard" && pathname !== "/signup" && pathname !== "/checkout";

  return (
    <>
      {showHeaderFooter && <Header />}

      <div className="px-10">
        <ToastContainer />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<ProductList />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/Product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* Protected Routes */}
        <Route path="/" element={<IsPrivate />}>
        <Route path="/profile/:id" element={<Profile />} />
          <Route path="/checkout" element={<CheckOutForm />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route path="/orderconfirmed" element={<OrderConfirmation />} />
          <Route path="/Dashboard" element={<Dashboard  />} />


        </Route>

        

        <Route path="*" element={<NotFound />} />
      </Routes>

      {showHeaderFooter && <Footer />}
    </>
  );
};

export default App;
