import { useEffect, useRef, useState } from "react"
import { useDelayedValue, usePointerPosition } from "../hooks"

export default function DelayedPoints() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y }= usePointerPosition();
  const current = ref.current;
  const pos1 = { x, y };
  if (current) {
    pos1.x -= current.offsetLeft,
    pos1.y -= current.offsetTop - current.style.border.length
  }
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 100);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos4, 100);
  
  return (
    <div className="delayed-points" ref={ref}>
      <Dot position={pos1} opacity={1}/>
      <Dot position={pos2} opacity={.8}/>
      <Dot position={pos3} opacity={.6}/>
      <Dot position={pos4} opacity={.4}/>
      <Dot position={pos5} opacity={.2}/>
      Move your mouse hover this block
    </div>
  )
}

function Dot({ position, opacity }: DotProps) {
  return (
    <div className="dot"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: opacity
      }}></div>
  )
}
