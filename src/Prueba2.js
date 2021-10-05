import React from "react";
import comida from "./images/comida.jpg";
import { MdDeveloperMode } from "react-icons/md";
import laptop from "./images/laptop.jpg";
import leyendo from "./images/leyendo.jpg";
import hombrelaptop from "./images/hombrelaptop.jpg";
import { AiOutlineArrowRight, AiOutlineMenu } from "react-icons/ai";
import { BiPlusMedical } from "react-icons/bi";
import { FaMedal } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

const Prueba2 = () => {
  return (
    <div>
      <header>
        <nav className="flex items-center bg-blue-600 p-6 ">
          <div className="flex items-center text-white font-bold ml-10 flex-shrink-0 ">
            <MdDeveloperMode className="mr-1" />
            <span>First Digital</span>
          </div>
          <div className="flex  text-white">
            <button className="ml-60 inline-block">Solutions</button>
            <IoIosArrowDown className="mt-1 ml-1" />
            <button className="ml-10 inline-block">Company</button>
            <IoIosArrowDown className="mt-1 ml-1" />
            <button className="ml-10 inline-block">News & Insights</button>
            <button className="ml-10 inline-block">Contact Us</button>
          </div>
          <div className="flex justify-end text-white  ">
            <button className="ml-10 inline-block">Sign in</button>
            <button className="ml-10 inline-block rounded bg-yellow-500">
              Open an account
            </button>
          </div>
        </nav>
      </header>
      <body>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-600 p-20 text-white ">
            <div className="mx-20">
              <h1 className="font-bold text-4xl mb-4">
                The next generation trust company
              </h1>
              <p className="mr-10 text-sm">
                More than just financial instritution: technology-driven
                qualified custodian offering B2B2C open finance solutions.
              </p>
            </div>
            <div>
              <div>
                <img src={hombrelaptop} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* WHAT WE DO 4X */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="px-28 mb-60 mx-1 mt-24">
              <h1 className="font-extrabold text-3xl mb-5">What we do</h1>
              <p>
                Safekeeping your assets with integrated custody,trust & escrow
                solutions and personalized services to keep pace with your needs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* 1 */}
            <div className="mt-20 ">
              <div className="mb-5">
                <VscActivateBreakpoints className="text-blue-800 mb-3" />
                <h1 className="font-extrabold">Settlement & clearing</h1>
                <p>
                  Tracking, settling and reconciling assets that are acquired
                  and disposed of
                </p>
              </div>
              <div className="mb-5">
                <VscActivateBreakpoints className="text-blue-800 mb-3" />
                <h1 className="font-extrabold">Settlement & clearing</h1>
                <p>
                  Tracking, settling and reconciling assets that are acquired
                  and disposed of
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="mt-20">
              <div className="mb-5">
                {" "}
                <VscActivateBreakpoints className="text-blue-800 mb-3" />
                <h1 className="font-extrabold">Settlement & clearing</h1>
                <p>
                  Tracking, settling and reconciling assets that are acquired
                  and disposed of
                </p>
              </div>
              <div className="mb-5">
                {" "}
                <VscActivateBreakpoints className="text-blue-800 mb-3" />
                <h1 className="font-extrabold">Settlement & clearing</h1>
                <p>
                  Tracking, settling and reconciling assets that are acquired
                  and disposed of
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*PARTE tarjetas WHO we SERVE*/}
        <div className="grid grid-cols-2 relative">
          <div className="bg-blue-700 py-96">
            <div className="container absolute md:left-4 md:top-0 -top-16 right-20">
              <div className="grid grid-cols-3 md:grid-cols-3  m-20 ">
                <div className="sm:my-10">
                  {/* 1 */}
                  <div className="bg-white shadow-md mx-2 px-8 py-7">
                    <VscActivateBreakpoints className="text-blue-800 mb-5" />
                    <h1 className="font-bold">Token issuers</h1>
                    <p className="text-sm">
                      Payments, Lending & other Corporates
                    </p>
                  </div>
                  {/* 2 */}
                  <div className="bg-white shadow-md mx-2 mt-8 px-8 py-7 ">
                    {" "}
                    <BsLaptop className="text-blue-800 mb-5" />
                    <h1 className="font-bold">Trading platform</h1>
                    <p className="text-sm">
                      Payments, Lending & other Corporates
                    </p>
                  </div>
                </div>
                <div className="md:mt-28 mt-20">
                  {/* 1 */}
                  <div className="bg-white shadow-md mx-2 px-8 py-7">
                    <VscActivateBreakpoints className="text-blue-800 mb-5" />
                    <h1 className="font-bold">Token issuers</h1>
                    <p className="text-sm">
                      Payments, Lending & other Corporates
                    </p>
                  </div>
                  {/* 2 */}

                  <div className="bg-white shadow-md mx-2 mt-8 px-8 py-7">
                    {" "}
                    <BsLaptop className="text-blue-800 mb-5" />
                    <h1 className="font-bold">Trading platform</h1>
                    <p className="text-sm">
                      Payments, Lending & other Corporates
                    </p>
                  </div>
                </div>
                <div className="md:mt-56 mt-40">
                  {/* 1 */}
                  <div className="bg-white shadow-md mx-2 px-8 py-7">
                    <VscActivateBreakpoints className="text-blue-800 mb-5" />
                    <h1 className="font-bold">Token issuers</h1>
                    <p className="text-sm">
                      Payments, Lending & other Corporates
                    </p>
                  </div>
                  {/* 2 */}

                  <div className="bg-white shadow-md mx-2 mt-8 px-8 py-7">
                    {" "}
                    <BsLaptop className="text-blue-800 mb-5" />
                    <h1 className="font-bold">Trading platform</h1>
                    <p className="text-sm">
                      Payments, Lending & other Corporates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" px-5 md:px-40 mt-10">
            <h1 className="font-bold text-3xl mb-5">Who we serve</h1>
            <p className="text-sm">
              Positiones as a strategic ally to our clients,who are partners
              more than customers
            </p>
          </div>
        </div>
        {/*PARTE Tailored solutions & value-added services*/}
        <div className="flex justify-center">
          <div className="mx-20 my-10 text-center ">
            <div className=" mx-48">
              <h1 className="text-4xl font-bold px-10">
                Tailored solutions & value-added services
              </h1>
            </div>
            <p className="mt-6 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Commodi ipsa eum
            </p>
          </div>
        </div>
        {/*PARTE ASSET tokenization*/}
        <div className="my-2 mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="bg-gray-50 flex flex-wrap content-center">
              <div className="  px-28  ">
                <h1 className="font-bold text-4xl mb-5">Asset tokenization</h1>
                <p className="text-sm mb-5">
                  Bespoke solutions for token issuers allowing the tokenization
                  of any tyoe of asset including commodities, securities and
                  real estate
                </p>
                <button className="bg-blue-700 text-white px-4 py-2 rounded">
                  Learn more
                </button>
              </div>
            </div>
            <div>
              <div className="">
                <img src={comida} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/*PARTE ABACUS RAPID SETTLEMENT NETWORK */}
        <div>
          <div className="  text-black pt-10  px-20  ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3  p-2">
              {/* 1 */}
              <div className="bg-white row-span-2 text-center">
                <div className="mt-10 shadow-md p-2 mx-8 rounded">
                  <h1 className="text-gray-400 font-semibold mt-4 ">
                    Transfer details
                  </h1>
                  <p className="text-blue-900 font-extrabold text-xl">$1250</p>
                  <button className="mt-28 mb-6 bg-blue-700 rounded text-white px-8 py-1 text-light">
                    Details
                  </button>
                </div>
              </div>
              {/* 2 */}
              <div className="bg-white">
                <div className="shadow-md mt-10 px-7 mx-2 pt-4 rounded">
                  <h1 className="text-blue-900 font-extrabold">ABC Limited</h1>
                  <p className="mb-4 text-gray-400">Transfer was succesful!</p>
                  <h4 className="pb-10 text-blue-900">Print a receipt</h4>
                </div>
              </div>
              {/* 3 */}
              <div className="bg-white row-span-2 p-4 rounded">
                <h1 className="font-extrabold text-3xl mb-4">
                  Abacus Rapid Settlement Network
                </h1>
                <p className="mb-6">
                  Transfer any asset between network participants with real-time
                  settlement
                </p>
                <button className="bg-blue-500 text-white px-5 py-2 rounded mb-4">
                  Learn more
                </button>
              </div>
              {/* 4 */}
              <div className="bg-white rounded">
                <div className="shadow-md m-2 px-4 ">
                  <h1 className="text-blue-900 font-extrabold">DEF Limited</h1>
                  <p className="pb-3 text-gray-400">
                    You received transfer from ABC Limited
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*PARTE OPEN FINANCE APIS */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 my-40 mx-20 text-center">
            <div className="mx-28 ">
              <h1 className="font-bold text-3xl mb-2">Open finance APIS's</h1>
              <p className="mb-6">
                Access,integrate & build on top of our custody solutions
              </p>
              <button className="px-6 bg-blue-700 text-white rounded text-light py-2 ">
                Learn more
              </button>
            </div>
            <div className="">
              <img
                src={comida}
                alt="comida"
                className="md:h-32 md:w-60 object-cover shadow-md mt-2"
              />
            </div>
          </div>
        </div>
        {/*PARTE BITPENSION */}
        <div className="text-white">
          <div className="grid grid-cols-3 text-start relative">
            <div className="bg-indigo-900 col-span-2 p-20 ">
              <div className=" text-start my-10">
                <h1 className="font-bold text-4xl mb-4">BitPension</h1>
                <p className="mb-4">
                  Digital Asset pension plan serving both individuals &
                  entreprises globally whit tax & estate planing
                </p>
                <button className="bg-blue-700 m-2 p-2 font-bold">
                  Learn more
                </button>
              </div>
            </div>
            <div className="m-10">
              <img
                src={leyendo}
                alt="leyendo"
                className="absolute shadow-lg rounded right-10 sm:right-20 md:right-40 lg:right-60 xl:right-80 2xl:right-96"
              />
            </div>
          </div>
        </div>
        {/*PARTE PAYMENTS Y LENDING */}
        <div className="m-20 ">
          <div className="grid md:grid-cols-2 mx-20 ">
            {/*IMAGEN*/}
            <div className=" m-2">
              <div className="relative mr-20  ">
                <img src={laptop} alt="gaaaaaaa" className="m-2 lg:h-96" />
                <div className="px-40">
                  <p className=" container shadow-md absolute md:right-10 bottom-0 left-10 sm:left-10 md:left-20 lg:left-40 bg-white m-2 px-4 py-4 ">
                    We have better condidions for payment processing, card
                    issuance and lending solutions
                    <div className="absolute text-blue-800 bg-green-200 p-2 rounded-full -top-6 left-28">
                      <FaMedal />
                    </div>
                  </p>
                </div>
              </div>
            </div>
            {/*TEXTO DERECHA*/}
            <div className="text-start mt-14 mx-20 justify-center ">
              {" "}
              <h1 className="font-bold text-3xl ">Payments & lending</h1>
              <p>Payment processing, card issuance and lending solutions</p>
              <button className="bg-blue-100 m-2 p-2 font-bold">
                Coming soon
              </button>
            </div>
          </div>
        </div>
        {/*PARTE BLANQUITA ARRIBA DEL AZUL FOOTER */}
        <div className="my-10">
          <div className="flex justify-center ">
            <h1 className="font-bold text-4xl">Client portal demo</h1>
          </div>
          <div className="grid md:grid-cols-2 mt-8">
            <div className="m-8">
              <img src={comida} alt="comida" className="sm:ml-20" />
            </div>
            <div className="text-start ml-20">
              <ul className="ml-20 mt-10">
                <div className="mt-4">
                  <li className="font-extrabold text-lg">
                    {" "}
                    <BiPlusMedical className="inline-block text-blue-600 -ml-4 pr-2" />
                    Secure
                  </li>
                  <p>
                    Built-in protection following <br />
                    best security practices for <br />
                    APIs that you can trust.
                  </p>
                </div>
                <div className="mt-4">
                  <li className="font-extrabold text-lg">
                    {" "}
                    <BiPlusMedical className="inline-block text-blue-600 -ml-4 pr-2" />
                    Secure
                  </li>
                  <p>
                    Built-in protection following <br />
                    best security practices for <br />
                    APIs that you can trust.
                  </p>
                </div>
                <div className="mt-4">
                  <li className="font-extrabold text-lg">
                    <BiPlusMedical className="inline-block text-blue-600 -ml-4 pr-2" />
                    Secure
                  </li>
                  <p>
                    Built-in protection following <br />
                    best security practices for <br />
                    APIs that you can trust.
                  </p>
                </div>
              </ul>
            </div>
          </div>
        </div>
        {/*PARTE AZULITA ARRIBA DEL NEGRO FOOTER */}
        <div className="flex justify-center bg-blue-800 text-white ">
          <div className="m-20 text-center">
            <h1 className="text-4xl font-bold ">Talk to experts</h1>
            <p className="mt-6 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Commodi ipsa eum
            </p>
            <button className="bg-yellow-500 p-3 rounded-sm  mt-10">
              Send a message
            </button>
          </div>
        </div>
      </body>
      {/*PARTE foOTER */}
      <footer>
        <div className="bg-black grid md:grid-cols-3 text-white p-10 ">
          <div className="my-20 mx-8">
            <h1 className="text-2xl font-bold ">
              <MdDeveloperMode className="inline-block" />
              First Digital
            </h1>
            <h4 className="mt-5"> Subscribe to keep up with the latest news</h4>

            <div className="mt-5 flex items-center">
              <input
                type="text"
                placeholder="Email address"
                className="text-white bg-gray-900 px-1.5 py-2 mx-3"
              />
              <button className="bg-yellow-600 p-2.5 ml-1">
                <AiOutlineArrowRight />
              </button>
            </div>

            <p className="mt-2 font-light">
              Subscribe to keep up with the latest news Subscribe to keep up
              with the
            </p>

            <p className="mt-8 font-light">
              2020 First Digital Trust All Rights Reserved.
            </p>
          </div>
          {/* COLUMNAS */}
          <div className="mb-3 m-20 ">
            <ul className="mb-3">
              <li className="font-bold mb-3">Solutions</li>
              <li>Asset tokenization</li>
              <li>AR5 Network</li>
              <li>Bit Pension</li>
              <li>Chupa Cuete</li>
            </ul>
            <ul className="mb-3">
              <li className="font-bold mb-3">Solutions</li>
              {[...Array(4)].map((li) => (
                <li className="font-light">AR5 Network</li>
              ))}
            </ul>
          </div>
          <div className="mb-3 m-20">
            <ul className="mb-3">
              <li className="font-bold mb-3">Solutions</li>
              {[...Array(4)].map((li) => (
                <li className="font-light">AR5 Network</li>
              ))}
            </ul>
            <ul className="mb-3">
              <li className="font-bold mb-3">Solutions</li>
              {[...Array(4)].map((li) => (
                <li className="font-light">AR5 Network</li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Prueba2;
