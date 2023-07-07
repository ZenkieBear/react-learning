import { useState } from "react";
import { Counter } from "./Counter";

export default function Demo() {
  const counter = <Counter />
  
  // These are two separate counters because each is rendered at its own position in the tree. 
  return (
    <div>
      {/* {counter}
      {counter} */}
      <Counter />
      <Counter />
    </div>
  )
}
