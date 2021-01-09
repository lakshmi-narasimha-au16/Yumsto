import { createStore,applyMiddleware } from 'redux'
import Reducer from './Reducers/main_reducer'
import PromiseMiddleware from "redux-promise"


const Store = createStore(Reducer,applyMiddleware(PromiseMiddleware))

export default Store