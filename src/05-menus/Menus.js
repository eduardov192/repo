import React from "react";
import { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const SoloCategorias = ["all", ...new Set(items.map((item) => item.category))];
console.log(SoloCategorias);

const Menus = () => {
  const [menus, setMenus] = useState(items);
  const [cate, setCate] = useState(SoloCategorias);

  const filterCategories = (cat) => {
    if (cat === "all") {
      setMenus(items);
      return;
    }
    const newItems = items.filter((item) => item.category === cat);
    setMenus(newItems);
  };

  return (
    <div>
      <h1 className="font-extrabold text-4xl text-center mt-4">Our Menu</h1>
      <div className="text-center mt-2">
        <ul className="flex justify-center ">
          <Categories cate={cate} filterCategories={filterCategories} />
        </ul>
      </div>
      <div className=" mt-10">
        <Menu menus={menus} />
      </div>
    </div>
  );
};

export default Menus;
