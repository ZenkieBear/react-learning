import { useState } from "react";

export function Counter({ isFancy = false, person }: CounterProps) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) className += ' hover';
  if (isFancy) className += ' fancy';

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <h1>
        {person && <>{person}'s Score: </>}
        {score}
      </h1>
      <button onClick={() => setScore(score + 1)}>
        Plus 1
      </button>
    </div>
  )
}
  