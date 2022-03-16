import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useMutation } from '@apollo/client';

import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ phoneNumber: '', password: '' });
  const [validated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [login] = useMutation(LOGIN);

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
      const {data} = await login({
        variables: {...userFormData},
      });


     Auth.login(data.login.token);
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
          Something went wrong with your login credentials!
        </Modal>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
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
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;















// import React, { useState } from 'react';
// import { Form, Button, Modal } from 'react-bootstrap';

// import { LOGIN } from '../utils/mutations';
// import Auth from '../utils/auth';

// const login = () => {
//   const [userFormData, setUserFormData] = useState({ phoneNumber: '', password: '' });
//   const [validated] = useState(false);
//   // const [showAlert, setShowAlert] = useState(false);

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     try {
//       const response = await LOGIN(userFormData);

//       if (!response.ok) {
//         throw new Error('Something went wrong.');
//       }

//       const { token, user } = await response.json();
//       console.log(user);
//       Auth.login(token);
//     } catch (err) {
//       console.error(err);
//       setShow(true);
//     }

//     setUserFormData({
//       phoneNumber: '',
//       password: '',
//     });
//   };

//   return (
//     <>
//       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         <Modal show={show}>

//         </Modal>

//       </Form>
//     </>
//   )
// }

// export default login;
// import React, { useState } from 'react';


// function loginForm (props) {

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <>
//       <Button onClick={handleShow}>
//         Login 
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Login </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form>
//             <div className="phoneNumber">
//               <label htmlFor='phoneNumber' className="phoneNumber">Phone Number:</label>
//               <input type="text" name="phoneNumber" />
//             </div>
//             <div className="password">
//               <label htmlFor='password'>Password:</label>
//               <input type="password" ></input>
//             </div>
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={handleClose}></Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   )
// }


// return (
//   <div className="modalBackdrop">
//     <div className="modalContainer">
//       <h3 className="modalTitle"> Login </h3>
//       <form>
//         <div className="phoneNumber">
//           <label htmlFor='phoneNumber' className="phoneNumber">Phone Number:</label>
//           <input type="text" name="phoneNumber" />
//         </div>
//         <div className="password">
//           <label htmlFor='password'>Password:</label>
//           <input type="password" ></input>
//         </div>
//       </form>
//     </div>
//   </div>
// );