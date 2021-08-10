import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';



function Signup(props) {
  
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    })
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  }



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    })
  }



  return (
    <div className="">
      
      <Link to="/login">← What are you doing here? Go Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>

        <div className="">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>

        <div className="">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="email@email.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>

        <div className="">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>

        <div className="">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
