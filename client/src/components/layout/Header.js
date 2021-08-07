import React from "react";

function Header(){
    return(
        // <h1 className="pt-32 lg:pt-32 text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100 justify-center text-center">Scissors Palace</h1>
        <div className="grid justify-items-center pt-32 md:pt-12">
            <img className="transform w-1/3 md:scale-50 lg:scale-75" src="./images/logo.png"/>
        </div>
    )
}

export default Header;
