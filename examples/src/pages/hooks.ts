import { useEffect, useState } from "react";

/**
 * This hook return some value after a delayed time.
 * @param value The value will be return.
 * @param delay How long (milliseconds) after return the delayed-value.
 * @returns The value delayed.
 */
export function useDelayedValue<T extends any>(value: T, delay: number) {
  const [delayedValue, setDelayedValue] = useState<T>(value);

  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(value);
    }, delay);
  }, [value, delay]);

  return delayedValue;
}

/**
 * This hook returns the position of user pointer’s position
 * @returns {Position} A Position object
 */
export function usePointerPosition() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e: PointerEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return position;
}
