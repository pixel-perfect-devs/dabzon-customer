'use client'
import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cartslice',
  initialState: [
    {},
  ],
  reducers: {
    setCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCart } = CartSlice.actions

export default CartSlice.reducer