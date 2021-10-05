import React from "react";
import { useState } from "react";

const Questions = ({ title, info }) => {
  const [mostrar, setMostrar] = useState(false);

  const muestraMas = () => {};
  return (
    <div>
      <div className="shadow-lg  mb-4 p-2 rounded-xl">
        <div className="flex justify-between">
          <h1 className="font-extrabold mb-2 inline-block">{title}</h1>
          <button
            onClick={() => setMostrar(!mostrar)}
            className={`inline-block ${
              mostrar
                ? "bg-red-200 text-red-600"
                : "bg-green-200 text-green-600"
            }  rounded-2xl m-2 px-2 py-1 `}
          >
            {mostrar ? "-" : "+"}
          </button>
        </div>
        {mostrar && <p className="mt-2">{info}</p>}
      </div>
    </div>
  );
};

export default Questions;
