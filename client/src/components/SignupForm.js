import React, { useState } from 'react';

// import { Form, Button, Modal } from 'react-bootstrap';

import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';


const SignupForm = ({ handleClick }) => {
  

  //   const [userFormData, setUserFormData] = useState({ name: '', phoneNumber: '', password: '' });
  //   const [addUser, { error }] = useMutation(ADD_USER);
  
  
  //   const handleChange = (event) => {
  //     const { name, value } = event.target;

  //     setUserFormData({
  //       ...userFormData,
  //       [name]: value,
  //     });
  //   };

  // const handleFormSubmit = async event => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await addUser({
  //       variables: { ...userFormData }
  //     });

  //     Auth.login(data.addUser.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };


  const [userFormData, setUserFormData] = useState({ phoneNumber: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        name: userFormData.name,
        password: userFormData.password,
        phoneNumber: userFormData.phoneNumber,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  return (
    <>
     <div className="modal-test" style={{backgroundColor: 'blue'}}>
     <div>
      <h2>Sign Up Here: </h2>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder='Your name here'
          name='name'
          type='text'
          id='name'
          value={userFormData.name}
          onChange={handleChange}
        />
        
        <input
          placeholder='Your phone number'
          name='phoneNumber'
          type='phoneNumber'
          id='phoneNumber'
          value={userFormData.phoneNumber}
          onChange={handleChange}
        />
        <input
          placeholder='*********'
          name='password'
          type='password'
          id='pwd'
          value={userFormData.password}
          onChange={handleChange}
        />
       <button type='submit' onClick={() => handleClick()}>Submit</button>
      </form>
      {/* {error && <div>Sign up failed</div>} */}
    </div>
  </div>
      
    {/* <Button onClick={handleShow}>Sign up</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form></Form>
        </Modal.Body>
        <Modal.Footer>
          <Button></Button>
          <Button onClick={handleClose}>Submit</Button>
        </Modal.Footer>
      </Modal> */}
    </>

  )
}


export default SignupForm;


  // const handleInputChange = (event) => {
    //   const { name, value } = event.target;
    //   setUserFormData({ ...userFormData, [name]: value });
    // };
    
    // const handleFormSubmit = async (event) => {
      //   event.preventDefault();

  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
    
    //   try {
      //     const { data } = await addUser({
        //       variables: {...userFormData},
        //     });
        
        //     Auth.login(data.addUser.token)
        
        //   } catch (err) {
          //     console.error(err);
          //     setShowAlert(true);
          //   }
          
          //   setUserFormData({
            //     name: '',
            //     phoneNumber: '',
            //     password: '',
            //   });
            // };