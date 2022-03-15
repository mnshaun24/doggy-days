import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/auth';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder='Your phone number'
          name='phoneNumber'
          type='phoneNumber'
          id='phoneNumber'
          onChange={handleChange}
        />
        <input
          placeholder='*********'
          name='password'
          type='password'
          id='password'
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Login;