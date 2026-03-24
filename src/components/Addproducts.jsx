import React, { useState } from 'react'
import Loader from './Loader';
import axios from 'axios';
import Footer from './Footer';

const Addproducts = () => {
  // Introduce the hooks
  const[product_name,setProductName] =useState("");
  const[product_description,setProductDescription] =useState("");
  const[product_cost,setProductCost] =useState("");
  const[product_photo,setProductPhoto] =useState("");

  //declare the addition hooks to manage the the state of application
  const [loading,setLoading] = useState(false);
  const [success,setSuccess] = useState("");
  const [error,setError] = useState("");

  //create a function that will handle the submit function
  const handlesubmit = async (e) =>{
    //prevent the site from reloading
    e.preventDefault()

    //set loading hook with a message(activate it)
    setLoading(true)
     
    try {
      // create a form data
      const formdata = new FormData()
      
      //append the details to the form data created
      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("product_photo", product_photo);

      // interact with the axios to help with method post
      const response =await axios.post("http://ramogi-web.alwaysdata.net/api/add_product",formdata)

      //set the loading hook back to default
      setLoading(false)

      //update the success hook with a message
      setSuccess(response.data.message)

      //clearing the hooks
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");

    // clear the fileinput value
  e.target.reset()

      //set timeout
       setTimeout(() => {
    setSuccess("");
  }, 5000);
    
  
    } catch (error) {
      //set the loading hook back to default
      setLoading(false);
      
      //update the setError with amessage
      setError(error.message)
    }

  }

  return (
<div className='min-vh-100 d-flex align-items-center justify-content-center' 
     style={{ 
       background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', 
       padding: '20px', 
       display:'flex',
       flexDirection: 'column'
     }}>
  
  <div className="card border-0 shadow-lg p-4" 
       style={{ 
         borderRadius: '25px', 
         maxWidth: '400px', 
         width: '100%',
         backgroundColor: '#ffffff' 
       }}>
    
    <div className="text-center mb-3">
      <h3 className='fw-bold' style={{ color: '#11998e' }}>Add New Item</h3>
      <div style={{ height: '3px', width: '40px', background: '#38ef7d', margin: '8px auto', borderRadius: '10px' }}></div>
    </div>

    {/* Compact Status Messages */}
    <div className="text-center small mb-2">
      {loading && <Loader />}
      {success && <h6 className="text-success fw-bold">{success}</h6>}
      {error && <h6 className="text-danger fw-bold">{error}</h6>}
    </div>

    <form onSubmit={handlesubmit}>
      <div className="mb-2">
        <label className="small fw-bold mb-1 opacity-75">Item Name</label>
        <input type="text" 
          placeholder='e.g. Wireless Mouse'
          className='form-control border-0 py-2 shadow-sm'
          style={{ backgroundColor: '#f1f5f9', borderRadius: '10px', fontSize: '14px' }}
          required
          value={product_name}
          onChange={(e) => setProductName(e.target.value)}/>
      </div>

      <div className="mb-2">
        <label className="small fw-bold mb-1 opacity-75">Description</label>
        <input type="text"
          placeholder='Short details...'
          className='form-control border-0 py-2 shadow-sm'
          style={{ backgroundColor: '#f1f5f9', borderRadius: '10px', fontSize: '14px' }}
          required
          value={product_description}
          onChange={(e) => setProductDescription(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="small fw-bold mb-1 opacity-75">Cost (Ksh)</label>
        <input type="number"
          placeholder='0.00'
          className='form-control border-0 py-2 shadow-sm'
          style={{ backgroundColor: '#f1f5f9', borderRadius: '10px', fontSize: '14px' }}
          required
          value={product_cost}
          onChange={(e) => setProductCost(e.target.value)} />
      </div>

      <div className="mb-4">
        <label className="small fw-bold mb-1" style={{ color: '#11998e' }}>Item Photo</label>
        <input type="file"
          className='form-control border-0 shadow-sm'
          style={{ backgroundColor: '#f1f5f9', borderRadius: '10px', fontSize: '13px' }}
          required 
          accept='image/*'
          onChange={(e) => setProductPhoto(e.target.files[0])}/>
      </div>

      <input type="submit"
        value="Upload Item"
        className='btn w-100 fw-bold text-white py-2 shadow' 
        style={{ 
          background: 'linear-gradient(to right, #11998e, #38ef7d)', 
          border: 'none',
          borderRadius: '10px',
          letterSpacing: '1px'
        }} />

    </form>
  </div>
  <Footer/>
</div>
  )
}

export default Addproducts;