import React, { useState } from 'react';
import "./index.css";
// import { ApolloProvider } from '@apollo/client';
// import { NavBar } from './components/Navbar';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  const [pages] = useState([
    "Home",
    "Saved Dogs",
    "Login",
    "Signup"
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (  
    // <Router>
    // <ApolloProvider>
    <div>
      <Navbar />
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