import { createStore } from 'redux'
import Reducer from './Reducers/main_reducer'

const Store = createStore(Reducer)

export default Store