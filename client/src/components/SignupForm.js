import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

// import Auth from '../utils/auth';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';


const SignupForm = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // const [userFormData, setUserFormData] = useState({ name: '', phoneNumber: '', password: '' });
  // // set state for form validation
  // const [validated] = useState(false);
  // // set state for alert
  // const [showAlert, setShowAlert] = useState(false);

  // const [addUser] = useMutation(ADD_USER);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserFormData({ ...userFormData, [name]: value });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   // check if form has everything (as per react-bootstrap docs)
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

  return (
    <>
      <Form>
        <Modal show={showModal}></Modal>
        <Button></Button>

      </Form>
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