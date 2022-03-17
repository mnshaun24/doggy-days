import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
import { Form, Button, Modal } from 'react-bootstrap';
import  LoginForm  from '../components/LoginForm';
// import { Link } from 'react-router-dom';
// import { LOGIN } from '../utils/auth';
// import Auth from '../utils/auth';

function Login() {
  
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  }


  return (

    <>
    <Button onClick={() => setIsOpen(true)}>LoginForm here!
     </Button>
     {isOpen && <LoginForm handleClick={handleClick} />}
   </>
    // <div>
    //   <h2>Login</h2>
    //   <form onSubmit={handleFormSubmit}>
    //     <input
    //       placeholder='Your phone number'
    //       name='phoneNumber'
    //       type='phoneNumber'
    //       id='phoneNumber'
    //       onChange={handleChange}
    //     />
    //     <input
    //       placeholder='*********'
    //       name='password'
    //       type='password'
    //       id='password'
    //       onChange={handleChange}
    //     />
    //   </form>
    // </div>
  );
};

export default Login;