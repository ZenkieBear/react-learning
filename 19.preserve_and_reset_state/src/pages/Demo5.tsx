import { useState } from "react";
import { Counter } from "./Counter";

export default function () {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div>
      {isPlayerA ? <Counter key='taylor' person="Taylor" /> : (
        <Counter key='zenkie' person="Zenkie" />
      )}
      <button onClick={() => setIsPlayerA(!isPlayerA)}>
        Next player!
      </button>
    </div>
  )
}