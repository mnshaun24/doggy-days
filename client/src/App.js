import React from 'react';
import DogSwiper from './pages/DogSwiper';
import "./index.css";
// import { NavBar } from './components/Navbar';
// import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {

  return (  
    <div>
      <DogSwiper />

      {/* <LoginForm></LoginForm> */}

      <SignupForm></SignupForm>
   </div>
  );
}
export default App;