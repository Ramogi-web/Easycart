// link in the footer

import React from 'react';
import Footer from './Footer'; 

const Contact = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Background Wrapper */}
      <div className="flex-grow-1 d-flex align-items-center justify-content-center py-5 px-3"
           style={{ background: 'radial-gradient(circle at top right, #2a0845, #6441A5)' }}>
        
        <div className="container" style={{ maxWidth: '950px' }}>
          <div className="row g-0 shadow-lg" style={{ borderRadius: '30px', overflow: 'hidden' }}>
            
            {/* Left Side: Professional Electronics Shop Info */}
            <div className="col-md-5 p-5 text-white d-flex flex-column justify-content-center"
                 style={{ background: 'rgba(20, 5, 35, 0.95)', backdropFilter: 'blur(10px)' }}>
              
              <h2 className="fw-bold mb-3">Talk to a Tech Expert</h2>
              <p className="opacity-75 mb-5" style={{ fontSize: '0.95rem' }}>
                Need help choosing between the latest processors or finding the right high-fidelity audio gear? 
                <strong> Ramogi</strong> and the team are ready to help you upgrade your setup.
              </p>
              
              <div className="d-flex mb-4">
                <div className="me-3 mt-1"><i className="bi bi-envelope"></i></div>
                <div>
                  <h6 className="fw-bold text-uppercase small opacity-50 mb-1">Direct Inquiry</h6>
                  <p className="mb-0">hello@easycart.com</p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="me-3 mt-1"><i className="bi bi-telephone"></i></div>
                <div>
                  <h6 className="fw-bold text-uppercase small opacity-50 mb-1">Support Line</h6>
                  <p className="mb-0">+254 111508000</p>
                </div>
              </div>

              <div className="d-flex">
                <div className="me-3 mt-1"><i className="bi bi-geo-alt"></i></div>
                <div>
                  <h6 className="fw-bold text-uppercase small opacity-50 mb-1">Visit Easy Cart</h6>
                  <p className="mb-0">Electronics Plaza, 4th Floor<br/>Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* Right Side: Message Form */}
            <div className="col-md-7 p-5 bg-white">
              <div className="mb-4">
                <h3 className="fw-bold mb-1" style={{ color: '#2a0845' }}>Drop us a line</h3>
                <p className="text-muted small">We typically respond to tech inquiries within 2 hours.</p>
              </div>

              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold mb-1 opacity-75">Your Name</label>
                    <input type="text" className="form-control border-0 py-3 shadow-sm" 
                           placeholder="John Doe" style={{ background: '#f1f5f9', borderRadius: '12px' }} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="small fw-bold mb-1 opacity-75">Email Address</label>
                    <input type="email" className="form-control border-0 py-3 shadow-sm" 
                           placeholder="john@example.com" style={{ background: '#f1f5f9', borderRadius: '12px' }} />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="small fw-bold mb-1 opacity-75">Subject</label>
                  <select className="form-select border-0 py-3 shadow-sm" style={{ background: '#f1f5f9', borderRadius: '12px' }}>
                    <option>Product Availability</option>
                    <option>Order Status</option>
                    <option>Technical Support</option>
                    <option>Bulk/Wholesale Inquiry</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="small fw-bold mb-1 opacity-75">Message</label>
                  <textarea className="form-control border-0 py-3 shadow-sm" rows="4" 
                            placeholder="Tell us what gadget you're looking for..." 
                            style={{ background: '#f1f5f9', borderRadius: '12px' }}></textarea>
                </div>

                <button type="submit" className="btn w-100 py-3 fw-bold text-white shadow"
                        style={{ 
                          background: 'linear-gradient(to right, #6441A5, #2a0845)', 
                          border: 'none', 
                          borderRadius: '12px',
                          letterSpacing: '0.5px'
                        }}>
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Footer at the very bottom */}
      <Footer/>
    </div>
  );
};

export default Contact;
