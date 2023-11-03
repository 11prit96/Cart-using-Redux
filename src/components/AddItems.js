import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from "../features/cartSlice"

export default function AddItems() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addItemHandler = (e) => {
        e.preventDefault()
        dispatch(addItem(input))
        setInput('')
    }

    return (
        <div style={{ width: '80%', marginInline: "auto" }}>
            <form style={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%" }} onSubmit={addItemHandler}>
                <input
                    type='text'
                    placeholder='Enter a name of the item...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{ width: "80%", height: "2rem", padding: "1rem" }}
                />
                <button style={{ height: "2rem", width: "2rem" }} type='submit'>+</button>
            </form>

        </div>
    )
}
