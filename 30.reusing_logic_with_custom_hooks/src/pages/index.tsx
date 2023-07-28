import { useState } from "react";
import ChatRoom from "./ChatRoom";
import SaveButton from "./SaveButton";
import StatusBar from "./StatusBar";
import WelcomePage from "./Welcome";

export default function App() {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <StatusBar />
      <SaveButton />

      <hr />
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>

      <hr />
      <ChatRoom roomId={roomId}/>

      <hr />
      <WelcomePage />
    </>
  );
}