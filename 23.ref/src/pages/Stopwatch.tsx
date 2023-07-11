import { useRef, useState } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState<number|null>(null);
  const [now, setNow] = useState<number|null>(null);
  // Since the interval ID is not used for rendering, you can keep it in a ref:
  const intervalRef = useRef<number|undefined>(undefined);

  function handleStart() {
    // Start counting.
    setStartTime(Date.now());
    setNow(Date.now());

    // setInterval(() => {
    intervalRef.current = window.setInterval(() => {
      // Update the current time every 10ms.
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondPassed = 0;
  if (startTime != null && now != null) {
    secondPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  )
}