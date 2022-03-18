import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const SignupForm = () => {

  const [userFormData, setUserFormData] = useState({ name: '', phoneNumber: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);


  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...userFormData }
      });

      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      name: '',
      phoneNumber: '',
      password: ''
    })
  };

  return (
    // <>
    //   <div>
    //     <h2>Sign Up Here: </h2>
    //     <form onSubmit={handleFormSubmit}>
    //       <input
    //         placeholder='Your name here'
    //         name='name'
    //         type='name'
    //         id='name'
    //         value={userFormData.name}
    //         onChange={handleInputChange}
    //       />
    //       <input
    //         placeholder='Your phone number'
    //         name='phoneNumber'
    //         type='number'
    //         // id='phoneNumber'
    //         value={userFormData.phoneNumber}
    //         onChange={handleInputChange}
    //       />
    //       <input
    //         placeholder='*********'
    //         name='password'
    //         type='password'
    //         id='pwd'
    //         value={userFormData.password}
    //         onChange={handleInputChange}
    //       />
    //       <button type="submit">Submit
    //         <Link to={"home"}>
    //         </Link>
    //       </button>
    //     </form>
    //     {error && <div>Sign up failed</div>}
    //   </div>
    // </>
  )
}


export default SignupForm;