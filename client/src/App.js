import React from 'react';
import "./index.css";
import DogSwiper from './pages/DogSwiper';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModalContain from './pages/ModalContain';
// import SavedDogs from "./pages/SavedDogs";

function App() {



  return ( 
    <Router> 
    <div>
      <main>
        <Routes>
        <Route exact path="/" element={<ModalContain />} />
        <Route exact path="home" element={<DogSwiper />} />
        {/* <Route exact path="/saved" component={SavedDogs} /> */}
        </Routes>

      </main>
   </div>
   </Router>

  );
}
export default App;