import { Details } from "../../Store/Actions/detailsAction";
const url = "https://api.spoonacular.com/recipes/";

const key = "97405f6dd7504936bc7cc61c0adbae96"


export const ReceipeInfo = (id) => {
  const output = fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`
  ).then((resp) => resp.json());

  return {
    type: Details.infoApi,
    payload: output,
  };
};
export const ReceipeNutrition = (id) => {
  const output1 = fetch(
    `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${key}`
  ).then((res) => res.json());

  return {
    type: Details.nutritionApi,
    payload: output1,
  };
};
export const ReceipeIngredients = (id) => {
  const output2 = fetch(
    `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${key}`
  ).then((res) => res.json());

  return {
    type: Details.ingredientsApi,
    payload: output2,
  };
};
export const ReceipeEquipment = (id) => {
  const output3 = fetch(
    `https://api.spoonacular.com/recipes/${id}/equipmentWidget.json?apiKey=${key}`
  ).then((res) => res.json());

  return {
    type: Details.equipmentApi,
    payload: output3,
  };
};
export const ReceipeTasteWidget = (id) => {
  const output4 = fetch(
    `https://api.spoonacular.com/recipes/${id}/tasteWidget.json?apiKey=${key}`
  ).then((res) => res.json());

  return {
    type: Details.tasteWidgetApi,
    payload: output4,
  };
};
export const SimilarReceipe = (id) => {
  const output5 = fetch(
    `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${key}`
  ).then((res) => res.json());

  return {
    type: Details.similarreceipesApi,
    payload: output5,
  };
};
