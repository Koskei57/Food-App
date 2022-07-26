import React,{useState,useEffect} from "react";
import './App.css';
import { PropagateLoader } from "react-spinners";
import Navbar from "./components/Navbar";
import Food from "./components/Food";
import FoodList from "./components/FoodList";

function App() {
  const [loading, setLoading] = useState(false);
  const [food, setFood] = useState([]);
  
  const getFood = async () => {
    
    const response = await fetch("https://koskei57.github.io/server/db.json")
    const data = await response.json();
    setFood(data);
  
  }
  useEffect(() => {
    getFood()
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
            <FoodList/>
          </>
      }
      <h1>Welcome...its gonna be a lit day i swear 🥰 </h1>
      {food.map(foo => (
        <Food name={foo.strCategory} image={foo.strCategoryThumb} description={foo.strCategoryDescription} />
      ))}
    </div>
  );
}

export default App;
