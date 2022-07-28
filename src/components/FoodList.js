import React from 'react';
import "./css/Food.css";


const Food = ({ id, name, image, price, description }) => {
  return (
    <div className="food" key={id}>
      <img src={image} alt="Keroma loading" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button>Order</button>
    </div>
  );
};

export default Food