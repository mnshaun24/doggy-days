import React, { useState } from 'react';
import "./index.css";
import Page from './components/Page';
import DogSwiper from './pages/DogSwiper';

function App() {

  const [pages] = useState([
    "Login",
    "Home",
    "Saved Dogs"
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (  
    <div>
      <main>
        <Page currentPage={currentPage} />
        <DogSwiper />
      </main>
   </div>
  );
}
export default App;