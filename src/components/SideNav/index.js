import React, { useEffect, useState } from "react";
import "./_side-nav.scss";
import { useDispatch, useSelector } from "react-redux";
import accordionSlice from "../../Redux/Accordion/accordionSlice";
import { getCategories } from "../../Redux/Category/actions";
import {
  filterProducts,
  filterByPrice,
} from "../../Redux/Product/productSlice";

export default function SideNav() {
  const AccordionData = useSelector(
    (state) => state.categoryReducer.categories
  );

  const fetchedData = useSelector((state) => state.pr);
  const [product, setProduct] = useState();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(130);
  console.log("ide NaV");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    setProduct(fetchedData);
  }, [fetchedData.status]);

  const filterData = (selectedCategory) => {
    console.log(product);
    console.log(selectedCategory);
    const products = Object.keys(product);
    const payload = { selectedCategory, product };
    // const filterin=
    console.log(products);
    dispatch(filterProducts(payload));
  };
  function applyPriceFilter() {
    const payload = { product, min, max };
    dispatch(filterByPrice(payload));
  }
  function setPriceLimit(e, setFlag) {
    if (setFlag == "min") {
      setMin(e.target.value);
    } else if (setFlag == "max") {
      setMax(e.target.value);
    }
  }

  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Catageory</h3>
      </div>
      <div className="accordion">
        {AccordionData.map((accordionCategory, key) => {
          if (accordionCategory.parent_category_id == null) {
            return (
              <div className="accordion-item indvidual-category" key={key}>
                <div className="accordion-header">
                  <button
                    className="accordion-button  "
                    data-bs-target={"#collapse" + key}
                    data-bs-toggle="collapse"
                  >
                    <div className="category-title">
                      <a href="#">{accordionCategory.category}</a>
                    </div>
                  </button>
                </div>
                <div
                  className="accordion-collapse collapse show my-3"
                  id={"collapse" + key}
                >
                  <div className="accordion-body">
                    <ul>
                      {AccordionData.map((subCategory, index) => {
                        if (
                          accordionCategory.id == subCategory.parent_category_id
                        ) {
                          return (
                            <li
                              className="sub-items"
                              key={index}
                              onClick={() => filterData(subCategory)}
                            >
                              <a href="#">{subCategory.category}</a>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="price-filter-container">
        <div className="section-title">
          <h3>Filter By Price</h3>
        </div>

        <div>
          <label>Main:{min}</label>
          <input
            className="form-range"
            type="range"
            min={10}
            max={130}
            step={10}
            onChange={(e) => setPriceLimit(e, "min")}
          ></input>
        </div>

        <div>
          <label>Max:{max}</label>
          <input
            className="form-range"
            type="range"
            min={10}
            max={130}
            step={10}
            onChange={(e) => setPriceLimit(e, "max")}
          ></input>
        </div>
        <div>
          <button
            onClick={() => applyPriceFilter()}
            className="btn btn-outline-dark my-3 "
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
}
