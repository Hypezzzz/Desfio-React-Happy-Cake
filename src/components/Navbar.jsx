import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-600 flex justify-between items-center h-14 px-8 py-4">
      <div className="flex gap-x-4">
        <Link to="/home" className="text-white text-xl font-bold">
          🏠 Home
        </Link>
        <Link to="/contact" className="text-white text-xl font-bold">
          📒 Contacto
        </Link>
      </div>
      <div>
        <h1 className="text-white font-bold text-xl">Happy Cake 🍰</h1>
      </div>
    </nav>
  );
};

export default Navbar;
