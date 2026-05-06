import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Notfound from './components/Notfound';
import Contact from './components/Contact';
import ShippingPolicy from './components/ShippingPolicy';
import ReturnsRefunds from './components/ReturnsRefunds';
import Chatbot from "./components/Chatbot";
import Cart from "./components/Cart";

function AppWrapper() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // ✅ CHECK LOGIN (ON LOAD + REFRESH)
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  // ✅ LOGOUT (ALSO CLEAR CART KEY)
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cartKey"); // 🔥 important
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="App">

      {/* HEADER */}
      <header
        className="text-center p-3 shadow-sm"
        style={{
          background: 'linear-gradient(90deg, #ffde59, #4facfe)',
          borderBottom: '3px solid #0056b3'
        }}
      >
        <h2
          className="fw-bold m-0"
          style={{
            color: '#1a2a6c',
            fontSize: '1.8rem',
            letterSpacing: '0.5px'
          }}
        >
          Easy <span style={{ color: '#0056b3' }}>Cart</span>
        </h2>

        <p
          className="fw-bold m-0"
          style={{
            color: '#1a2a6c',
            fontSize: '0.9rem',
            opacity: '0.85'
          }}
        >
          PAY LESS • GET MORE
        </p>
      </header>

      {/* NAVBAR */}
      <nav className="custom-nav">

        <Link to="/" className="nav-btn home">
          Home
        </Link>

        {isLoggedIn && (
          <>
            <Link to="/addproducts" className="nav-btn add">
              Add Products
            </Link>

            <Link to="/cart" className="nav-btn cart">
             🛒 Cart
            </Link>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link to="/signin" className="nav-btn signin">
              Signin
            </Link>
            <Link to="/signup" className="nav-btn signup">
              Signup
            </Link>
          </>
        )}

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="nav-btn logout"
          >
            Logout
          </button>
        )}

      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Getproducts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/addproducts" element={<Addproducts />} />
        <Route path="/makepayment" element={<Makepayment />} />

        {/* ✅ FIXED: PASS isLoggedIn */}
        <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} />} />

        <Route path="/contactus" element={<Contact />} />
        <Route path="/shippingpolicy" element={<ShippingPolicy />} />
        <Route path="/return_and_refund_policy" element={<ReturnsRefunds />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Chatbot />

    </div>
  );
}

// WRAPPER
export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}