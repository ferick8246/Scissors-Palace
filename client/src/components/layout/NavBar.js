import React, { Component } from 'react';
import { TailwindNavbar } from 'tailwind-navbar-react';
import { Link } from 'react-router-dom';
 
class NavBar extends Component {
  render () {
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
              <Link to="/press">PRESS</Link>
              </span>
            </li>
            <li>
              <span className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-yellow-500" href="/">
              <Link to="/contact">CONTACT</Link>
              </span>
            </li>
          </ul>
        </nav>
      </TailwindNavbar>
    );
  }
}

export default NavBar;