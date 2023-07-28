import { useState } from 'react';
import { showNotification } from './notification';
import { useChatRoom } from './useChatRoom';

export default function ChatRoom({ roomId }: ChatRoomProps) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl,
    onReceiveMessage(msg: string) {
      showNotification(`New message: ${msg}`);
    }
  });

  return (
    <>
      <label>
        Server URL:
        <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}
