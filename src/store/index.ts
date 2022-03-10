import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {counter: 0},
  reducers: {
    increment(state) {
      state.counter += 1
    },
    decrement(state) {
      state.counter -= 1
    },
    addBy(state, action: PayloadAction<number>) {
      state.counter += action.payload
    },
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

export const actions = counterSlice.actions
export type TDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<TDispatch>()

export default store