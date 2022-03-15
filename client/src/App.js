import { useEffect, useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {

  const url = 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
  const [dog, setDog] = useState();

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        "x-api-key": "a72d9af4-b56e-4f89-a1c0-f5b1961b9293",
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setDog(data)
    })
    .catch(function(err) {
      console.log(err)
    })
  }, []);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Doggy Days</h1>
        <img src={dog && dog[0].url} alt="A dog"></img>
        <p>Breed: {dog && dog[0].breeds[0].name}</p>
        <p>Characteristics: {dog && dog[0].breeds[0].temperament}</p>
        <p>Life Span: {dog && dog[0].breeds[0].life_span}</p>
        <p>Weight: {dog && dog[0].breeds[0].weight.imperial} lbs.</p>
      </div>
    </ApolloProvider>
  );
}

export default App;
