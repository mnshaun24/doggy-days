import React, { useState } from 'react';
import { Button } from "react-bootstrap";

import DogSwiper from '../pages/DogSwiper';
import { Link } from "react-router-dom";

import { useMutation } from '@apollo/client';

import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {

  const [userFormData, setUserFormData] = useState({ phoneNumber: '', password: '' });

  const [login, { error }] = useMutation(LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.login.token)
    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      phoneNumber: '',
      password: ''
    })
  };

  return (
    <>
      <div>
        <h2>Login Here:</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder='Your phone number'
            name='phoneNumber'
            type='phoneNumber'
            id='phoneNumber'
            value={userFormData.phoneNumber}
            onChange={handleInputChange}
          />
          <input
            placeholder='*********'
            name='password'
            type='password'
            id='password'
            value={userFormData.password}
            onChange={handleInputChange}
          />
          <Button variant="outline-light" type="submit">Submit</Button>
        </form>
        {error && <div>Login failed</div>}
      </div>
    </>
  );
};

export default LoginForm;