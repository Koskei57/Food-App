import React,{useState,useEffect} from "react";
import './App.css';
import { PropagateLoader } from "react-spinners";
import Navbar from "./components/Navbar";


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
      {
        loading ? <PropagateLoader  loading={loading}  size={40} />
          :
          <>
          <Navbar />
          </>
      }
      <h1>Welcome...its gonna be a lit day i swear 🥰 </h1>
    </div>
  );
}

export default App;
