import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  const [status, setStatus] = useState(true)
  const [cart, setCart] = useState([
  ]);
  return (
    <div className="App">
      <Header status={status} setStatus={setStatus} />
      {status ? (
        <ParentComponent cart={cart} setCart={setCart} status={status} setStatus={setStatus} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default App;
