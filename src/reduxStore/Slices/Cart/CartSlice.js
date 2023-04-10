'use client'
import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cartslice',
  initialState: { cart:[]},
  reducers: {
    setCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cart.push(action.payload)
    },
    deleteFromCart: (state, action) => {
      state.cart.splice(state.cart.findIndex((cart_item) => cart_item._id === action.payload), 1);
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCart, deleteFromCart } = CartSlice.actions

export default CartSlice.reducer