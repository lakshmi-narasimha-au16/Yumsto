export const Details = {
    infoApi: "infoApi",
    nutritionApi: "nutritionApi",
    ingredientsApi: "ingredientsApi",
    equipmentApi: "equipmentApi",
    tasteWidgetApi: "tasteWidgetApi",
    similarrecipesApi: "similarrecipesApi",
    dummy: "dummy",
    dummy1:"dummy1",
    dummy2:"dummy2"
  }

const DetailsStore = {
  infoApiS: "",
  nutritionApiS: "",
  ingredientsApiS: "",
  equipmentApiS: "",
  tasteWidgetApiS: "",
  similarRecipesApiS: "",
  dummyUpdateS:"",
  dummy1UpdateS:"",
  dummy2UpdateS:""
};

const DetailsReducer = (state, action) => {
state = state || DetailsStore;

    switch (action.type) {
    case Details.infoApi:
        return {
        ...state,
        infoApiS: action.payload,
        };

    case Details.nutritionApi:
        return {
        ...state,
        nutritionApiS: action.payload,
        };
    case Details.ingredientsApi:
        return {
        ...state,
        ingredientsApiS: action.payload,
        };
    case Details.equipmentApi:
        return {
        ...state,
        equipmentApiS: action.payload,
        };
    case Details.tasteWidgetApi:
        return {
        ...state,
        tasteWidgetApiS: action.payload,
        };
    case Details.similarrecipesApi:
        return {
        ...state,
        similarRecipesApiS: action.payload,
        };
    case Details.dummy:
        return {
        ...state,
        dummyUpdateS: action.payload,
        };
    case Details.dummy1:
        return {
        ...state,
        dummy1UpdateS: action.payload,
        };
    case Details.dummy2:
        return {
        ...state,
        dummy2UpdateS: action.payload,
        };

    default:
        return state;
}
};

export default DetailsReducer;
