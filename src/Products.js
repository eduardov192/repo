import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";
import Btn from "./components/button";
import { useState } from "react";

const Products = () => {
  const [loading, setLoading] = useState(false);

  const { closeSubmenu } = useGlobalContext();
  return (
    <div>
      <div className="home__6">
        <div className="px-10 md:mx-auto md:w-10/12 py-14 md:py-24 ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-gray-500 text-3xl font-bold mb-5">
                Payments infrastructure for the internet
              </h1>
              <p className="text-md">
                Millions of companies of all sizes—from startups to Fortune
                500s—use Stripe’s software and APIs to accept payments, send
                payouts, and manage their businesses online.
              </p>
            </div>
            <div className="container pl-8 text-center mb-6 md:mb-0">
              <img
                src={phoneImg}
                alt="phone"
                height="200"
                width="100%"
                className="inline-block w-32 h-96"
              />
            </div>
          </div>

          <button
            onClick={() => setLoading(!loading)}
            className="bg-red-500 px-2 rounded-lg text-white hover:bg-red-300 border-purple-800 "
          >
            Start Now
          </button>
          <Btn color="red" btntexto="buena" loading={loading} />
        </div>
      </div>
      {/*FOOTERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR*/}
      <footer>
        <div className="bg-black text-white">
          <div className="grid mt-10 ml-4 px-10 grid-cols-2 md:grid-cols-5 gap-8 pt-10 text-white ">
            <div>
              <h1 className="font-bold text-md mb-2 ">Shop and Learn</h1>
              <ul>
                {[...Array(4)].map((list) => (
                  <li>test 1</li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-md mb-2">Services</h1>
              <ul>
                <li>test 1</li>
                <li>test 2</li>
                <li>test 3</li>
                <li>test 4</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-md mb-2">Apple Store</h1>
              <ul>
                <li>test 1</li>
                <li>test 2</li>
                <li>test 3</li>
                <li>test 4</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-md mb-2">For Business</h1>
              <ul>
                <li>test 1</li>
                <li>test 2</li>
                <li>test 3</li>
                <li>test 4</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-md mb-2">Apple Values</h1>
              <ul>
                <li>test 1</li>
                <li>test 2</li>
                <li>test 3</li>
                <li>test 4</li>
              </ul>
            </div>
          </div>

          <div className="mt-5">
            <h3>
              More ways to shop: Find an Apple Store or other retailer near you.
              Or call 1-800-MY-APPLE.
            </h3>

            <h3 className="mt-2 border-t">
              Copyright © 2021 Apple Inc. All rights reserved.
            </h3>
            <h4 className="mt-2">United States</h4>
          </div>
        </div>
        {/*  eaeaeaaae  */}
      </footer>
    </div>
  );
};

export default Products;
