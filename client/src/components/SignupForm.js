import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const SignupForm = () => {
 
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [validated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: {...userFormData},
      });
    
      Auth.login(data.addUser.token)
    // try {
    //   const response = await createUser(userFormData);

      // if (!response.ok) {
      //   throw new Error('something went wrong!');
      // }

      // const { token, user } = await response.json();
      // console.log(user);
      // Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowModal(true);
    }

    setUserFormData({
      name: '',
      phoneNumber: '',
      password: '',
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Modal dismissible onClose={() => setShowModal(false)} show={showModal} variant='danger'>
          Something went wrong with your signup!
        </Modal>

        <Form.Group>
          <Form.Label htmlFor='name'>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
