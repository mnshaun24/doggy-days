import React from "react";
import "./index.css";

import DogSwiper from "./pages/DogSwiper";
import Layout from "./components/Layout";
import SavedDogs from "./pages/SavedDogs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModalContain from "./pages/ModalContain";
import { setContext } from "@apollo/client/link/context";
import env from "./env.json";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: `${env.backendHost}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<ModalContain />} />
          <Route path="/main" element={<Layout />}>
            <Route index element={<DogSwiper />} />
            <Route path="home" element={<DogSwiper />} />
            <Route path="saved" element={<SavedDogs />} />
          </Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}
export default App;
