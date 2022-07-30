import React, { useState } from 'react';
import "./css/Login.css";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password:""
    })
  
    function handleSubmit(event) {
        event.preventDefault();
        
    }
     
    function handleChange(e) {
        const key = e.target.id
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }
    
  return (
      <div className='login'>
          <form onSubmit={handleSubmit}>
              <div className='log'>
              <h1>Create an Account</h1>
              <label htmlFor='username'>Username</label><br/>
              <input type="text" id="username" required value={formData.username} onChange={handleChange} /><br/>
              
              <label htmlFor='password'>Password</label><br/>
              <input type="text" id="password" required value={formData.password} onChange={handleChange} /><br/>
              
              <input type="submit" value="Sign Up" />
              
          </div>
          </form>
      
      </div>
  )
}

export default Login