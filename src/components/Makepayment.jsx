import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loader from './Loader'

const Makepayment = () => {
//destructure  the  details passed from the Get products
// the use loation  hook allows us to get/ destructure the properties passed from the previous component
const {product} = useLocation().state || {}

    // Declare the navigate hook
      const navigate =useNavigate()


// console.log("the details of the product passed are;" ,product)
 //specify the image base url
 const img_url = "https://ramogi-web.alwaysdata.net/static/images/"

//  initialize hooks to manage the state of your application
    const [number, setNumber] = useState("")
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    //create a function that will handle the submit function
    const handlesubmit =async(e) =>{
        //prevent site from reloading
        e.preventDefault()

        // update the loading hook
        setLoading(true)
        try {
            // create  a formdata hook
            const formdata = new FormData()

            // append the data to the form data
            formdata.append("phone", number)
            formdata.append("amount", product.product_cost)

            const response= await axios.post("https://kbenkamotho.alwaysdata.net/api/mpesa_payment",formdata)

            //set loading back to default
            setLoading(false)

            //update the success hook
            setSuccess(response.data.message)

        } catch (error) {
      //set the loading hook back to default
      setLoading(false);
      
      //update the setError with amessage
      setError(error.message)

        }
    }

  return (
<div className='min-vh-100 p-4' 
     style={{ 
       background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', // Soft minty background
       fontFamily: "'Inter', sans-serif" 
     }}>
  
  <div className="container">
    {/* Navigation & Header */}
    <div className="d-flex align-items-center mb-4">
      <button className="btn btn-light shadow-sm fw-bold px-4" 
              style={{ borderRadius: '10px', color: '#15803d' }}
              onClick={() => navigate("/")}>
        ← Back
      </button>
      <h2 className='flex-grow-1 text-center fw-bold m-0' style={{ color: '#15803d' }}>
        Lipa na <span style={{ color: '#fbbf24' }}>M-Pesa</span>
      </h2>
    </div>

    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card border-0 shadow-lg" style={{ borderRadius: '25px', overflow: 'hidden' }}>
          
          <div className="row g-0">
            {/* Product Image Section */}
            <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-3">
              <img src={img_url + product.product_photo} 
                   alt={product.product_name} 
                   className='img-fluid shadow-sm' 
                   style={{ borderRadius: '15px', maxHeight: '250px', objectFit: 'cover' }} />
            </div>

            {/* Payment Details Section */}
            <div className="col-md-7 p-4 bg-white">
              <h3 className="fw-bold mb-1" style={{ color: '#1e293b' }}>{product.product_name}</h3>
              <p className="text-muted small mb-3">{product.product_description.slice(0, 100)}...</p>
              
              <div className="p-3 mb-4 d-flex justify-content-between align-items-center" 
                   style={{ background: '#f8fafc', borderRadius: '15px', border: '1px dashed #cbd5e1' }}>
                <span className="text-muted fw-medium">Total Amount:</span>
                <span className="fs-4 fw-bold" style={{ color: '#15803d' }}>Kes {product.product_cost}</span>
              </div>

              <form onSubmit={handlesubmit}>
                {loading && <div className="text-center mb-2"><Loader /></div>}
                {success && <div className="alert alert-success py-2 small border-0">{success}</div>}
                {error && <div className="alert alert-danger py-2 small border-0">{error}</div>}

                <div className="mb-3">
                  <label className="small fw-bold text-muted mb-1">M-Pesa Phone Number</label>
                  <input type="number"
                    className='form-control border-0 py-3 shadow-sm'
                    style={{ backgroundColor: '#f1f5f9', borderRadius: '12px' }}
                    placeholder='2547xxxxxxxx'
                    required
                    onChange={(e) => setNumber(e.target.value)} />
                </div>

                <button type="submit" 
                        className='btn w-100 py-3 fw-bold text-white shadow'
                        style={{ 
                          background: 'linear-gradient(45deg, #22c55e, #15803d)', 
                          border: 'none', 
                          borderRadius: '12px',
                          letterSpacing: '0.5px'
                        }}>
                  PAY NOW
                </button>
              </form>
              
              <p className="text-center mt-3 text-muted small" style={{ fontSize: '11px' }}>
                You will receive an M-Pesa STK push on your phone.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Makepayment