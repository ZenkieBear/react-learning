import Chat from "./ChatRoom";
import Example from "./Example";

export default function Home() {

  return (
    <>
      <Example title="How React verifies that your Effect can re-synchronize">
        <Chat />
      </Example>
    </>
  )
}