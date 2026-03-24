import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Notfound from './components/Notfound';
import Contact from './components/Contact';
import ShippingPolicy from './components/ShippingPolicy';
import ReturnsRefunds from './components/ReturnsRefunds';

function App() {
  return (
    <Router>
          <div className="App">
<header className="text-center p-3 shadow-sm" 
        style={{ background: 'linear-gradient(90deg, #ffde59, #4facfe)', borderBottom: '3px solid #0056b3' }}>
  <h2 className="fw-bold m-0" style={{ color: '#1a2a6c', fontSize: '1.8rem' }}>
    Easy <span style={{ color: '#0056b3' }}>Cart</span>
  </h2>
  <p className="fw-bold m-0" style={{ color: '#1a2a6c', fontSize: '0.9rem', opacity: '0.8' }}>
    PAY LESS • GET MORE
  </p>
</header>

<nav className="custom-nav">
  <Link to="/" className="nav-btn home">Home</Link>
  <Link to="/addproducts" className="nav-btn add">Add Products</Link>
  <Link to="/signin" className="nav-btn signin">Signin</Link>
  <Link to="/signup" className="nav-btn signup">Signup</Link>
</nav>

      <Routes>
      <Route path='/' element={<Getproducts/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/addproducts' element={<Addproducts/>}/>
      <Route path='/makepayment' element={<Makepayment/>}/>
      <Route path='/contactus' element={<Contact/>}/>
      <Route path='/shippingpolicy' element={<ShippingPolicy/>}/>
      <Route path='/return and refund policy' element={<ReturnsRefunds/>}/>
      <Route path='*' element={<Notfound/>}/>


      </Routes>
    </div>

    </Router>
  );
}

export default App;
