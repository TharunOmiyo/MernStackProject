import React from "react";
import "./_side-nav.scss";
import { useSelector } from "react-redux";
import accordionSlice from "../../Redux/Accordion/accordionSlice";

export default function SideNav() {
  const AccordionData = useSelector(accordionSlice.getInitialState);
  console.log("ide NaV");
  function listItem() {
    let counter = 0;
    const AccordionLength = AccordionData.length - 1;
    return AccordionData.map((item, index) => {
      const { category, items } = item;
      // console.log(items.length, category, items, AccordionLength);
      if (index == AccordionLength) {
        return items.map((item, key) => {
          return (
            <li className="sub-items" key={key}>
              <a href="#">{item}</a>
            </li>
          );
        });
      }
    });
  }

  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Catageory</h3>
      </div>
      <div className="accordion">
        {AccordionData.map((accordionCategory, key) => {
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
                className="accordion-collapse collapse show "
                id={"collapse" + key}
              >
                <div className="accordion-body">
                  <ul>{listItem()}</ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
