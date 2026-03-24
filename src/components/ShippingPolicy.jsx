import React from 'react';
import Footer from './Footer';

const ShippingPolicy = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="flex-grow-1 py-5 px-3" style={{ background: 'radial-gradient(circle at top right, #2a0845, #6441A5)' }}>
        <div className="container shadow-lg p-5 bg-white" style={{ maxWidth: '800px', borderRadius: '30px' }}>
          <h2 className="fw-bold mb-4" style={{ color: '#2a0845' }}>Shipping & Delivery Policy</h2>
          
          <div className="mb-4">
            <h5 className="fw-bold text-primary">1. Fast & Secure Handling</h5>
            <p className="text-muted">At <strong>Easy Cart</strong>, we know gadgets are fragile. Every order is double-padded and inspected by <strong>Ramogi</strong>'s team before dispatch.</p>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold text-primary">2. Delivery Timelines</h5>
            <ul>
              <li><strong>Nairobi CBD:</strong> Same-day delivery for orders before 2 PM.</li>
              <li><strong>Rest of Kenya:</strong> 24 - 48 hours via secure courier.</li>
              <li><strong>International:</strong> 7 - 14 business days.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold text-primary">3. Real-Time Tracking</h5>
            <p className="text-muted">Once your electronics ship, you will receive a tracking ID via SMS and Email to monitor your package in real-time.</p>
          </div>

          <div className="p-3 mt-4" style={{ background: '#f8f9fa', borderRadius: '15px', borderLeft: '5px solid #6441A5' }}>
            <p className="mb-0 small"><strong>Note:</strong> High-value items (Laptops/Consoles) require a signature and ID verification upon delivery for your security.</p>
          </div>
        </div>
      </div>
      <Footer developerName="Ramogi" />
    </div>
  );
};

export default ShippingPolicy;
