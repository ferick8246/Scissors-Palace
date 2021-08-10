import React, { Component, useState } from 'react';
import { TailwindNavbar } from 'tailwind-navbar-react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import login from '../Login'
function NavBar() {

    const [showDropDown, setShowDropDown] = useState(false); //if showDropDown is false, dont show the dropDown
    const handleClick = () => {
      setShowDropDown(!showDropDown); //if showDropDown is true, show the dropDown
    };
  
  return (
      <TailwindNavbar
        brand={
          <img src="./logo512.png" width="40" height="40" alt="Brand logo" />
        }
        className="py-1"
      >
        <nav className="justify-between">
          <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
          <li>
              <span className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-yellow-500" href="/">
                <Link to="/shop">SHOP</Link>
              </span>
            </li>
            <li>
              <span className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-yellow-500" href="/">
                <Link to="/services">SERVICES</Link>
              </span>
            </li>
            <li>
              <span className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-yellow-500" href="/">
                <Link to="/about">ABOUT</Link>
              </span>
            </li>
            <li>
              <span className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-yellow-500" href="/">
              <Link to="/gallery">GALLERY</Link>
              </span>
            </li>
            <li>
              <span className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-yellow-500" href="/">
              <Link to="/reviews">REVIEWS</Link>
              </span>
            </li>
            <li>
              <span className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-yellow-500" href="/">
              <Link to="/contact">CONTACT</Link>
              </span>
            </li>
            <li>
              <span className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-yellow-500" href="/">
                { Auth.loggedIn() ? 
                   (
                  <a href="/" onClick={() => Auth.logout()}>
                  LOGOUT
                  </a>)
                   : ( <Link to="/login">LOGIN/SIGNUP</Link>) 
                }
              </span>
            </li>
          </ul>
        </nav>
      </TailwindNavbar>
    );
}

export default NavBar;