import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
import Cart from './components/Cart'
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs'

function App() {
  return (
    <div>
      <NavBar />
      <AboutUs />
      <Cart />
    </div>
  );
}

export default App;
