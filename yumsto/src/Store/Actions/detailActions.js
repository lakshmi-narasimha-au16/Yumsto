import { Details } from "../../Store/Reducers/details_reducer";
import { apiKey1, apiKey } from './apikey'

const url = "https://api.spoonacular.com/recipes/";
const key = "1755b7eddb8b4bc1980870df2ce80322"
// const recipeId=this.props.match.params.id


export const RecipeInfo = (id) => {
  const output = fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
  ).then((resp) => resp.json());
  return {
    type: Details.infoApi,
    payload: output,
  }
}

export const RecipeNutrition = (id) => {
  const output1 = fetch(
    `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`
  ).then((res) => res.json());
  return {
    type: Details.nutritionApi,
    payload: output1,
  }
}

export const RecipeIngredients = (id) => {
  const output2 = fetch(
    `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`
  ).then((res) => res.json());
  return {
    type: Details.ingredientsApi,
    payload: output2,
  }
}

export const RecipeEquipment = (id) => {
  const output3 = fetch(
    `https://api.spoonacular.com/recipes/${id}/equipmentWidget.json?apiKey=${apiKey}`
  ).then((res) => res.json());
  return {
    type: Details.equipmentApi,
    payload: output3,
  }
}

export const RecipeTasteWidget = (id) => {
  const output4 = fetch(
    `https://api.spoonacular.com/recipes/${id}/tasteWidget.json?apiKey=${apiKey}`
  ).then((res) => res.json());
  return {
    type: Details.tasteWidgetApi,
    payload: output4,
  }
}

export const SimilarRecipe = async (id) => {
  const output5 = await fetch(
    `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}`
  ).then((res) => res.json());
  return {
    type: Details.similarrecipesApi,
    payload: output5,
  }
}

