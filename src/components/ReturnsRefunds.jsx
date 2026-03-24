import React from 'react';
import Footer from './Footer';

const ReturnsRefunds = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="flex-grow-1 py-5 px-3" style={{ background: 'radial-gradient(circle at top right, #2a0845, #6441A5)' }}>
        <div className="container shadow-lg p-5 bg-white" style={{ maxWidth: '800px', borderRadius: '30px' }}>
          <h2 className="fw-bold mb-4" style={{ color: '#2a0845' }}>Returns & Refunds</h2>
          
          <div className="mb-4">
            <h5 className="fw-bold text-danger">1. Return Window</h5>
            <p className="text-muted">At <strong>Easy Cart</strong>, we offer a <strong>7-day return policy</strong> for all electronics. If your gadget has a technical fault, we'll swap it out or refund you immediately.</p>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold text-danger">2. Condition of Items</h5>
            <p className="text-muted">To be eligible for a return, the item must be:</p>
            <ul>
              <li>In its original packaging with all seals intact (unless defective).</li>
              <li>Accompanied by the original receipt or proof of purchase.</li>
              <li>Free from physical damage or unauthorized repairs.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold text-danger">3. Refund Process</h5>
            <p className="text-muted">Once <strong>Ramogi</strong>'s technical team inspects the item, refunds are processed within <strong>3-5 business days</strong> via your original payment method (M-Pesa or Card).</p>
          </div>

          <div className="p-3 mt-4" style={{ background: '#fff5f5', borderRadius: '15px', borderLeft: '5px solid #dc3545' }}>
            <p className="mb-0 small"><strong>Warranty Note:</strong> Most of our electronics come with a 1-year manufacturer warranty. After the 7-day return window, we will assist you in claiming your warranty directly with the brand.</p>
          </div>
        </div>
      </div>
      <Footer developerName="Ramogi" />
    </div>
  );
};

export default ReturnsRefunds;
