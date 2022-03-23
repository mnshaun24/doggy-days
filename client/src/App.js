import React from "react";
import "./index.css";

import DogSwiper from "./pages/DogSwiper";
import Layout from "./components/Layout";
import SavedDogs from "./pages/SavedDogs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModalContain from "./pages/ModalContain";


import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Settings from "./pages/Settings";
// import { ApolloServerPluginLandingPageDisabled } from "apollo-server-core";

function App() {
  const httpLink = createHttpLink({
    uri: "/graphql",
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

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
