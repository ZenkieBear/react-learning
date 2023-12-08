import { Dispatch, EnhancedStore, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number
}

const initialState: CounterState = { value: 0 }
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const incrementAsync = (amount: number) => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000);
}

export const selectCount = state => state.counter.value

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer