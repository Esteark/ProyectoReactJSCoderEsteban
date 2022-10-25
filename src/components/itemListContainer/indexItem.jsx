import React from "react";
import "./stylesItem.css";

export default function ItemContainerList({ saludo }) {
  return (
    <div className="item-list-container">
      <h2>{saludo}</h2>
    </div>
  );
}
