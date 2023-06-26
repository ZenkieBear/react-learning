import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        // It's a way to tell React to "do something with the state value" instead of just replacing it.
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+ 3</button>
      <button onClick={() => {
        setNumber(number + 5); // React adds "replace with 5" to its queue.
        setNumber(n => n + 1); // React adds a updater function to its queue.
        setNumber(42); // React adds "replace with 42" to its queue.
        /**
         * Process:
         * queue update     n         returns
         * replace with 5   0(unused) 5
         * n => n + 1       5         5 + 1 = 6
         * replace with 42  6(unused) 42
         */
      }}>Increase the number</button>
    </>
  )
}