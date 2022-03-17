import React, { useState } from 'react';

// import { Form, Button, Modal } from 'react-bootstrap';

// import Auth from '../utils/auth';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';


const SignupForm = ({ handleClick }) => {
  return (
    <>
      <div className="modal-test" style={{ backgroundColor: 'blue' }}>
        <div>
          <h2>Sign Up Here: </h2>
          <form>
            <input
              placeholder='Your name here'
              name='name'
              type='text'
              id='name'
            />

            <input
              placeholder='Your phone number'
              name='phoneNumber'
              type='phoneNumber'
              id='phoneNumber'
            // onChange={handleChange}
            />
            <input
              placeholder='*********'
              name='password'
              type='password'
              id='pwd'
            // onChange={handleChange}
            />
          </form>
        </div>
        <button onClick={() => handleClick()}>Submit</button>
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