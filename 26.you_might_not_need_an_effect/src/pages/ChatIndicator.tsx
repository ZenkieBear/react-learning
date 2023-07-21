import { useEffect, useState, useSyncExternalStore } from "react";

function subscribe(callback: EventListener) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);

  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  }
}

export function useOnlineStatus() {
  // Not ideal: Manual store subscription in an Effect
  // const [isOnline, setIsOnline] = useState(true);
  // useEffect(() => {
  //   function updateState() {
  //     setIsOnline(navigator.onLine);
  //   }

  //   updateState();
  //   return subscribe(updateState);
  // }, []);
  // return isOnline;

   // ✅ Good: Subscribing to an external store with a built-in Hook
  return useSyncExternalStore(
    subscribe, // React won’t resubscribe for as long as you pass the same function
    () => navigator.onLine, // How to get the value on the client
    () => true // How to get the value one the server
  );
}

export default function ChatIndicator() {
  const isOnline = useOnlineStatus();
  // ...
  return (
    <>
      Try to disconnect/connect to network! {isOnline ? '🟢' : '🔴'}
    </>
  )
}