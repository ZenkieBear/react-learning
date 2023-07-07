import { ReactNode } from "react"
import Demo from "./Demo"
import Demo1 from "./Demo1"
import Demo2 from "./Demo2"
import Demo3 from "./Demo3"
import Scoreboard from "./Demo4"
import Demo5 from "./Demo5"
import Messenger from "./Demo6"

export default function App() {
  return (
    <div>
      <Item title="State is tied to position in the tree">
        <div className="clear">
          <Demo />
        </div>
        <h2>Notice how the moment you stop rendering the second counter, its state disappears completely. </h2>
        <Demo1 />
      </Item>
      <Item title="Same component at the same position preserves state">
        <Demo2 />
      </Item>
      <Item title="Different components at the same position reset state">
        <Demo3 />
      </Item>
      <Item title="Resetting state at the same position">
        <h2>Option 1: Rendering a component in different positions</h2>
        <div className="clear">
          <Scoreboard />
        </div>
        <h2>Option 2: Resetting state with a key</h2>
        <div className="clear">
          <Demo5 />
        </div>
        <h2>Resetting a form with a key</h2>
        <Messenger />
      </Item>
    </div>
    )
}

function Item({title, children}: {
  title: string,
  children: ReactNode
}) {
  return (
    <div className='item clear'>
        <h1>{title}</h1>
        {children}
    </div>
  )
}