import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    plinkoRunning: 0
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setPlinkoRunning: (state, action) => {
            state.plinkoRunning = action.payload
          },
        incrementPlinkoRunning: (state, action) => {
            const calc = action.payload + 1
            state.plinkoRunning = calc < 0 ? 1 : calc
        },
        decrementPlinkoRunning: (state, action) => {
            const calc = action.payload - 1
            state.plinkoRunning = calc < 0 ? 0 : calc
        },
    },
  })
  
  export const { setPlinkoRunning, incrementPlinkoRunning, decrementPlinkoRunning } = gameSlice.actions
  
  export default gameSlice.reducer