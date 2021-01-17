import { combineReducers } from 'redux'
import home_reducer from './home_reducer'
import search_reducer from './search_reducer'
import details_reducer from './details_reducer'
import addmeal_reducer from './addmeal_reducer'

const Reducer = combineReducers({
    home_reducer,
    search_reducer,
    details_reducer,
    addmeal_reducer
})

export default Reducer