import React from "react";
import "./ItemCard.css"

function ItemCard({ title }) {
  return (
    <div className="item-card">
      <span>{title}</span>
    </div>
  );
}

export default ItemCard;