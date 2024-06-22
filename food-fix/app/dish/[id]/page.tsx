"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Header from "../../components/header"

import "../../../styles/dishDetails.css";

interface Ingredient {
  name: string;
  units: string;
  qty: number;
  grams: number;
  scale: number;
}

interface DishDetail {
  id: string;
  name: string;
  description: string;
  prepareTime: number;
  cookTime: number;
  ingredients: Ingredient[];
  steps: string[];
  image: string;
}

const DishPage: React.FC = () => {
  const { id } = useParams();
  const [dish, setDish] = useState<DishDetail | null>(null);

  useEffect(() => {
    if (id) {
      const fetchDishDetails = async () => {
        const options = {
          method: "GET",
          url: `https://low-carb-recipes.p.rapidapi.com/recipes/${id}`,
          headers: {
            "x-rapidapi-key":
              "0f5426c5d1msh4ef782482c5d812p1c2940jsnbe9c45f910c5",
            "x-rapidapi-host": "low-carb-recipes.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.request(options);
          setDish(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchDishDetails();
    }
  }, [id]);

  if (!dish) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header/>
      <div className="dish-detail">
        <div className="dish-title-handler">
          <img className="dish-img" src={dish.image} alt={dish.name} />
          <h3 className="dish-name">{dish.name}</h3>
        </div>

        <h3>description:</h3>
        <p className="description">{dish.description}</p>

        <div className="container">
          <div className="ingredients-container">
            <h3>Ingredients:</h3>
            <ul className="ingredients-list">
              {dish.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  {ingredient.name}: {ingredient.qty} {ingredient.units} (
                  {ingredient.grams} grams, scale: {ingredient.scale})
                </li>
              ))}
            </ul>
          </div>
          <div className="steps-container">
            <h3>Steps:</h3>
            <ol className="steps-list">
              {dish.steps.map((step, index) => (
                <li key={index} className="step-item">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default DishPage;
