import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    showCart: "false"
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = {
                id: nanoid(),
                itemName: action.payload
            }
            // console.log('item', item)
            state.cartItems.push(item)
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) =>
                item.id !== action.payload
            )
        },
        showCart: (state) => {
            state.showCart = true;
        },
        hideCart: (state) => {
            state.showCart = false
        }
    }
})

export const { addItem, removeItem, showCart, hideCart } = cartSlice.actions
export default cartSlice.reducer