import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './componets/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider, ShopContext } from './context/shop-context';
import { useContext, useEffect } from 'react';


function App() {

  
  return (
    <div className="App"> 
    <ShopContextProvider>
 
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/shop" element={<Shop />}/>  
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;
