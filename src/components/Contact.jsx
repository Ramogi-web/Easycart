import React from 'react';
import Footer from './Footer';

const Contact = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <div className="flex-grow-1 d-flex align-items-center justify-content-center py-5 px-3"
        style={{ background: 'radial-gradient(circle at top right, #2a0845, #6441A5)' }}>

        <div className="container" style={{ maxWidth: '950px' }}>
          <div className="row g-0 shadow-lg"
            style={{ borderRadius: '30px', overflow: 'hidden' }}>

            {/* LEFT SIDE */}
            <div className="col-md-5 p-5 text-white d-flex flex-column justify-content-center"
              style={{ background: 'rgba(20, 5, 35, 0.95)' }}>

              <h2 className="fw-bold mb-3">Talk to EasyCart</h2>

              <p className="opacity-75 mb-4">
                We’re here to help you make the best tech choices and ensure your shopping experience is smooth and reliable.
              </p>

              <p className="mb-2">📧 <strong>Email:</strong> hello@easycart.com</p>
              <p className="mb-2">📞 <strong>Phone:</strong> +254 111508000</p>
              <p className="mb-2">📍 <strong>Location:</strong> Nairobi, Kenya</p>

            </div>

            {/* RIGHT SIDE CONTENT (REPLACES FORM) */}
            <div className="col-md-7 p-5 bg-white">

              <h3 className="fw-bold mb-3" style={{ color: '#2a0845' }}>
                How can we help you?
              </h3>

              <p className="text-muted mb-4">
                At EasyCart, we value our customers and are always ready to assist you. 
                You can reach out to us for:
              </p>

              <ul className="mb-4" style={{ lineHeight: '1.8' }}>
                <li>🛍️ Product inquiries and availability</li>
                <li>📦 Order tracking and delivery updates</li>
                <li>🔧 Technical support for electronics</li>
                <li>💼 Bulk or wholesale purchases</li>
                <li>❓ General questions about our services</li>
              </ul>

              <div style={{
                background: '#f1f5f9',
                padding: '20px',
                borderRadius: '12px'
              }}>
                <p className="mb-2 fw-bold">💡 Quick Tip:</p>
                <p className="mb-0 text-muted">
                  For faster assistance, call us directly or send an email with clear details about your request.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;