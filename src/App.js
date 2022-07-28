import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import { PropagateLoader } from "react-spinners";
import Navbar from "./components/Navbar";
import Food from "./components/Food";
import Home from "./components/Home";
import Login from "./components/Login";


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
        </Switch>
      </div>
      {
        loading ? <PropagateLoader  loading={loading}  size={10} />
          :
          <div>
          </div>
      }
      
      </div>
  
  );
}

export default App;
