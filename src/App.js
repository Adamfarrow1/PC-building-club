import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import Home from './components/Home';
import Projects from './components/Projects';
import Paydues from './components/Paydues';
import Events from './components/Events';
import ScrollToTop from './ScrollToTop';

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
    <Router>
      <ApolloProvider client={client}>
      {/* <ScrollableContent> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pay-dues" element={<Paydues />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        {/* </ScrollableContent> */}
        {/* ScrollToTop is now a child of the ApolloProvider */}
        <ScrollToTop />
      </ApolloProvider>
    </Router>
  );
}

export default App;
