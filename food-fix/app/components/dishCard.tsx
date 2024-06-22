"use client";

import React from "react";
import Link from "next/link";
import "../../styles/dishCard.css";

interface DishCardProps {
  dish: {
    id: string,
    image: string;
    name: string;
    description: string;
    ingredients: { name: string }[];
  };
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <Link href={`/dish/${dish.id}`}>
      <div className="dish-card">
        <img src={dish.image} alt={dish.name}/>
        <h3>{dish.name}</h3>
      </div>
    </Link>
  );
};

export default DishCard;
