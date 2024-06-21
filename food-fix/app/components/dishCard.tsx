"use client";

import React from "react";

import "../../styles/dishCard.css";

interface DishCardProps {
  dish: {
    image: string;
    name: string;
    description: string;
    ingredients: { name: string }[];
  };
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const ingredientNames = dish.ingredients.map(ingredient => ingredient.name);

  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name}/>
      <h3>{dish.name}</h3>
    </div>
  );
};

export default DishCard;
