import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
// import Auth from '../utils/auth';
// import { ADD_USER } from '../utils/mutations';
import { Form, Button, Modal } from 'react-bootstrap';
import  SignupForm  from '../components/SignupForm';

const Signup = () => {
  // const [formState, setFormState] = useState({ })
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  }

  return (
    <>
     <Button onClick={() => setIsOpen(true)}> Open the Modal here
      </Button>
      {isOpen && <SignupForm handleClick={handleClick} />}
    </>
  )
}

export default Signup;