import React, { useState } from 'react';
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
         variables: {...userFormData},
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
        <button type="submit">Submit</button>
      </form>
      {error && <div>Login failed</div>}
    </div>
  
    </>
  );
};

export default LoginForm;

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