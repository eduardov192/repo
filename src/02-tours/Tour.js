import React from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const Tour = () => {
  const [datatour, setDatatour] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const datos = await response.json();
      setDatatour(datos);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const borrarUno = (id) => {
    const newArray = datatour.filter((tours) => tours.id !== id);
    setDatatour(newArray);
  };

  {
    if (loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
  }

  return (
    <div>
      <h1 className="text-center font-bold text-4xl mb-10">Our Tours</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {datatour.map((tours) => {
          return <Tours key={tours.id} {...tours} borrarUno={borrarUno} />;
        })}
      </div>
    </div>
  );
};

export default Tour;
