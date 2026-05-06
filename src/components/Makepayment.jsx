import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loader from './Loader'
import Footer from './Footer'

const Makepayment = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const product = location.state?.product
  const cart = location.state?.cart

  const img_url = "https://ramogi-web.alwaysdata.net/static/images/"

  const [number, setNumber] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  // 🔐 CALCULATE TOTAL (SINGLE OR CART)
  const totalAmount = product
    ? Number(product.product_cost)
    : cart?.reduce((sum, item) => sum + Number(item.product_cost), 0)

  // 🔐 PROTECTION
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (!user) {
      alert("Please login first before making a purchase 🛑")
      navigate("/signin")
      return
    }

    if (!product && (!cart || cart.length === 0)) {
      navigate("/")
    }

  }, [navigate, product, cart])

  if (!product && (!cart || cart.length === 0)) return null

  const handlesubmit = async (e) => {
    e.preventDefault()

    if (!number) return alert("Enter phone number")

    setLoading(true)

    try {
      const formdata = new FormData()
      formdata.append("phone", number)
      formdata.append("amount", totalAmount)

      const response = await axios.post(
        "http://ramogi-web.alwaysdata.net/api/mpesa_payment",
        formdata
      )

      setLoading(false)
      setSuccess(response.data.message)
      setError("")

      // 🧹 CLEAR CART AFTER SUCCESS
      if (cart && cart.length > 0) {
        const user = JSON.parse(localStorage.getItem("user"))
        const cartKey = `cart_user_${user.user_id}`
        localStorage.setItem(cartKey, JSON.stringify([]))
      }

    } catch (err) {
      setLoading(false)
      setError("Payment failed. Try again.")
      setSuccess("")
    }
  }

  return (
    <div className='min-vh-100 p-4'
      style={{
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
        fontFamily: "'Inter', sans-serif"
      }}>

      <div className="container">

        {/* HEADER */}
        <div className="d-flex align-items-center mb-4">
          <button
            className="btn btn-light shadow-sm fw-bold px-4"
            style={{ borderRadius: '10px', color: '#15803d' }}
            onClick={() => navigate("/cart")}
          >
            ← Back
          </button>

          <h2 className='flex-grow-1 text-center fw-bold m-0'
            style={{ color: '#15803d' }}>
            Lipa na <span style={{ color: '#fbbf24' }}>M-Pesa</span>
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">

            <div className="card border-0 shadow-lg"
              style={{ borderRadius: '25px', overflow: 'hidden' }}>

              <div className="p-4 bg-white">

                {/* 🧾 CART SUMMARY (ONLY IF CART) */}
                {cart && cart.length > 0 && (
                  <>
                    <h4 className="fw-bold mb-3">Order Summary</h4>

                    {cart.map((item, index) => (
                      <div key={index} className="d-flex justify-content-between mb-2">
                        <span>{item.product_name}</span>
                        <span>Kes {item.product_cost}</span>
                      </div>
                    ))}

                    <hr />
                  </>
                )}

                {/* 📦 SINGLE PRODUCT */}
                {product && (
                  <div className="mb-3">
                    <h3 className="fw-bold">{product.product_name}</h3>
                    <p className="text-muted small">
                      {product.product_description?.slice(0, 100)}...
                    </p>
                  </div>
                )}

                {/* 💰 TOTAL */}
                <div className="p-3 mb-4 d-flex justify-content-between align-items-center"
                  style={{
                    background: '#f8fafc',
                    borderRadius: '15px',
                    border: '1px dashed #cbd5e1'
                  }}>
                  <span className="text-muted fw-medium">Total Amount:</span>
                  <span className="fs-4 fw-bold" style={{ color: '#15803d' }}>
                    Kes {totalAmount}
                  </span>
                </div>

                {/* FORM */}
                <form onSubmit={handlesubmit}>

                  {loading && <div className="text-center mb-2"><Loader /></div>}
                  {success && <div className="alert alert-success py-2 small border-0">{success}</div>}
                  {error && <div className="alert alert-danger py-2 small border-0">{error}</div>}

                  <div className="mb-3">
                    <input
                      type="number"
                      className='form-control border-0 py-3 shadow-sm'
                      style={{
                        backgroundColor: '#f1f5f9',
                        borderRadius: '12px'
                      }}
                      placeholder='2547xxxxxxxx'
                      required
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className='btn w-100 py-3 fw-bold text-white shadow'
                    style={{
                      background: 'linear-gradient(45deg, #22c55e, #15803d)',
                      border: 'none',
                      borderRadius: '12px'
                    }}
                  >
                    PAY NOW
                  </button>

                </form>

              </div>

            </div>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Makepayment