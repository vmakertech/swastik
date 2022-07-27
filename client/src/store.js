import { createStore, combineReducers } from "redux" 
import {countReducer, userReducer} from './reducer'
 
export const store = createStore(combineReducers({
    count : countReducer,
    user : userReducer
}))