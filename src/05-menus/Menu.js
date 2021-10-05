import React from "react";

const Menu = ({ menus }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {menus.map((men) => {
        const { id, title, category, price, img, desc } = men;
        return (
          <div key={id} className="bg-white shadow-lg m-2">
            <div className="bg-white border-2 border-yellow-500 h-auto w-auto container m-2 rounded relative flex justify-center">
              <img
                src={img}
                alt=""
                className="h-32 w-full md:h-48 object-cover"
              />
            </div>
            <div className="flex justify-between mx-2">
              <h1 className="font-bold border-b-2 border-yellow-200 mb-2">
                {title}
              </h1>
              <h3 className="text-yellow-400 font-bold inline-block">
                ${price}
              </h3>
            </div>

            <div className="mx-2">
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
