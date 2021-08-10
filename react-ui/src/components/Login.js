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

    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="logo192.png" alt="logo"/>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
        <p className="mt-2 text-center text-sm text-gray-600"><Link to="/signup">← Or if you don't have an account, click here to register!</Link></p>
      </div>
      
        <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="email@email.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
            />
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="password"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
            />
          </div>

          {error ? (
            <div>
              <p className="error-text">Hey you gave us the wrong credentials! Try again!</p>
            </div>
          ) : null}
          <div className="">
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
