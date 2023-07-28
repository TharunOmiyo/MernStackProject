import React from "react";
import "./_cat-nav.scss";

export default function CatNav() {
  return (
    <div className="container cat-nav-container">
      <ul>
        <li className="list-items">
          <a href="#">Men</a>
        </li>
        <li className="list-items">
          <a href="#">Women</a>
        </li>
        <li className="list-items">
          <a href="#">Kids</a>
        </li>
        <li className="list-items">
          <a href="#">BestOffers</a>
        </li>
      </ul>
    </div>
  );
}
