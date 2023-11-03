import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideCart } from "../features/cartSlice"

function CartItems() {
    const cartItems = useSelector((state) => state.items.cartItems)
    console.log('cartItems', cartItems)
    const dispatch = useDispatch()

    return (
        <div style={{ position: 'absolute', top: 10, right: 0, width: "50%", height: "50%" }}>
            {cartItems ?
                <div style={{ position: "relative" }}>
                    <h1
                        style={{ position: "absolute", top: 2, right: 2, cursor: "pointer" }}
                        onClick={() => dispatch(hideCart())}
                    >
                        X
                    </h1>
                    <ul style={{ backgroundColor: "#666", padding: "3rem", margin: "2rem 0" }}>
                        {cartItems.map((item, index) => {
                            return <li key={index}>
                                <h2>{item.itemName}</h2>
                            </li>
                        })}
                    </ul>
                </div>
                :
                <h3>No items</h3>
            }
        </div>
    )
}

export default CartItems
