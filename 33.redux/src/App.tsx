import { useState } from 'react'
import './App.css'
import store from './stores/counter'

function App () {
  return (
    <>
      <Counter />
      <Counter />
    </>
  )
}
function Counter () {
  const [state, setState] = useState(store.getState().value)
  store.subscribe(() => setState(store.getState().value))
  return (
    <div>
      <button onClick={() => store.dispatch({ type: 'counter/decrement' })}>Cut</button>
      {state}
      <button onClick={() => store.dispatch({ type: 'counter/increment' })}>Plus</button>
    </div>
  )
}

export default App
