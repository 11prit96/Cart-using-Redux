import React from 'react'
import { showCart } from "../features/cartSlice"
import { useDispatch, useSelector } from 'react-redux'

const navStyles = {
    backgroundColor: "#d65a51",
    width: "100%",
    height: "4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 3rem",
    marginBottom: "2rem"
}

export default function Navbar() {
    const cartItems = useSelector(state => state.items.cartItems)
    // console.log('cartItems', cartItems)
    const numOfItems = cartItems.length
    const dispatch = useDispatch()
    return (
        <div style={navStyles}>
            <h3>Shopping Cart Example</h3>
            <p style={{ cursor: "pointer" }} onClick={() => dispatch(showCart())}>Cart Items : {numOfItems}</p>
        </div>
    )
}
