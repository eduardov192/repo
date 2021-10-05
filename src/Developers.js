import React from "react";
import { useState } from "react";
import { useGlobalContext } from "./context";
//import Btn from "./components/button";
import { FaTrash } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

const Developers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tema, setTema] = useState("");
  const [users, setUsers] = useState([]);
  const [editID, setEditID] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const { alert, showAlert } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !tema) {
      showAlert(
        true,
        "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center mx-2",
        "Ingrese datos"
      );
    } else if (name && email && tema && isEditing) {
      //EDITARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
      setUsers(
        users.map((user) => {
          if (user.id === editID) {
            return { ...user, name, email, tema };
          }
          return user;
        })
      );
      setName("");
      setEmail("");
      setTema("");
      setIsEditing(false);
      setEditID("");
    } else {
      showAlert(
        true,
        "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center mx-2",
        "Datos agregados"
      );
      const id = Math.floor(Math.random() * 100000);
      //console.log(id);
      const newItem = { id, name, email, tema };
      setUsers([...users, newItem]);
    }
    setName("");
    setEmail("");
    setTema("");
  };

  const deleteItem = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    showAlert(
      true,
      "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center mx-2",
      "DATOS ELIMINADOS"
    );
  };

  const editItem = (id) => {
    const encontrau = users.find((user) => (user.id = id));
    //console.log("buena");
    setIsEditing(true);
    setEditID(id);
    setName(encontrau.name);
    setEmail(encontrau.email);
    setTema(encontrau.tema);
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-center text-2xl font-bold mt-4">
          FORMULARIO - DEVELOPERS
        </h1>
      </div>
      <div className="text-center text-gray-500 mt-8 font-bold ">
        <form action="" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="">Nombres</label>
            <input
              value={name}
              type="text"
              className=" rounded ml-5 my-2 border border-gray-600"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="">Email</label>
            <input
              type="text"
              value={email}
              className=" rounded ml-5 my-2 border border-gray-600"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="">Tema</label>
            <textarea
              value={tema}
              type="textarea"
              className="ml-5 my-2 border-gray-600 border rounded-md"
              onChange={(e) => setTema(e.target.value)}
            />
          </div>
          <button className="bg-green-500 rounded-md text-white hover:bg-green-400 mt-5 px-4 py-1 font-bold ">
            {isEditing ? "actualizar" : "submit"}
          </button>
        </form>
      </div>
      {/*PARTE DEL MAPEO*/}
      <div>
        <div className="mt-10">
          {users.map((user) => {
            const { id, name, email, tema } = user;
            return (
              <div className=" items-center flex justify-evenly border-2 bg-gray-100 ">
                <div
                  key={id}
                  className="text-start w-5/12 md:w-10/12 m-2 font-bold "
                >
                  <div className="ml-4">
                    <ul>
                      <li>{name}</li>
                      <li className="mt-2">{email}</li>
                      <li className="mt-2">{tema}</li>
                    </ul>
                  </div>
                </div>

                <div className="ml-10">
                  <button
                    onClick={() => deleteItem(id)}
                    className="text-red-500 mr-5 text-2xl"
                  >
                    <FaTrash />
                  </button>

                  <button
                    onClick={() => editItem(id)}
                    className="text-green-500 mr-5 text-2xl"
                  >
                    <GrUpdate />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Developers;
