import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

// component imports:
import Header from './components/Header';
import Cart from './components/Cart'
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    // <ApolloProvider client={client}>
        <Router>
        <NavBar />
        <Header />
        <Cart />
          <Route exact path="/about">
            <AboutUs />
          </Route>
        <Footer />
      </Router>
    // </ApolloProvider>
  );
}

export default App;
