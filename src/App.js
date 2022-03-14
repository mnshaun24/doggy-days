import './App.css';
import { useEffect, useState } from 'react';

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
      <h1>Doggy Days</h1>
      {/* <p>{dog.data[0].breeds[0].name}</p> */}
    </div>
  );
}

export default App;
