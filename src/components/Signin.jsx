import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Signin = () => {

  // Define the two hooks for capturing /storing the users inputs
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");

  //Declare three addiyional hooks
  const [loading, setLoading] =useState("");
  const [success, setSuccess] =useState("");
  const [error, setError] =useState("");

  //below we have the useNavigate hook to redirect us to another page on success login/signin
  const navigate =useNavigate()

  // function to handle the sign in action
  const handlesubmit =async (e) =>{
    //prevent the site fro reloading
    e.preventDefault()

    // update the loading hook with a message
    setLoading("Please wait while we auntheticate your account..")

    try {
      // create a form data object that will hold the email nad password
      const formdata = new FormData()

      // insert /append email and password
      formdata.append("email",email);
      formdata.append("password", password);

      //interact with the axios for the responce
      const response = await axios.post("http://ramogi-web.alwaysdata.net/api/signin", formdata);

      //set the loading book back default
      setLoading("");

      // CHECK whether the user exists as part of your response
      if(response.data.user){
        // if user is there details entered are correct
        //setSuccess("Log in successful")

         // Store user details in local storage
      localStorage.setItem("user", JSON.stringify(response.data.user));

        // if it is successful let a person get redirected to another page
        navigate("/");
      }
      else{
        //user  not there definately thre details are incorrect
        setError("Login failed. Please try again..")
      }
   
    } catch (error) {
      // set loading back to default
      setLoading("");
      
      //update the error with a message
      setError("Oops, something went wrong .Try again..")
      
    }
  }

  return (
<div className="min-vh-100 d-flex flex-column align-items-center justify-content-center px-3" 
     style={{ 
       background: 'radial-gradient(circle at top right, #2a0845, #6441A5)', // Deep, rich purple radial
     }}>
    
    {/* Reduced width from col-md-5 to col-md-3 for a sleeker look */}
    <div className="col-md-4 col-lg-3 flex-grow-1 py-5"> 
        <div className="card border-0 p-4 shadow-lg" 
             style={{ 
               borderRadius: '28px', 
               background: 'rgba(255, 255, 255, 0.95)',
               boxShadow: '0 15px 35px rgba(0,0,0,0.3)'     
             }}>
            
            {/* Header with Gradient Text */}
            <div className="text-center mb-4">
                <h2 className='fw-bold' style={{ 
                    background: 'linear-gradient(to right, #6441A5, #2a0845)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-1px'
                }}>Sign In</h2>
                <p className="text-muted small">Welcome back! Please enter your details.</p>
            </div>

            {/* Compact Status Messages */}
            {loading && <div className="text-info small text-center mb-2"><div className="spinner-border spinner-border-sm me-1"></div> {loading}</div>}
            {error && <div className="text-danger small text-center mb-2">⚠️ {error}</div>}
            
            <form onSubmit={handlesubmit}>
                {/* Email - Cleaner, smaller padding */}
                <div className="mb-3">
                    <input 
                        type="email"
                        className='form-control border-0 py-2 px-3 shadow-sm'
                        placeholder='Email address'
                        required
                        style={{ borderRadius: '10px', backgroundColor: '#f8f9fa', fontSize: '0.85rem' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                {/* Password */}
                <div className="mb-3">
                    <input 
                        type="password"
                        className='form-control border-0 py-2 px-3 shadow-sm'
                        placeholder='Password'
                        required
                        style={{ borderRadius: '10px', backgroundColor: '#f8f9fa', fontSize: '0.85rem' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

                {/* Smaller, stylish button */}
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

                {/* Footer */}
                <div className="text-center mt-3">
                    <small className="text-muted">New here? </small>
                    <Link to={'/signup'} className="small fw-bold text-decoration-none" style={{ color: '#6441A5' }}>Join us</Link>
                </div>
            </form>
        </div>
    </div>
    <Footer/>
</div>
  )
}

export default Signin;