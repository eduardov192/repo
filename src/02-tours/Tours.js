import React from "react";
import { useState } from "react";

const Tours = ({ id, name, info, image, price, borrarUno }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="shadow-md m-2 bg-white rounded-xl  ">
      <img
        src={image}
        alt="paisajes"
        className="w-full h-48 md:h-64 object-cover"
      />
      <div className="m-4 text-center">
        <h1 className="font-bold">{name}</h1>
        <p className="font-light">
          {readMore ? info : `${info.substring(0, 200)}`}
        </p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "read More"}
        </button>
        <p className="bg-blue-200 text-blue-600 px-2">${price}</p>
        <button
          onClick={() => borrarUno(id)}
          className=" mb-2 text-red-700 border-2 border-red-200 font-semibold mt-2"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tours;
