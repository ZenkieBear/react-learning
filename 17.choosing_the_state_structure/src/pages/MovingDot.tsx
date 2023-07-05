import { useState } from "react";

export default function MoveDot() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // If some two state variables always change together, it might be a good idea to unify them into a single state variable.
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <>
      <div
        onPointerMove={e => {
          setPosition({
            x: e.clientX,
            y: e.clientY
          })
        }}
        style={{
            width: '300px',
            height: '200px',
            position: 'relative',
            overflow: "hidden"
        }}>
        <div
          className="dot"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }} />
      </div>
    </>
  )
}