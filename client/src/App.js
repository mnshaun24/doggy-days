import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./index.css";
import Page from './components/Page';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import NavBar from './components/navbar';

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
      <Router>
      <div>
        <NavBar></NavBar>
        <main>
          <Page currentPage={currentPage} />
        </main>
      </div>
      </Router>
   </ApolloProvider>
  );
}
export default App;