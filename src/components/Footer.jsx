import { Link } from 'react-router-dom';

const Footer = ({ developerName = "Ramogi" }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      background: 'linear-gradient(90deg, #ffde59, #4facfe)', 
      color: '#1a1a1a',
      padding: '40px 20px 20px 20px',
      marginTop: 'auto',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '30px' 
      }}>
        
        {/* Column 1: Brand & Bio */}
        <div>
          <h2 style={{ margin: '0 0 10px 0' }}>Easy Cart</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
            Your one-stop shop for the latest electronics. From high-end laptops to premium audio gear.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 style={{ marginBottom: '15px' }}>Shopping</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
            <li style={{ marginBottom: '8px' }}> <Link to="/">Products</Link></li>
            <li style={{ marginBottom: '8px' }}>Hot Deals</li>
            <li style={{ marginBottom: '8px' }}>Best Prices ever</li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h4 style={{ marginBottom: '15px' }}>Customer Service</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
            <li style={{ marginBottom: '8px' }}> <Link to='/contactus' >Contact us</Link></li>
            <li style={{ marginBottom: '8px' }}> <Link to='/shippingpolicy' >Shipping Policy</Link> </li>
            <li style={{ marginBottom: '8px' }}> <Link to='return and refund policy'>Returns & Refunds</Link></li>
          </ul>
        </div>

        {/* Column 4: Tech Info */}
        <div>
          <h4 style={{ marginBottom: '15px' }}>Connect</h4>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
            <span><a href="https://www.facebook.com">
  <img src="images/fbicon.jpg" alt="Facebook" style={{ width: '30px' }} />
</a>
</span> 
<span><a href="https://instagram.com">
  <img src="images/igicon.jpg" alt="Instagram" style={{ width: '30px' }}/>
</a>
</span> 
<span><a href="https://twitter.com">
  <img src="images/twittericon.jpg" alt="Twitter" style={{ width: '30px' }} />
</a>
</span>
          </div>
          <button 
            onClick={scrollToTop}
            style={{ 
              background: '#1a1a1a', color: 'white', border: 'none', 
              padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' 
            }}
          >
            ↑ Back to Top
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ 
        borderTop: '1px solid rgba(0,0,0,0.1)', 
        marginTop: '40px', 
        paddingTop: '20px', 
        textAlign: 'center',
        fontSize: '13px',
        fontWeight: 'bold'
      }}>
        <p>© {new Date().getFullYear()} Easy Cart. Designed & Developed by {developerName}.</p>
      </div>
    </footer>
  );
};

export default Footer;
