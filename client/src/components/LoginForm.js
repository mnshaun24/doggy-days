import React, { useState } from 'react';
// import { Form, Button, Modal } from 'react-bootstrap';
// import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

// import { LOGIN } from '../utils/mutations';
// import Auth from '../utils/auth';

const LoginForm = ({ handleClick }) => {
  // const [userFormData, setUserFormData] = useState({ phoneNumber: '', password: '' });
  // const [validated] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [login] = useMutation(LOGIN);

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
  //     const {data} = await login({
  //       variables: {...userFormData},
  //     });


  //    Auth.login(data.login.token);
  //   } catch (err) {
  //     console.error(err);
  //     setShowModal(true);
  //   }

  //   setUserFormData({
  //     name: '',
  //     phoneNumber: '',
  //     password: '',
  //   });
  // };

  return (
    <>
      <div className="modal-test" style={{backgroundColor: 'blue'}}>
      <div>
      <h2>Login Here:</h2>
      <form>
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
          id='password'
          // onChange={handleChange}
        />
      </form>
    </div>
    {/* <Link to = {"Signup"}> Sign up here: </Link> */}
       <button onClick={() => handleClick()}>Submit</button>
     </div>
    </>
  );
};

export default LoginForm;


{/* <form onSubmit={handleFormSubmit}></form> */}












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