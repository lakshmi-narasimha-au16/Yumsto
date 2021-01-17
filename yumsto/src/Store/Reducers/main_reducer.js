import { combineReducers } from 'redux'
import home_reducer from './home_reducer'
import search_reducer from './search_reducer'
import auth_reducer from './auth_reducer'
import mealPlanReducer from "./mealPlanReducer"
import details_reducer from './details_reducer'

const Reducer = combineReducers({
    home_reducer,
    search_reducer,
    auth_reducer,
    mealPlanReducer,
    details_reducer
})
export default Reducer