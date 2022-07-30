import React, { useState } from "react";
import { Button } from "react-scroll";

function Food(){
    const[strCategory,setName] = useState("");
    const [price, setPrice] = useState("");
    const[strCategoryDescription,setDescription] = useState("");


    function handleSubmit(e){
      e.preventDefault();
      const itemData = {
        strCategory: strCategory,
        strCategoryDescription: strCategoryDescription,
        price: price,
      };
      
      fetch("https://myfood578.herokuapp.com/meal",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(itemData),
      })
      .then(res=> res.json())
    .then(data=>{
      console.log(data)
    })
}
   function handlePrice(e){
       setPrice((e.target.value))
   }
    return(
        <form className="form-horizontal" onSubmit={handleSubmit}>
           <div className="form-group">
            <input type="text" placeholder="Enter Name" value={strCategory}
          onChange={(e) => setName(e.target.value)}/>
            </div> <br/>
            <div className="form-group">
            <input type="text" placeholder="Enter description" value={strCategoryDescription}
          onChange={(e) => setDescription(e.target.value)}/> </div>
            <br/>
            <div className="form-group">
            <input type="text" placeholder="Enter price" className = "price" value={price} onChange={handlePrice} />
            <br/>
            <button type="submit" value="Add " className="btn" >SUBMIT</button>
            </div>
        </form>
    )
}
export default Food;