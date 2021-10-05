import React from "react";
import { Link } from "react-router-dom";
import comida from "./images/comida.jpg";
import {
  AiOutlineHome,
  AiOutlineClockCircle,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { useState } from "react";

const Pruebas = () => {
  const [burger, setBurger] = useState(false);

  return (
    <div>
      <body className="font-body">
        <div className="grid md:grid-cols-3">
          {" "}
          {/* content wrapper */}
          <div className="md:col-span-1 md:flex md:justify-end">
            <nav className="text-right ">
              <div className="flex justify-between items-center">
                <h1 className="text-gray-300 uppercase font-bold p-4 border-b border-gray-100 flex justify-center md:justify-start">
                  <Link to="/" className="hover:text-gray-700 ">
                    TAILWIND{" "}
                  </Link>
                </h1>
                <div className="px-4 cursor-pointer md:hidden ">
                  <button onClick={() => setBurger(!burger)}>
                    <AiOutlineMenu />
                  </button>
                </div>
              </div>
              <div>
                <ul
                  className={`text-sm  md:block ${!burger && "hidden"}  `}
                  id="menu"
                >
                  <li className="text-gray-500 font-bold py-1">
                    <Link to="/home">
                      <span className="pr-1 border-r-4 border-primary">
                        <AiOutlineHome className="inline-block" />
                        Home
                      </span>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link to="/about">
                      <span className="pr-1 border-r-4 border-white">
                        <MdDeveloperMode className="inline-block" />
                        About
                      </span>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link to="/negocio">
                      <span className="pr-1 border-r-4 border-white">
                        <FaRegCompass className="inline-block" />
                        Negocio
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/*acaba el navbar */}
          <main className="px-16 py-16 bg-gray-200 md:col-span-2">
            <div className="flex justify-center md:justify-end">
              <Link
                to="/signup"
                className="btn  md:bg-purple-400 hover:text-white hover:border-white md:border-gray-500 border-2 transition ease-out duration-500"
              >
                Log in
              </Link>
              <Link
                to="/login"
                className=" btn  md:bg-purple-400 ml-2 hover:text-white hover:border-white md:border-gray-500 border-2 transition ease-out duration-500"
              >
                Sign up
              </Link>
            </div>

            <header>
              <h2 className="text-5xl font-semibold">Recipes</h2>
              <h3 className="text-2xl font-semibold">Buena</h3>
            </header>

            <h4 className="border-b border-gray-400 pb-2 mt-12">
              Latest Recipes
            </h4>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 transition ease-out duration-300">
              {/*cards go here */}
              <div className="card  hover:shadow-xl">
                <img
                  src={comida}
                  alt=""
                  className="w-full h-32 md:h-48 object-cover"
                />
                <div className="m-4">
                  <span className="font-bold text-gray-700">
                    5 Bean Chilli Stew
                  </span>
                  <span className="block text-sm text-gray-500">
                    Recipe by mario
                  </span>
                </div>
                <div className="badge">
                  <span>
                    <AiOutlineClockCircle className="inline-block mr-1" />
                    25 mins
                  </span>
                </div>
              </div>
              {/*CARDDDDDDDDDDDDDDDDDDDDDDDDD */}
              <div className="card hover:shadow-xl">
                <img
                  src={comida}
                  alt=""
                  className="w-full h-32 md:h-48 object-cover"
                />
                <div className="m-4">
                  <span className="font-bold text-gray-700">
                    5 Bean Chilli Stew
                  </span>
                  <span className="block text-sm text-gray-500">
                    Recipe by mario
                  </span>
                </div>
                <div className="badge">
                  <span className="">
                    <AiOutlineClockCircle className="inline-block mr-1" />
                    25 mins
                  </span>
                </div>
              </div>
              <div className="card hover:shadow-xl">
                <img
                  src={comida}
                  alt=""
                  className="w-full h-32 md:h-48 object-cover"
                />
                <div className="m-4">
                  <span className="font-bold text-gray-700">
                    5 Bean Chilli Stew
                  </span>
                  <span className="block text-sm text-gray-500">
                    Recipe by mario
                  </span>
                </div>
                <div className="badge">
                  <span className="">
                    <AiOutlineClockCircle className="inline-block mr-1" />
                    25 mins
                  </span>
                </div>
              </div>
            </div>

            <h4 className="border-b border-gray-400 pb-2 mt-12 ">
              Most Popular
            </h4>

            <div className="mt-8">{/*cards go here */}</div>

            <div className="flex justify-center">
              <div className="btn bg-green-500 hover:text-white hover:shadow-inner transform hover:scale-125 hover:bg-opacity-75 transition ease-out duration-300">
                Load More
              </div>
            </div>
          </main>
        </div>
      </body>
    </div>
  );
};
export default Pruebas;
