import React, { useState } from 'react';
import { Button, Tab, Nav, Modal } from "react-bootstrap";
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

const ModalContain = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };


  return (
  <>
    <div id="modalContain">
    <img className="logopic" src={require('../assets/images/logo.png')} alt="logo"/>
    </div>
    <Button variant="outline-light" onClick={handleClick}>Login or Sign up here!</Button>

      <Modal
        size="lg"
        show={isOpen}
        onHide={() => setIsOpen(false)}
        aria-labelledby="signup-modal"
      >

        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                  <LoginForm handleModalClose={() => setIsOpen(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignupForm handleModalClose={() => setIsOpen(false)} /> 
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
      {/* {isOpen && <SignupForm handleClick={handleClick} />} */}

    </>
    
  )
}


export default ModalContain;