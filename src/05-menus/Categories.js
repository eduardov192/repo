import React from "react";

const Categories = ({ cate, filterCategories }) => {
  return (
    <div>
      {cate.map((cat, index) => {
        return (
          <button
            onClick={() => filterCategories(cat)}
            key={index}
            className="mx-2 text-yellow-500 font-bold"
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
