import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {

  //initialize the hooks
  const [username, setUsername]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [phone, setPhone]= useState("")

  // Definethe three states an application will move to
  const[loading, setLoading] =useState("");
  const[success, setSuccess] =useState("");
  const[error, setError] =useState("")

  //Below is a function that will handle the submit action
  const handlesubmit =async(e) =>{
    //Below we prevent our site from loading
    e.preventDefault()

    //Update our loading hook with a message that will be displayed to the user who are trying to register
    setLoading("please wait as registartion is in progress...")

    try{
      //create a formdata object that will enable you to capture the four details entered on the form
      const formdata =new FormData();

      //Insert the four details(username,email,password,phone) in terms of key-value pairs
      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("phone", phone);

      // by use of axios ,we can access the method post
      const response=await axios.post("http://ramogi-web.alwaysdata.net/api/signup",formdata)

      // setback the loading hook to default
      setLoading("");

      //just incase everything goes on well, update the success hook with a message
      setSuccess(response.data.message)

      //clear your hooks
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");

      //set timeout
       setTimeout(() => {
    setSuccess("");
  }, 5000);
    }
    catch(error){
      //set the loading back to default
      setLoading("")

      //update the error hook with the message given back from the response
      setError(error.message)
    }
  }

  return (
<div className='min-vh-100 d-flex align-items-center justify-content-center' 
     style={{ 
       background: 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)', 
       padding: '15px' 
     }}>
  
  <div className="card border-0 p-4" 
       style={{ 
         borderRadius: '25px', 
         maxWidth: '360px', /* Smaller width for a cleaner look */
         width: '100%',
         boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
         backgroundColor: '#ffffff' 
       }}>
    
    <div className="text-center mb-3">
      <h3 className='fw-bold' style={{ color: '#3a7bd5', letterSpacing: '-1px' }}>
        Create Account
      </h3>
      <div style={{ height: '3px', width: '40px', background: '#00d2ff', margin: '8px auto', borderRadius: '10px' }}></div>
    </div>

    {/* Small Status Messages */}
    <div className="text-center small mb-2">
       {loading && <span className="text-info fw-bold">Loading...</span>}
       {success && <span className="text-success fw-bold">{success}</span>}
       {error && <span className="text-danger fw-bold">{error}</span>}
    </div>

    <form onSubmit={handlesubmit}>
      <div className="mb-2">
        <input type="text" 
          placeholder='Username'
          className='form-control border-0 py-2 shadow-sm'
          style={{ backgroundColor: '#f1f5f9', borderRadius: '10px', fontSize: '14px' }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required/>
      </div>

      <div className="mb-2">
        <input type="email"
          placeholder='Email' 
          className='form-control border-0 py-2 shadow-sm'
          style={{ backgroundColor: '#f1f5f9', borderRadius: '10px', fontSize: '14px' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
      </div>

      <div className="mb-2">
        <input type="password"
          placeholder='Password'
          className='form-control border-0 py-2 shadow-sm'
          style={{ backgroundColor: '#f1f5f9', borderRadius: '10px', fontSize: '14px' }}
          value={password}
          onChange={(e)=>setPassword(e.target.value)} 
          required/>
      </div>

      <div className="mb-3">
        <input type="tel"
          placeholder='Phone' 
          className='form-control border-0 py-2 shadow-sm'
          style={{ backgroundColor: '#f1f5f9', borderRadius: '10px', fontSize: '14px' }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required/>
      </div>

      <button type="submit" className='btn w-100 fw-bold text-white py-2 shadow' 
              style={{ 
                background: 'linear-gradient(to right, #00d2ff, #3a7bd5)', 
                border: 'none',
                borderRadius: '10px',
                fontSize: '15px'
              }}>
        SIGN UP
      </button>

      <div className="text-center mt-3 small">
        <span className="text-muted">Have an account? </span>
        <Link to={'/signin'} className="fw-bold text-decoration-none" style={{ color: '#3a7bd5' }}>Sign In</Link>
      </div>
    </form>
  </div>
</div>
)
}

export default Signup;