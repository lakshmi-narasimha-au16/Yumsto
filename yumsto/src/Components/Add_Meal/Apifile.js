import { AddMeal } from "../../Store/Actions/addamealAction";

const key = "1f812a05337c4a81bbf114b4efa100e1";
const url="https://api.spoonacular.com/recipes/complexSearch"
 export const MealsApiData = () => {
  const output = fetch(
    "https://api.npoint.io/727f7809cae1f57c67f0"
  ).then((resp) => resp.json())
console.log("1");
  return {
    type: AddMeal.mealsApi,
    payload: output,
  };
};
export const BulkInfo = (arrayIds) => {
  const output1 = fetch(
    `https://api.spoonacular.com/recipes/informationBulk?ids=${arrayIds.join(
      ","
    )}&apiKey=${key}`
  ).then((resp) => resp.json());

  return {
    type: AddMeal.viewMealsData,
    payload: output1,
  };
};

export const fetchAgainMealsApiData = (data) => {
  const output2 = fetch("https://api.npoint.io/727f7809cae1f57c67f0", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())

  return {
    type: AddMeal.mealsApi,
    payload: output2,
  };
};


export const SearchApi = (diet,searchinpval) => {
  const output3 = fetch(
    `${url}?diet=${diet}&query=${searchinpval}&apiKey=${key}`
  ).then((resp) => resp.json())

  return {
    type: AddMeal.searchApi,
    payload: output3,
  };
};