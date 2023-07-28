import { useEffect, useState } from "react"
import { useOnlineStatus } from "./onOnlineStatus"

export default function StatusBar() {
  // const [isOnline, setIsOnline] = useState(true);

  // useEffect(() => {
  //   function handleOnline() {
  //     setIsOnline(true);
  //   }
  //   function handleOffline() {
  //     setIsOnline(false);
  //   }
  //   window.addEventListener('online', handleOnline);
  //   window.addEventListener('offline', handleOffline);

  //   return () => {
  //     window.removeEventListener('online', handleOnline);
  //     window.removeEventListener('offline', handleOffline);
  //   }
  // }, [])
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
}