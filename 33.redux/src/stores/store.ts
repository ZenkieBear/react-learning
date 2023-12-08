import { configureStore } from "@reduxjs/toolkit";
import counterSlice, { CounterState } from "@/features/counter/counterSlice";

const reducers = {
  counter: counterSlice
}
export default configureStore({
  reducer: reducers
})