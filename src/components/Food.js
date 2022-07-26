import React from 'react'

const Food = ({name,image,description}) => {
  return (
      <div>
          <img src={image} alt='Keroma loading' />
          <h2>{ name}</h2>
          <p>{description}</p>
      </div>
  )
}

export default Food