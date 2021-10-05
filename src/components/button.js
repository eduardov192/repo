import React from "react";

const Btn = ({ btntexto, color, loading }) => {
  //const [btntexto, setbtntexto] = useState("");
  //const [color, setColor] = useState("");

  return (
    <button className={`bg-${color}-500 text-white p-2`}>
      {loading ? "cargando" : btntexto}
    </button>
  );
};

export default Btn;
