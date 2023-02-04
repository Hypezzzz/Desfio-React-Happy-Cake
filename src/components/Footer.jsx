import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-xl flex-col text-center p-8 space-y-10 mt-auto">
      <h2 className="text-white font-semibold">
        Diego Cuadra{" "}
        <span className="font-normal italic text-blue-300">@nanome</span>
      </h2>

      <div>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="bg-orange-300 text-lg font-bold p-3 rounded-md hover:bg-orange-800 hover:text-white"
          href="https://www.linkedin.com/in/diego-cuadra-8b9979204/"
        >
          Mi LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
