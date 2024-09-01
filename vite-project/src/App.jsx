import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginPopup from './Components/LoginPopup/loginpopup.jsx';
import Home from './Pages/Home/Home'
import Cart from './Pages/cart/cart.jsx';
import PlaceOrder from './Pages/placeorder/placeorder.jsx'; 
import Footer from './Components/Footer/Footer.jsx';

const App = () => {

  const [showlogin, setShowlogin] = useState(false)
  return ( 
    <>
    {showlogin?<LoginPopup setShowlogin={setShowlogin}/>:<></>}
    <div className="app">
    <Navbar setShowlogin={setShowlogin}/>
    
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </>
  
    
  );
};

export default App;
