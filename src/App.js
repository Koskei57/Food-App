import React,{useState,useEffect} from "react";
import './App.css';
import { PropagateLoader } from "react-spinners";
import Navbar from "./components/Navbar";
import Food from "./components/Food";
// import { cleanup } from "@testing-library/react";


function App() {
  const [loading, setLoading] = useState(false);
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState("");
  const [query,setQuery]= useState('')
  
  const getFood = async () => {
    
    const response = await fetch(`https://koskei57.github.io/server/db.json`)
    const data = await response.json();
    setFood(data);
  
  }
  useEffect(() => {
    getFood()
    setLoading(true)
   setTimeout(() => {
      setLoading(false)
    }, 5000)
    // return cleanup(){
    //   clearInterval(timerID);
    // }
  }, [query]);
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setQuery(search);
    setSearch("");
  }
  
  function handleFormChange(event) {
  setSearch(event.target.value) 
  
  }
  return (  
    <div className="App">
      {
        loading ? <PropagateLoader  loading={loading}  size={40} />
          :
          <div>
            <Navbar />
          </div>
      }
      <form className="search" onSubmit={handleFormSubmit}>
        <input  className="bar" type="text" value={search} onChange={handleFormChange} />
        <button className="search-button" type="submit"  >Search</button>
      </form>
      
      <h1>Welcome...its gonna be a lit day i swear ❤️ </h1>
      {food.map(foo => (
        <Food key={foo.id} name={foo.strCategory} image={foo.strCategoryThumb} description={foo.strCategoryDescription} />
      ))}
    </div>
  );
}

export default App;
