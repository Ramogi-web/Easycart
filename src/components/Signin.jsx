import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Signin = ({ setIsLoggedIn }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading("Logging in...");

    try {
      const formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      const response = await axios.post(
        "http://ramogi-web.alwaysdata.net/api/signin",
        formdata
      );

      setLoading("");

      if (response.data.user) {

        const user = response.data.user;

        // ✅ SAVE USER
        localStorage.setItem("user", JSON.stringify(user));

        // ✅ USER-SPECIFIC CART KEY
        const cartKey = `cart_user_${user.user_id}`;
        localStorage.setItem("cartKey", cartKey);

        // ✅ INITIALIZE CART IF NOT EXISTS
        if (!localStorage.getItem(cartKey)) {
          localStorage.setItem(cartKey, JSON.stringify([]));
        }

        // ✅ UPDATE NAVBAR STATE (SAFE CHECK)
        if (setIsLoggedIn) {
          setIsLoggedIn(true);
        }

        // 🔥 REDIRECT AFTER LOGIN (BUY FLOW)
        const redirectData = localStorage.getItem("redirectAfterLogin");

        if (redirectData) {
          try {
            const product = JSON.parse(redirectData);
            localStorage.removeItem("redirectAfterLogin");

            navigate("/makepayment", { state: { product } });
          } catch (err) {
            localStorage.removeItem("redirectAfterLogin");
            navigate("/");
          }
        } else {
          navigate("/");
        }

      } else {
        setError("Invalid login details");
      }

    } catch (err) {
      setLoading("");
      setError("Login failed. Try again");
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center px-3"
      style={{
        background: 'radial-gradient(circle at top right, #2a0845, #6441A5)',
      }}>

      <div className="col-md-4 col-lg-3 flex-grow-1 py-5">

        <div className="card border-0 p-4 shadow-lg"
          style={{
            borderRadius: '28px',
            background: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
          }}>

          {/* HEADER */}
          <div className="text-center mb-4">
            <h2 className='fw-bold'
              style={{
                background: 'linear-gradient(to right, #6441A5, #2a0845)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-1px'
              }}>
              Sign In
            </h2>

            <p className="text-muted small">
              Welcome back! Please enter your details.
            </p>
          </div>

          {/* STATUS */}
          {loading && (
            <div className="text-info small text-center mb-2">
              <div className="spinner-border spinner-border-sm me-1"></div>
              {loading}
            </div>
          )}

          {error && (
            <div className="text-danger small text-center mb-2">
              ⚠️ {error}
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <input
                type="email"
                className='form-control border-0 py-2 px-3 shadow-sm'
                placeholder='Email address'
                required
                style={{
                  borderRadius: '10px',
                  backgroundColor: '#f8f9fa',
                  fontSize: '0.85rem'
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className='form-control border-0 py-2 px-3 shadow-sm'
                placeholder='Password'
                required
                style={{
                  borderRadius: '10px',
                  backgroundColor: '#f8f9fa',
                  fontSize: '0.85rem'
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className='btn w-100 py-2 fw-bold text-white shadow'
              style={{
                borderRadius: '10px',
                background: 'linear-gradient(to right, #6441A5, #2a0845)',
                border: 'none',
                fontSize: '0.9rem'
              }}
            >
              Continue
            </button>

            <div className="text-center mt-3">
              <small className="text-muted">New here? </small>
              <Link
                to={'/signup'}
                className="small fw-bold text-decoration-none"
                style={{ color: '#6441A5' }}
              >
                Join us
              </Link>
            </div>

          </form>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signin;