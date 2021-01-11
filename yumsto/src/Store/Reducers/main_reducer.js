import { combineReducers } from 'redux'
import home_reducer from './home_reducer'
import search_reducer from './search_reducer'

const Reducer = combineReducers({
    home_reducer,
    search_reducer
})
export default Reducer