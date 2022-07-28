import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import { PropagateLoader } from "react-spinners";
import Navbar from "./components/Navbar";
import Food from "./components/Food";
import Home from "./components/Home";
import FoodListForm from "./components/FoodListForm";
import Login from "./components/Login";
import { CartProvider } from "./cartContext";


function App() {
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true)
   setTimeout(() => {
      setLoading(false)
    }, 5000)
  
  }, []);
  
  return (  
    
    <div className="App">
      <CartProvider>
      <Navbar />
      <div className="switch">
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/food">
        <Food />
        </Route>
        <Route exact path="/login">
        <Login />
        </Route>
        <Route exact path="/foodlist">
        <FoodListForm />
        </Route>
        </Switch>
      </div>
      {
        loading ? <PropagateLoader  loading={loading}  size={10} />
          :
          <div>
          </div>
      }
      </CartProvider>
      </div>
  
  );
}

export default App;
