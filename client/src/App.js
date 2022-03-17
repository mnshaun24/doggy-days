import React from 'react';
import DogSwiper from './pages/DogSwiper';
import "./index.css";
// import { NavBar } from './components/Navbar';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (  
    // <Router>
    <div>
      <DogSwiper />

      {/* <Route exact path="/signup" component={Signup} /> */}
      <Login></Login>
      <Signup></Signup>
   </div>
  //  </Router>
  );
}
export default App;