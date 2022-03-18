import React, { useState } from 'react';
import "./index.css";
import Page from './components/Page';

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
      </main>
   </div>
  );
}
export default App;