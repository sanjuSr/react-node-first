import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('/api/signup', formData);
  //     // Handle the response from the server (e.g., display a success message or redirect the user).
  //     console.log('Signup successful', response.data);
  //   } catch (error) {
  //     // Handle errors (e.g., display an error message to the user).
  //     console.error('Error during signup', error);
  //   }
  // };

const handleSubmit=()=>{
  console.log(formData);
  axios.post("http://localhost:3001/api/signup",{
    email:formData.email,
    password:formData.password
  }).then(res=>{
    console.log("Reg Sucess");
  }).catch(err=>{
    console.log("Error");
  })
};

  return (
    <>
      <div className="signup-form">
        <h2>Sign Up</h2>
        
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" 
          onClick={handleSubmit}
          >Sign Up</button>
         
      </div>
      
    </>
  );
}

export default App;