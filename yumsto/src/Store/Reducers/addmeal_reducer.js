

import { AddMeal } from "../Actions/addamealAction";

const AddMealStore = {
  
    mealsApiS:"",
    viewMealsDataS:"",
    searchApiS:""
};

const AddMealReducer = (state, action) => {
  state = state || AddMealStore;

  switch (action.type) {
    case AddMeal.mealsApi:
      return {
        ...state,
        mealsApiS: action.payload,
      };
    case AddMeal.viewMealsData:
      return {
        ...state,
        viewMealsDataS: action.payload,
      };
    case AddMeal.searchApi:
      return {
        ...state,
        searchApiS: action.payload,
      };

    

    default:
      return state;
  }
};

export default AddMealReducer;
