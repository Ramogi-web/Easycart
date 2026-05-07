import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // 🔐 LOAD CART
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/signin");
      return;
    }

    const cartKey = `cart_user_${user.user_id}`;
    let savedCart = JSON.parse(localStorage.getItem(cartKey)) || [];

    savedCart = savedCart.map((item) => ({
      ...item,
      quantity: item.quantity ? item.quantity : 1,
    }));

    setCart(savedCart);
    localStorage.setItem(cartKey, JSON.stringify(savedCart));
  }, [navigate]);

  // 🔑 CART KEY
  const getUserCartKey = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return `cart_user_${user.user_id}`;
  };

  // ➕ INCREASE
  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].quantity += 1;

    setCart(updated);
    localStorage.setItem(getUserCartKey(), JSON.stringify(updated));
  };

  // ➖ DECREASE
  const decreaseQty = (index) => {
    const updated = [...cart];

    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1);
    }

    setCart(updated);
    localStorage.setItem(getUserCartKey(), JSON.stringify(updated));
  };

  // 🗑️ REMOVE ITEM
  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);

    setCart(updated);
    localStorage.setItem(getUserCartKey(), JSON.stringify(updated));
  };

  // 🧹 CLEAR CART
  const clearCart = () => {
    setCart([]);
    localStorage.setItem(getUserCartKey(), JSON.stringify([]));
  };

  // 💰 TOTAL
  const total = cart.reduce(
    (sum, item) => sum + Number(item.product_cost) * item.quantity,
    0
  );

  // 💳 CHECKOUT
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    navigate("/makepayment", { state: { cart } });
  };

  return (
    <div style={{ background: "#f5f7fb", minHeight: "100vh" }}>
      <div className="container py-4">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold text-primary m-0">🛒 Your Cart</h3>

          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => navigate("/")}
          >
            ← Continue Shopping
          </button>
        </div>

        {/* EMPTY STATE */}
        {cart.length === 0 ? (
          <div className="text-center mt-5">
            <h5>No items in cart 🛍️</h5>
            <p className="text-muted">Start adding products</p>
          </div>
        ) : (
          <>
            {/* ITEMS */}
            {cart.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center p-3 mb-3 shadow-sm"
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  borderLeft: "4px solid #3b82f6",
                }}
              >

                {/* LEFT SIDE */}
                <div className="d-flex align-items-center gap-3">

                  <img
                    src={item.product_image || "https://via.placeholder.com/60"}
                    alt={item.product_name}
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "10px",
                      objectFit: "cover",
                      border: "1px solid #e5e7eb",
                    }}
                  />

                  <div>
                    <div className="fw-bold">{item.product_name}</div>

                    <small className="text-muted">
                      Kes {item.product_cost}
                    </small>

                    <div style={{ fontSize: "13px" }}>
                      Subtotal: Kes{" "}
                      {Number(item.product_cost) * item.quantity}
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="text-end">

                  <div className="d-flex align-items-center gap-2 mb-2">

                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => decreaseQty(index)}
                    >
                      −
                    </button>

                    <span className="fw-bold">{item.quantity}</span>

                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => increaseQty(index)}
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>

                </div>
              </div>
            ))}

            {/* SUMMARY SECTION */}
            <div
              className="p-4 shadow-sm"
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                border: "1px solid #e5e7eb",
              }}
            >

              {/* TOTAL */}
              <div className="d-flex justify-content-between mb-3">
                <h5 className="fw-bold">Total</h5>
                <h5 className="fw-bold text-primary">Kes {total}</h5>
              </div>

              {/* BUTTONS */}
              <div className="d-flex gap-2">

                {/* CLEAR CART */}
                <button
                  className="btn w-50"
                  onClick={clearCart}
                  style={{
                    background: "#f3f4f6",
                    color: "#111827",
                    border: "1px solid #e5e7eb",
                    transition: "all 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#e5e7eb";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f3f4f6";
                    e.currentTarget.style.transform = "translateY(0px)";
                  }}
                >
                  Clear Cart
                </button>

                {/* CHECKOUT */}
                <button
                  className="btn w-50 fw-bold"
                  onClick={handleCheckout}
                  style={{
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    boxShadow: "0 6px 14px rgba(37,99,235,0.25)",
                    transition: "all 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(37,99,235,0.35)";
                    e.currentTarget.style.background = "#1d4ed8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0px) scale(1)";
                    e.currentTarget.style.boxShadow = "0 6px 14px rgba(37,99,235,0.25)";
                    e.currentTarget.style.background = "#2563eb";
                  }}
                >
                  Checkout →
                </button>

              </div>

              {/* SMALL NOTE */}
              <div
                className="text-center mt-2"
                style={{ fontSize: "12px", color: "#6b7280" }}
              >
                Secure checkout • Fast processing
              </div>

            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;