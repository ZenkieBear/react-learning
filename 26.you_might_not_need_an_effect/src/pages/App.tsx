import { useEffect } from "react"

// Add a top-level variable to track whether it has already executed
let didInit = false;

 // You can also run it during module initialization and before the app renders
if (typeof window !== 'undefined') {
    // ✅ Only runs once per app load
    loadDataFromLocalStorage();
    checkAuthToken();
}

export default function App() {
  // 🔴 Avoid: Effects with logic that should only ever run once
//   useEffect(() => {
//     loadDataFromLocalStorage();
//     checkAuthToken();
//   }, []);
  useEffect(() => {
    if (!didInit) {
      // ✅ Only runs once per app load
      loadDataFromLocalStorage();
      checkAuthToken();
    }
    
  }, []);

  return (
    <>
      {/*  */}
    </>
  )
}

async function loadDataFromLocalStorage() {
  const item = localStorage.getItem('something');
  // ...
}
async function  checkAuthToken() {
  // ...
}
