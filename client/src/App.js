
import React from 'react';
import "./index.css";
import DogSwiper from './pages/DogSwiper';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModalContain from './pages/ModalContain';
import SavedDogs from "./pages/SavedDogs";

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

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <NavBar></NavBar>
          <main>
            <Routes>
              <Route exact path="/" element={<ModalContain />} />
              <Route exact path="/home" element={<DogSwiper />} />
              <Route exact path="/saved" element={<SavedDogs />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ApolloProvider>

  );
}
export default App;