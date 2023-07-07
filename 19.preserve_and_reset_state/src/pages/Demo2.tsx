import { useState } from "react";
import { Counter } from "./Counter";

export default function Demo2() {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div>
      {isFancy ? (
        <Counter isFancy={true} />
      ) : (
        <Counter isFancy={false} />
      )}
      <label>
        <input
          type='checkbox'
          checked={isFancy}
          onChange={e => setIsFancy(e.target.checked)}
        />
        Use fancy styling
      </label>
    </div>
  )
}