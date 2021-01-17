const mealPlanReducer = (state={},action)=>{
    switch (action.type) {
        case "MEALPLANS":
            return {
                ...state, MealPlans:action.payload
            }
    
        default:
            return state
    }
}
export default mealPlanReducer