import { useEffect, useState } from "react";
import { createConnection } from './chat';

const serverUrl = 'https://localhost:1234';
const roomId = 'general';

// function ChatRoom({ roomId }: ChatRoomProps) {
function ChatRoom() {
  // const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
    // ↓ By including `serverUrl` as a dependency, you ensure that the Effect re-synchronizes after it changes.
  // }, [roomId, serverUrl]);
    /* the empty [] dependency array means this Effect connects to the chat room only when the component mounts,
     and disconnects only when the component unmounts. 
     ↓ */
  }, []);

  return (
    <>
      <label>
        Server URL: {' '}
        {/* <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        /> */}
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default function Chat() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
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
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  )
}