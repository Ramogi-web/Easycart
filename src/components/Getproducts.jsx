import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const Getproducts = () => {

    //initialize hooks to help you manage the states of your application
    const [products,setProducts] =useState([]);
    const [loading,setLoading] =useState(false);
    const [error,setError] =useState("");

    // Declare the navigate hook
      const navigate =useNavigate()


    //specify the image base url
    const img_url = "https://ramogi-web.alwaysdata.net/static/images/"

    //create a function to help you fetch the products from the api
    const fetchProducts = async()=>{
      try {
        //update the loading hook
        setLoading(true)
        
        //  Interact with your endpoint for fetching the products
        const response = await axios.get("http://ramogi-web.alwaysdata.net/api/get_products")

        // update the products hook with the response given from the api
        setProducts(response.data)

        //set the loading hook back to default
        setLoading(false)
      } 
      catch (error) {
        // if there is an error
        //set the loading hook back to default
        setLoading(false)

        //update the error hook with a message
        setError(error.message)
        
      }
    }

    // we shall use the useEffect hook. This hook enablesus to automatically re-render new features incase of any changes.
    useEffect(() =>{
      fetchProducts()
    },[])

    // console.log(products)

  return (
<div className='p-4 min-vh-100' 
     style={{ 
       backgroundColor: '#f0f4f8', 
       fontFamily: "'Inter', sans-serif" 
     }}>
  
  <div className="container">
    <div className="text-center mb-5 mt-2">
      <h1 className='fw-bold' style={{ color: '#1a2a6c', fontSize: '2.5rem' }}>Our Collection</h1>
      <div style={{ height: '4px', width: '45px', background: 'linear-gradient(to right, #ff0080, #7928ca)', margin: '12px auto', borderRadius: '10px' }}></div>
      <p className="text-muted small">Quality Electronics, delivered to your door step</p>
    </div>

    {loading && <div className="text-center py-5"><Loader /></div>}
    {error && <div className='alert alert-danger border-0 shadow-sm text-center py-3' style={{ borderRadius: '15px' }}>{error}</div>}
    
    <div className='row g-4'>
      {products.map((product) => (
        <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
          <div className="card border-0 h-100 shadow-sm" 
               style={{ 
                 borderRadius: '22px', 
                 transition: 'all 0.3s ease',
                 background: '#ffffff', 
                 display: 'flex',
                 flexDirection: 'column',
                 overflow: 'hidden',
                 borderTop: '6px solid #4facfe' // Added a colorful top accent
               }}
               onMouseOver={(e) => {
                 e.currentTarget.style.transform = 'translateY(-10px)';
                 e.currentTarget.style.boxShadow = '0 20px 40px rgba(79, 172, 254, 0.2)';
               }}
               onMouseOut={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
               }}>
            
            {/* Colorful Image Background - makes photos pop */}
            <div style={{ height: '250px', background: 'linear-gradient(180deg, #e0f2fe 0%, #ffffff 100%)', padding: '15px' }}>
               <img
                src={img_url + product.product_photo} 
                alt={product.product_name}  
                className='w-100 h-100 shadow-sm'
                style={{ objectFit: 'cover', borderRadius: '15px' }} 
              />
            </div>

            <div className="card-body d-flex flex-column text-center p-4">
              {/* Highlighted Title */}
              <h5 className="fw-bold mb-2" style={{ color: '#1a2a6c' }}>{product.product_name}</h5>
              
              <p className="small text-muted flex-grow-1 mb-3">
                {product.product_description.slice(0, 80)}...
              </p>

              <div className="mt-auto">
                {/* Colorful Price Tag */}
                <div className="mb-3 py-1 px-3 d-inline-block shadow-sm" style={{ background: '#f0f9ff', borderRadius: '10px', border: '1px solid #bae6fd' }}>
                   <h4 className="fw-bold m-0" style={{ color: '#0369a1' }}>
                    <small className="fs-6 opacity-50">Kes</small> {product.product_cost}
                  </h4>
                </div>

                <button 
                  className="btn w-100 py-2 fw-bold text-white shadow" 
                  style={{ 
                    background: 'linear-gradient(45deg, #4facfe, #00f2fe)', 
                    borderRadius: '12px',
                    border: 'none',
                    fontSize: '14px',
                    letterSpacing: '0.5px'
                  }}
                  onClick={() => navigate("/makepayment" , {state: {product}})}
                >
                  PURCHASE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
)
}

export default Getproducts;