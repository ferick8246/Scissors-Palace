import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';



function Login(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);

    } catch (e) { console.log(e) }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (

    <div className="">

      <Link to="/signup">← Hey you don't have an account. Go Signup!</Link>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
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

        {error ? (
          <div>
            <p className="error-text">Hey you gave us the wrong credentials! Try again!</p>
          </div>
        ) : null}
        <div className="">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login;
