import React, { useState, useEffect } from "react";
import Food from "./FoodList";

const Home = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [food, setFood] = useState([]);
    
    
  useEffect(() => {
    getFood();
  }, [query]);

  const getFood = async () => {
    const response = await fetch("https://myfood578.herokuapp.com/meal");
    const data = await response.json();
    setFood(data);
  };
  console.log(getFood);
  
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  
  // const filterSearch = 
  

  function handleFormChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <div></div>
      <form className="search" onSubmit={handleFormSubmit}>
        <input
          className="bar"
          type="text"
          setFood={setFood}
          value={search}
          onChange={handleFormChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
  
      {
        food.filter((meal) => {
          if (search === "") {
            return meal;
          } else if (meal.strCategory.toLowerCase().includes(search.toLocaleLowerCase())) {
            return meal;
          }
        })
          .map((meal) => (
            <Food
              key={meal.idCategory}
              name={meal.strCategory}
              image={meal.strCategoryThumb}
              price={meal.price}
              description={meal.strCategoryDescription}
            />
        
          ))}
    </div>
  );
    }
  


export default Home;
