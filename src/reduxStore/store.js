import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './Slices/Cart/CartSlice'

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
})