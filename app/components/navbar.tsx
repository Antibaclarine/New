import React from "react";

const Navigationbar = () => {
  return (
    <div className="navigation-bar  text-black py-4 px-6 flex justify-between items-center">
      <h1 className="text-4xl font-bold color-red-300">Foodlie</h1>
      <nav className="links">
        <ul className="flex space-x-4">
          <li>
            <a href="Home" className="hover:text-red-500">Home</a>
          </li>
          <li>
            <a href="Offer" className="hover:text-red-500">Offer</a>
          </li>
          <li>
            <a href="Service" className="hover:text-red-500">Service</a>
          </li>
          <li>
            <a href="About" className="hover:text-red-500">About us</a>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <button className="login-button  hover:bg-red-600 text-black py-2 px-4 rounded">Log in</button>
        <button className="signup-button bg-red-500 hover:bg-red-600 text-black py-2 px-4 rounded">Sign up</button>
      </div>
    </div>
  );
};

export default Navigationbar;