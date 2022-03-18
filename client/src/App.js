import React, { useState } from 'react';
import "./index.css";
import Page from './components/Page';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

function App() {

  const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  const [pages] = useState([
    "Login",
    "Home",
    "Saved Dogs"
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (  
    <ApolloProvider client={client}>
      <div>
        <main>
          <Page currentPage={currentPage} />
        </main>
      </div>
   </ApolloProvider>
  );
}
export default App;