import { ReactNode } from "react";
import FeedbackForm from "./FeedbackForm";
import Form from "./Form";
import Menu from "./Menu";
import MovingDot from "./MovingDot";
import TravelPlan from "./TravelPlan";

export default function App() {
  return (
    <>
      <Item title="Group related state">
        <MovingDot />
      </Item>

      <Item title="Avoid contradications in state">
        <FeedbackForm />
      </Item>

      <Item title="Avoid redundant state">
        <Form />
      </Item>

      <Item title="Avoid duplication in state">
        <Menu />
      </Item>
      
      <Item title="Avoid deeply nested state">
        <TravelPlan />
      </Item>
    </>
    )
}
function Item({title, children}: {
  title: string,
  children: ReactNode
}) {
  return (
    <div style={{
        borderBottom: '1px dashed black',
        paddingBottom: 5
      }}>
        <h1>{title}</h1>
        {children}
    </div>
  )
}