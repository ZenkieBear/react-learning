import { useState } from "react";
import { Counter } from "./Counter";

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div>
      <div className="clear">
        {isPlayerA &&
          <Counter person='Taylor'/>}
        {!isPlayerA &&
          <Counter person='Zenkie'/>}
      </div>
      <button onClick={() => setIsPlayerA(!isPlayerA)}>
        Next player!
      </button>
    </div>
  )
}