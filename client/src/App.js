import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Cart from './components/Cart'
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs'

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <AboutUs />
      <Cart />
    </div>
  );
}

export default App;
