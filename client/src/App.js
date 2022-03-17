import React from 'react';
import DogSwiper from './pages/DogSwiper';
import "./index.css";
// import { NavBar } from './components/Navbar';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {

  return (  
    <div>
      <DogSwiper />

      {/* <LoginForm></LoginForm> */}
      <Login></Login>
      <Signup></Signup>
   </div>
  );
}
export default App;