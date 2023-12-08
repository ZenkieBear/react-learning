import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/features/counter/counterSlice";

const reducers = {
  counter: counterSlice
}
const store = configureStore({
  reducer: reducers
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
