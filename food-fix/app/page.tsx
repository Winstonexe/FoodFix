"use client";

import React, { useState } from "react";
import axios from "axios";

import Header from "./components/header";
import SearchParameters from "./components/SearchParameters";
import DishCard from "./components/dishCard";

interface RecipeItem {
  id: string;
  image: string;
  name: string;
  description: string;
  ingredients: { name: string }[];
}

export default function Home() {
  const [dishes, setDishes] = useState<RecipeItem[]>([]);

  const fetchData = async (query: string) => {
    const options = {
      method: 'GET',
      url: 'https://low-carb-recipes.p.rapidapi.com/search',
      params: {
        name: query,
        limit: '20'
      },
      headers: {
        'x-rapidapi-key': '0f5426c5d1msh4ef782482c5d812p1c2940jsnbe9c45f910c5',
        'x-rapidapi-host': 'low-carb-recipes.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const simplifiedData = response.data.map((item: RecipeItem) => ({
        id: item.id,
        image: item.image,
        name: item.name,
        description: item.description,
        ingredients: item.ingredients.map(ingredient => ingredient.name),
      }));
      setDishes(simplifiedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header fetchData={fetchData} />
      <section className="params-container">
        <SearchParameters fetchData={fetchData} />
      </section>
      <main>
        <div className="dishes-container">
          {dishes.map((dish, index) => (
            <DishCard key={index} dish={dish} />
          ))}
        </div>
      </main>
    </>
  );
}
