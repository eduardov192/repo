import React from "react";
import { useState } from "react";
import reviews from "./data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Review = () => {
  const [data, setData] = useState(reviews);
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = data[index];

  const checkIndex = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    return setIndex(randomNumber);
  };

  return (
    <div className="">
      <div className=" grid grid-cols-3 text-center ">
        <div>1</div>
        <div className="bg-gray-200 py-10 mt-20 shadow-xl rounded-lg ">
          <div>
            <div className="flex justify-center">
              <img src={image} alt="ga" className="rounded-full w-32 h-32" />
            </div>
            <div className=" ">
              <h1 className="font-bold uppercase mt-2">{name}</h1>
              <p>{job}</p>
              <p className="font-light mt-2 mx-2 ">{text}</p>
            </div>
          </div>
          <div className="text-center mt-10 flex justify-center">
            <button onClick={() => prevPerson()}>
              {" "}
              <AiOutlineArrowLeft />
            </button>
            <button onClick={() => randomPerson()} className="mx-10">
              Random
            </button>
            <button onClick={() => nextPerson()}>
              {" "}
              <AiOutlineArrowRight />{" "}
            </button>
          </div>
        </div>

        <div>3</div>
      </div>
    </div>
  );
};

export default Review;
