import cartReducer from './cartSlice'
import { configureStore } from '@reduxjs/toolkit/dist/configureStore'

const store = configureStore({
    reducer: {
        cart : cartReducer
    } 
})

export default store


