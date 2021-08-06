import React, { Component } from 'react';
import { TailwindNavbar } from 'tailwind-navbar-react';
import { Link } from 'react-router-dom';
 
class NavBar extends Component {
  render () {
    return (
      <TailwindNavbar
        brand={
          <img src="https://media.discordapp.net/attachments/694834406493257762/729067815499202651/matthew_border.png" width="40" height="40" alt="Brand logo" />
        }
        className="py-1"
      >
        <nav className="justify-between">
          <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
            <li>
              <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-yellow-500" href="/">
                SHOP
              </a>
            </li>
            <li>
              <span className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-yellow-500" href="/">
                <Link to="/about">ABOUT</Link>
              </span>
            </li>
            <li>
              <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-yellow-500" href="/">
                GALLERY
              </a>
            </li>
            <li>
              <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-yellow-500" href="/">
                PRESS
              </a>
            </li>
            <li>
              <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-yellow-500" href="/">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </TailwindNavbar>
    );
  }
}



// function NavBar() {
//     return (
//         <nav className="flex flex-wrap items-center justify-between p-5">      
//         {/* hamburger */}
//             <div className="flex md:hidden">
//                 <button id="hamburger">
//                     <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
//                     <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
//                 </button>
//             </div>
//         {/* links */}
//             <div className="toggle hidden md:flex w-full md:w-auto flex justify-between text-bold mt-5 md:mt-0">        
//                 <a href="#" className="block md:inline-block text-gray-600 hover:text-yellow-500 px-3 py-3">SHOP</a>
//                 <a href="#" className="block md:inline-block text-gray-600 hover:text-yellow-500 px-3 py-3">ABOUT</a>
//                 <a href="#" className="block md:inline-block text-gray-600 hover:text-yellow-500 px-3 py-3">GALLERY</a>
//                 <a href="#" className="block md:inline-block text-gray-600 hover:text-yellow-500 px-3 py-3">CONTACT</a>
//             </div>
//         {/* create account 
//             <a href="#" className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-gray-600 hover:bg-yellow-500 text-gray-600 md:rounded">LOGIN</a>*/}
//         </nav>  
//     )
// }
export default NavBar;

/*

 <ul className="flex justify-between">
            <li className="mr-3">
                <a className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-gray-600" href="#">Active Pill</a>
            </li>
            <li className="mr-3">
                <a className="inline-block border border-white rounded hover:border-gray-200 text-yellow-500 hover:bg-gray-200 py-2 px-4" href="#">SHOP</a>
            </li>
            <li className="mr-3">
                <a className="inline-block border border-white rounded hover:border-gray-200 text-yellow-500 hover:bg-gray-200 py-2 px-4" href="#">SCHEDULE</a>
            </li>
            <li className="mr-3">
                <a className="inline-block border border-white rounded hover:border-gray-200 text-yellow-500 hover:bg-gray-200 py-2 px-4" href="#">ABOUT</a>
            </li>
            <li className="mr-3">
                <a className="inline-block border border-white rounded hover:border-gray-200 text-yellow-500 hover:bg-gray-200 py-2 px-4" href="#">GALLERY</a>
            </li>
            <li className="mr-3">
                <a classNameName="inline-block border border-white rounded hover:border-gray-200 text-yellow-500 hover:bg-gray-200 py-2 px-4" href="#">CONTACT</a>
            </li>
            <li classNameName="mr-3">
                <a classNameName="inline-block border border-white rounded hover:border-gray-200 text-yellow-500 hover:bg-gray-200 py-2 px-4" href="#">PRESS</a>
            </li>
            <li classNameName="mr-3">
                <a classNameName="inline-block border border-white rounded hover:border-gray-200 text-yellow-500 hover:bg-gray-200 py-2 px-4" href="#">LOGIN</a>
            </li>
            <li classNameName="mr-3">
                <a classNameName="inline-block py-2 px-4 text-gray-400 cursor-not-allowed" href="#">Disabled Pill</a>
            </li>
        </ul>   

*/