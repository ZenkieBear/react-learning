import { useEffect } from "react";
import { createConnection } from "./chat";
import { showNotification } from "./notification";

export function useChatRoom({ serverUrl, roomId, onReceiveMessage }: UseChatRoomProps) {
  useEffect(() => {
    const options = {
      serverUrl,
      roomId
    }
    const connection = createConnection(options);
    connection.connect();
    // connection.on('message', (msg: string) => {
    //   showNotification(`New message: ${msg}`);
    // });
    connection.on('message', (msg: string) => onReceiveMessage(msg));

    return () => connection.disconnect();
    /*
     * Adding a dependency on onReceiveMessage is not ideal because it will cause the chat to
     * re-connect every time the component re-renders.↓
     */
  }, [roomId, serverUrl, onReceiveMessage]);
}