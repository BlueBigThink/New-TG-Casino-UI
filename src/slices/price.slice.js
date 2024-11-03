import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Price_ETH : 3000,
    Price_BNB : 300,
    Price_SOL : 150,
    Price_UNT : 100,
}

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setETH: (state, action) => {
      state.Price_ETH = action.payload
    },
    setBNB: (state, action) => {
      state.Price_BNB = action.payload
    },
    setSOL: (state, action) => {
      state.Price_SOL = action.payload
    },
    setUNT: (state, action) => {
      state.Price_UNT = action.payload
    },
  },
})

export const { setETH, setBNB, setSOL, setUNT } = priceSlice.actions

export default priceSlice.reducer