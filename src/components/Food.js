import React, { useState, useEffect } from "react";
import Food from "./FoodList";

const Home = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
    const [food, setFood] = useState([]);
    
    
  useEffect(() => {
    getFood();
  }, []);

  const getFood = async () => {
    const response = await fetch(`https://koskei57.github.io/server/db.json`);
    const data = await response.json();
    setFood(data);
  };
    
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

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
          value={search}
          onChange={handleFormChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <h1>Welcome...its gonna be a lit day i swear ❤️ </h1>
      {food.map((foo) => (
        <Food
          key={foo.id}
          name={foo.strCategory}
          image={foo.strCategoryThumb}
          description={foo.strCategoryDescription}
        />
      ))}
    </div>
  );
};

export default Home;
