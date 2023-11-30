import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { REACT_APP_API_URI, REACT_APP_AUTH_API }from "react-dotenv";


import env from "react-dotenv";

import Home from './components/Home';
import Projects from './components/Projects';
import Paydues from './components/Paydues';
import Events from './components/Events';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_API_URI,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AUTH_API}`, // Replace with your actual token
    },
    fetch,
  }),
  cache: new InMemoryCache(),
});

const ScrollableContent = ({ children }) => (
  <SimpleBar style={{ maxHeight: '100vh' }} className="custom-scrollbar">
    {children}
  </SimpleBar>
);

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" index element={<ScrollableContent><Home /></ScrollableContent>} />
          <Route path="/projects" index element={<ScrollableContent><Projects /></ScrollableContent>} />
          <Route path="/pay-dues" index element={<ScrollableContent><Paydues /></ScrollableContent>} />
          <Route path="/events" index element={<ScrollableContent><Events /></ScrollableContent>} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;