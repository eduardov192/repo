import React from "react";
import questions from "./data";
import Questions from "./Questions";
import { useState } from "react";

const Question = () => {
  const [data, setData] = useState(questions);
  return (
    <div className="bg-purple-600 p-2">
      <div className="grid grid-cols-3 bg-white m-40 p-10">
        <div className="">
          <h1 className="font-bold mt-2 px-10 pt-10">
            Questions and Answers About Login
          </h1>
        </div>
        <div className="col-span-2">
          <div>
            {data.map((question) => {
              return <Questions key={question.id} {...question} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
