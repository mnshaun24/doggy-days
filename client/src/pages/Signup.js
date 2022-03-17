// import React, { useState } from "react";
// // import { useMutation } from '@apollo/client';
// // import { Link } from 'react-router-dom';
// // import Auth from '../utils/auth';
// // import { ADD_USER } from '../utils/mutations';
// import { Button, Tab, Nav, Modal } from "react-bootstrap";
// // import  SignupForm  from '../components/SignupForm';


// const Signup = () => {
//   // const [formState, setFormState] = useState({ })
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(true);
//   };

//   return (
//     <>
//       <Button onClick={handleClick}>Sign up here!</Button>
//       <Modal
//         size="lg"
//         show={isOpen}
//         onHide={() => setIsOpen(false)}
//         aria-labelledby="signup-modal"
//       >
//         {/* tab container to do either signup or login component */}
//         <Tab.Container defaultActiveKey="login">
//           <Modal.Header closeButton>
//             <Modal.Title id="signup-modal">
//               <Nav variant="pills">
//                 <Nav.Item>
//                   <Nav.Link eventKey="login">Login</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link eventKey="signup">Sign Up</Nav.Link>
//                 </Nav.Item>
//               </Nav>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Tab.Content>
//               <Tab.Pane eventKey="login">
//                 Login
//                 {/* <LoginForm handleModalClose={() => setIsOpen(false)} /> */}
//               </Tab.Pane>
//               <Tab.Pane eventKey="signup">
//                 Signup
//                 {/* <SignUpForm handleModalClose={() => setIsOpen(false)} /> */}
//               </Tab.Pane>
//             </Tab.Content>
//           </Modal.Body>
//         </Tab.Container>
//       </Modal>
//       {/* {isOpen && <SignupForm handleClick={handleClick} />} */}
//     </>
//   );
// };

// export default Signup;
