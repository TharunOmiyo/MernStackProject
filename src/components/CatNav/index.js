import React, { useEffect } from "react";
import "./_cat-nav.scss";
import { useDispatch, useSelector } from "react-redux";
// import categorySlice from "../../Redux/Category/categorySlice";
import { getCategories } from "../../Redux/Category/actions";
import { Link } from "react-router-dom";

export default function CatNav() {
  const Category = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();
  console.log(Category, "start");
  useEffect(() => {
    console.log(Category, "inside before");
    dispatch(getCategories());
    console.log(Category, "inside after");
  }, []);
  console.log(Category, "End");
  return (
    <div className="container cat-nav-container">
      <ul>
        <li className="list-items">
          <Link to="/">Home</Link>
        </li>
        {Category.map((category, key) => {
          if (category.parent_category_id == null) {
            return (
              <li className="list-items" key={key}>
                <a href="#">{category.category}</a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
