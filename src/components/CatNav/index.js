import React from "react";
import "./_cat-nav.scss";
import { useSelector } from "react-redux";
import categorySlice from "../../store/slices/categorySlice";

export default function CatNav() {
  const Category = useSelector(categorySlice.getInitialState);
  return (
    <div className="container cat-nav-container">
      <ul>
        {Category.map((category, key) => {
          return (
            <li className="list-items" key={key}>
              <a href="#">{category}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
