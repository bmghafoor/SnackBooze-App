import React, { useState } from "react";
import "./Form.css";

const ItemForm = () => {
  const [foodOrDrink, setFoodOrDrink] = useState("snack");
  const [itemName, setItemName] = useState("");
  const [recipe, setRecipe] = useState("");
  const [serve, setServe] = useState("");

  const handleFoodOrDrink = (e) => {
    setFoodOrDrink(e.target.value);
  };

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };
  const handleRecipeChange = (e) => {
    setRecipe(e.target.value);
  };
  const handleServeChange = (e) => {
    setServe(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(foodOrDrink);
  };

  return (
    <div className="formBody">
      <form onSubmit={handleSubmit}>
        <label htmlFor="foodOrDrink" className="label">
          Type
        </label>
        <select id="foodOrDrink" onChange={handleFoodOrDrink}>
          <option value="snack">Snack</option>
          <option value="drink">Drink</option>
        </select>
        <label htmlFor="itemName" className="label">
          Item Name
        </label>
        <input
          type="text"
          id="itemName"
          placeholder="item name"
          value={itemName}
          onChange={handleNameChange}
        ></input>
        <label htmlFor="recipe" className="label">
          recipe
        </label>
        <input
          type="text"
          id="recipe"
          placeholder="Recipe"
          value={recipe}
          onChange={handleRecipeChange}
        ></input>
        <label htmlFor="serve" className="label">
          Serving Instructions
        </label>
        <input
          type="text"
          id="serve"
          placeholder="Serving Instructions"
          value={serve}
          onChange={handleServeChange}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ItemForm;
