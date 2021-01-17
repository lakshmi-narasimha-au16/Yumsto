import RecipeInfo from "../Components/Details/RecipeDetails";
import RecipeIngredients from "../Components/Details/RecipeIngredients";
import Similarrecipe from "../Components/Details/SimilarRecipes";
import React from "react";
import Navigation from "../Components/Navigation"


const Detail =()=> {
    return (
      <>
        <header>
          <Navigation />
        </header>
        <main>
          <RecipeInfo  />
          <RecipeIngredients />
          <Similarrecipe />
        </main>
      </>
    );
}
export default Detail
