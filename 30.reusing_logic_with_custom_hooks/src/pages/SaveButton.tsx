import { useEffect, useState } from "react";
import { useOnlineStatus } from "./onOnlineStatus";

export default function SaveButton() {
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
  // }, []);

  function handleSaveClick() {
    console.log('✅ Progress saved!');
    
  }

  const isOnline = useOnlineStatus();
  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  )
}