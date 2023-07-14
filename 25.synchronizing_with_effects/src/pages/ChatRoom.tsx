import { useEffect } from "react"
import { createConnection } from "./chat";

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    /**
     * Seeing the "✅ Connecting..." log twice helps you notice the real issue:
     * your code doesn’t close the connection when the component unmounts.
     * To fix the issue, return a cleanup function from your Effect:
     */
    return () => connection.disconnect();
  }, []); // This tells React to only run this code when the component “mounts”.
  return <h1>Welcome to the chat!</h1>
}