import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './App.css';
import { PropagateLoader } from "react-spinners";
import Navbar from "./components/Navbar";
import Food from "./components/Food";


function App() {
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true)
   setTimeout(() => {
      setLoading(false)
    }, 5000)
  
  }, []);
  
  return (  
    <Router>
    <div className="App">
      <Navbar />
      {
        loading ? <PropagateLoader  loading={loading}  size={10} />
          :
          <div>
          </div>
      }
      <Food/>
      </div>
    </Router>
  );
}

export default App;
