import { createStore, combineReducers } from "redux" 
import rootReducer from './reducer'
 
export const store = createStore(rootReducer)