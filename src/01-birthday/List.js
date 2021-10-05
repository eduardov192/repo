import React from "react";
import { useState } from "react";
import birthdaydata from "./birthdaydata";

const List = () => {
  const [data, setData] = useState(birthdaydata);

  const eliminarUno = (id) => {
    const newArray = data.filter((eliminau) => eliminau.id !== id);
    console.log(newArray);
    setData(newArray);
  };

  return (
    <main className="container bg-red-300 my-20 p-1 mt-1">
      <div className="p-10 bg-white border m-60 ">
        <h1 className="font-bold text-2xl text-center mb-10">
          {data.length} birthdays today{" "}
        </h1>
        <div className=" ">
          {data.map((birth) => {
            const { id, name, age, image } = birth;
            return (
              <div className=" grid grid-cols-2 mt-6" key={id}>
                <img
                  src={image}
                  alt=""
                  className="rounded-full h-24 w-24 ml-20"
                />
                <div className="">
                  <h1 className="font-bold ml-4  ">{name}</h1>
                  <p className="ml-4">{age} years</p>
                  <button
                    onClick={() => eliminarUno(id)}
                    className="text-center bg-red-200 py-2 px-5 mt-5 ml-10 rounded-md"
                  >
                    eliminar
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {data ? (
          <button
            onClick={() => setData([])}
            className="text-center bg-red-200 py-2 px-20 mt-5 ml-20"
          >
            {" "}
            Clear All
          </button>
        ) : (
          <button
            onClick={() => setData(birthdaydata)}
            className="text-center bg-red-200 py-2 px-20"
          >
            {" "}
            Refresh All
          </button>
        )}
      </div>
    </main>
  );
};

export default List;
