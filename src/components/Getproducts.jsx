import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Mycarousel from './Mycarousel';

const Getproducts = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [showChatNote, setShowChatNote] = useState(true);

  const [popup, setPopup] = useState("");
  const [sortType, setSortType] = useState("");

  // 🔥 PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const navigate = useNavigate();

  const img_url = "https://ramogi-web.alwaysdata.net/static/images/";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://ramogi-web.alwaysdata.net/api/get_products"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const showPopup = (msg) => {
    setPopup(msg);
    setTimeout(() => setPopup(""), 2000);
  };

  const addToCart = (product) => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("⚠️ Please log in first");
      navigate("/signin");
      return;
    }

    const cartKey = `cart_user_${user.user_id}`;

    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    cart.push(product);

    localStorage.setItem(cartKey, JSON.stringify(cart));

    showPopup("🛒 Item added to cart");
  };

  const handlePurchase = (product) => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("⚠️ Please log in");
      navigate("/signin");
      return;
    }

    navigate("/makepayment", { state: { product } });
  };

  // 🔎 SEARCH
  const filteredProducts = products.filter((product) => {
    return (
      product.product_name?.toLowerCase().includes(search.toLowerCase()) ||
      product.product_description?.toLowerCase().includes(search.toLowerCase())
    );
  });

  // 🔽 SORT
  const sortedProducts = [...filteredProducts].sort((a, b) => {

    if (sortType === "az") {
      return a.product_name.localeCompare(b.product_name);
    }

    if (sortType === "za") {
      return b.product_name.localeCompare(a.product_name);
    }

    if (sortType === "low") {
      return Number(a.product_cost) - Number(b.product_cost);
    }

    if (sortType === "high") {
      return Number(b.product_cost) - Number(a.product_cost);
    }

    return 0;
  });

  // 🔥 PAGINATION LOGIC
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  // reset page when search/filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, sortType]);

  return (
    <div className='p-4 min-vh-100'
      style={{
        backgroundColor: '#f0f4f8',
        fontFamily: "'Inter', sans-serif",
      }}>

      {showChatNote && (
        <div style={{
          position: "fixed",
          bottom: "100px",
          left: "20px",
          width: "220px",
          background: "#0056b3",
          color: "white",
          padding: "10px",
          borderRadius: "12px",
          zIndex: 9999
        }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Need Help? 💬</strong>
            <button onClick={() => setShowChatNote(false)}>X</button>
          </div>
        </div>
      )}

      <div className="container">

        <div className="text-center mb-5 mt-2">
          <h1 className='fw-bold' style={{ color: '#1a2a6c', fontSize: '2.5rem' }}>
            Our Collection
          </h1>

          <Mycarousel />
        </div>

        {/* SEARCH + FILTER */}
        <div className="mb-4 d-flex justify-content-center gap-2">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "250px",
              padding: "10px",
              borderRadius: "8px"
            }}
          />

          <select
            onChange={(e) => setSortType(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          >
            <option value="">Filter</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>

        </div>

        {loading && <Loader />}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* PRODUCTS */}
        <div className='row g-4'>
          {currentProducts.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>

              <div className="card border-0 h-100 shadow-sm"
                style={{
                  borderRadius: '22px',
                  background: '#fff',
                  borderTop: '6px solid #4facfe'
                }}>

                <div style={{ height: '250px', padding: '15px' }}>
                  <img
                    src={img_url + product.product_photo}
                    className='w-100 h-100'
                    style={{ objectFit: 'cover', borderRadius: '15px' }}
                    alt="product"
                  />
                </div>

                <div className="card-body text-center p-4">

                  <h5 className="fw-bold">{product.product_name}</h5>

                  <p className="text-muted small">
                    {product.product_description.slice(0, 80)}...
                  </p>

                  <h4 className="fw-bold text-primary">
                    Kes {product.product_cost}
                  </h4>

                  <button
                    className="btn w-100 text-white"
                    style={{
                      background: 'linear-gradient(45deg, #4facfe, #00f2fe)'
                    }}
                    onClick={() => handlePurchase(product)}
                  >
                    PURCHASE
                  </button>

                  <button
                    className="btn w-100 mt-2 text-white"
                    style={{ background: '#ff9800' }}
                    onClick={() => addToCart(product)}
                  >
                    ADD TO CART
                  </button>

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="d-flex justify-content-center mt-4 gap-2">

          <button
            className="btn btn-outline-primary"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`btn ${currentPage === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="btn btn-outline-primary"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>

        </div>

      </div>

      {/* POPUP */}
      {popup && (
        <div style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          background: "#000",
          color: "#fff",
          padding: "10px",
          borderRadius: "8px",
          zIndex: 9999
        }}>
          {popup}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Getproducts;