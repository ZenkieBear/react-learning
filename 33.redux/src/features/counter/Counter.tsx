import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementAsync, incrementByAmount, selectCount } from "./counterSlice"
import { useState } from "react"

const Counter = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  // inline selector
  const plusTwo = useSelector(state => state.counter.value + 2)

  return (
    <div>
      <button
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <span>{count}</span>
      <button
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <input
        value={incrementAmount}
        type="number"
        onChange={e => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
        Add Amount
      </button>
      <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
        Add Async
      </button>
    </div>
  )
}

export default Counter