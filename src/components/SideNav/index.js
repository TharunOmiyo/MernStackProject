import React from "react";
import "./_side-nav.scss";

export default function SideNav() {
  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Catageory</h3>
      </div>
      <div className="accordion">
        <div className="accordion-item indvidual-category">
          <div className="accordion-header">
            <button
              className="accordion-button  "
              data-bs-target="#accordion-one"
              data-bs-toggle="collapse"
            >
              <div className="category-title">
                <a href="#">Mens</a>
              </div>
            </button>
          </div>
          <div className="accordion-collapse collapse show " id="accordion-one">
            <div className="accordion-body">
              <ul>
                <li className="sub-items">
                  <a href="#">Coats</a>
                </li>
                <li className="sub-items">
                  <a href="#">Shoes</a>
                </li>
                <li className="sub-items">
                  <a href="#">Party Wear</a>
                </li>
                <li className="sub-items">
                  <a href="#">Shirts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
