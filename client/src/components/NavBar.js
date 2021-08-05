import React from 'react';


function NavBar() {
    return (
        <ul className="flex justify-between">
            <li className="mr-3">
                <a className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">Active Pill</a>
            </li>
            <li className="mr-3">
                <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">SHOP</a>
            </li>
            <li className="mr-3">
                <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">SCHEDULE</a>
            </li>
            <li className="mr-3">
                <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">ABOUT</a>
            </li>
            <li className="mr-3">
                <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">GALLERY</a>
            </li>
            <li className="mr-3">
                <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">CONTACT</a>
            </li>
            <li className="mr-3">
                <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">PRESS</a>
            </li>
            <li className="mr-3">
                <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">LOGIN</a>
            </li>
            <li className="mr-3">
                <a className="inline-block py-2 px-4 text-gray-400 cursor-not-allowed" href="#">Disabled Pill</a>
            </li>
        </ul>   
    )
}
export default NavBar;