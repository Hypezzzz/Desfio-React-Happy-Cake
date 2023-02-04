import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col text-center w-1/2 justify-center items-center">
      <label className="mt-5">Correo</label>
      <input
        type="email"
        className="border-2 bg-gray-300 p-1 w-full"
        placeholder="name@example.com"
      />
      <label className="mt-5">Descripcion</label>
      <textarea className="border-2 bg-gray-300 p-1 w-full" rows={8} />

      <button
        type="button"
        className="bg-red-600 text-white p-2 rounded-md w-min mt-5"
      >
        Enviar
      </button>
    </div>
  );
};

export default Form;
