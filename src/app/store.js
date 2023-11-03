import { configureStore } from "@reduxjs/toolkit"
import itemReducer from "../features/cartSlice"

export const store = configureStore({
    reducer: {
        items: itemReducer
    }
})