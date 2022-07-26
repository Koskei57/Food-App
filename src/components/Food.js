import React from 'react';
import style from "./css/Food.css";

const Food = ({name,image,description}) => {
  return (
      <div className="food">
          <img src={image} alt='Keroma loading' />
          <h2>{ name}</h2>
          <p>{description}</p>
      </div>
  )
}

export default Food