import React, { useState } from 'react';
import "./index.css";
import DogSwiper from "./pages/DogSwiper";
// import { ApolloProvider } from '@apollo/client';
// import { NavBar } from './components/Navbar';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Navbar from "./components/ModalContain";
import ModalContain from './pages/ModalContain';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  const [pages] = useState([
    "Home",
    "Saved Dogs",
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (  
    // <Router>
    // <ApolloProvider>
    <div>
      <ModalContain />
      <DogSwiper />

      {/* <Route exact path="/signup" component={Signup} /> */}
      {/* <Login></Login>
      <Signup></Signup> */}
   </div>
  //  </ApolloProvider>
  //  </Router>
  );
}
export default App;