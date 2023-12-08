import { Action, createStore } from "redux";

const counterReducer = (state = { value: 0 }, action: Action) => {
  switch (action.type) {
    case 'counter/increment':
      return { value: state.value + 1 }
    case 'counter/decrement':
      return { value: state.value - 1 }
    default:
      return state
  }
}

const store = createStore(counterReducer)

export default store
