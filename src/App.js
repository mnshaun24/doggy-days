import './App.css';
import { useEffect, useState } from 'react';
import Home from './Pages/Home.js;'

function App() {

  const url = 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
  const [dog, setDog] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        "x-api-key": "a72d9af4-b56e-4f89-a1c0-f5b1961b9293",
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(function(data) {
      console.log(data);
      setDog(data)
    })
    .catch(function(err) {
      console.log(err)
    })
  }, []);
  

  return (
    <div className="App">
      {dog && <Home dog={dog}></Home>}
    </div>
  );
}

export default App;
