import React from 'react'
import "../css/notfound.css"

const Notfound = () => {
  return (
<div className='min-vh-100 d-flex align-items-center justify-content-center text-center' 
     style={{ 
      background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)', 
      padding: '20px',
      fontFamily: "'Inter', sans-serif" 
     }}>
  
  <div className="p-5" style={{ maxWidth: '500px' }}>
    
    {/* Large Stylized 404 */}
    <h1 className='fw-bold m-0' style={{ 
        fontSize: '12rem', 
        background: 'linear-gradient(180deg, #38bdf8 0%, #818cf8 100%)', 
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent',
        lineHeight: '1',
        letterSpacing: '-5px',
        filter: 'drop-shadow(0 0 30px rgba(56, 189, 248, 0.3))'
      }}>
      404
    </h1>

    <div className="mt-n4">
      <h2 className='text-white fw-bold mb-3' style={{ fontSize: '2rem' }}>
        Lost in Space?
      </h2>
      <p className='text-light opacity-50 mb-5 fs-5'>
        The page you're looking for has drifted out of orbit. Let's get you back to safety.
      </p>

      {/* Pulsing Action Button */}
      <a href="/" className='btn btn-lg px-5 py-3 fw-bold text-white shadow-lg' 
         style={{ 
           background: 'linear-gradient(45deg, #38bdf8, #1d4ed8)', 
           borderRadius: '50px',
           border: 'none',
           transition: 'all 0.3s ease',
           textDecoration: 'none'
         }}
         onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
         onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
        🚀 TAKE ME HOME
      </a>
    </div>

    {/* Subtle Background Elements */}
    <div style={{ 
      position: 'absolute', 
      top: '20%', 
      left: '10%', 
      width: '100px', 
      height: '100px', 
      background: 'rgba(56, 189, 248, 0.05)', 
      borderRadius: '50%', 
      filter: 'blur(40px)' 
    }}></div>
  </div>
</div>
  )
}

export default Notfound