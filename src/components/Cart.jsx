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

    // ✅ FIX: ensure every item has quantity
    savedCart = savedCart.map(item => ({
      ...item,
      quantity: item.quantity ? item.quantity : 1
    }));

    setCart(savedCart);

    // save fixed version back (important)
    localStorage.setItem(cartKey, JSON.stringify(savedCart));

  }, [navigate]);

  // 🔑 CART KEY
  const getUserCartKey = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return `cart_user_${user.user_id}`;
  };

  // ➖ REMOVE / DECREASE
  const removeItem = (index) => {

    const updated = [...cart];

    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1);
    }

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
    (sum, item) => sum + (Number(item.product_cost) * item.quantity),
    0
  );

  // 💳 CHECKOUT (FULL CART SEND)
  const handleCheckout = () => {

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    navigate("/makepayment", { state: { cart } });
  };

  return (
    <div className="p-4 min-vh-100">

      <div className="container">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold m-0">Your Cart</h2>

          <button
            className="btn btn-light shadow-sm"
            onClick={() => navigate("/")}
          >
            ← Continue Shopping
          </button>
        </div>

        {/* EMPTY CART */}
        {cart.length === 0 ? (
          <div className="text-center mt-5">
            <h5>No items in cart 🛒</h5>
            <p className="text-muted">Start adding products</p>
          </div>
        ) : (
          <>
            {/* ITEMS */}
            {cart.map((item, index) => (
              <div
                key={index}
                className="card mb-3 shadow-sm border-0 p-3"
                style={{ borderRadius: "12px" }}
              >
                <div className="d-flex justify-content-between align-items-center">

                  <div>
                    <h5 className="mb-1">{item.product_name}</h5>

                    <small className="text-muted">
                      Kes {item.product_cost} × {item.quantity}
                    </small>

                    <div className="fw-bold">
                      Subtotal: Kes {Number(item.product_cost) * item.quantity}
                    </div>
                  </div>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>

                </div>
              </div>
            ))}

            {/* TOTAL */}
            <div className="mt-4 p-3 shadow-sm"
              style={{ borderRadius: "12px", background: "#f8fafc" }}>

              <div className="d-flex justify-content-between mb-3">
                <h5>Total</h5>
                <h5>Kes {total}</h5>
              </div>

              <div className="d-flex gap-2">

                <button
                  className="btn btn-outline-danger w-50"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>

                <button
                  className="btn btn-success w-50"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>

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