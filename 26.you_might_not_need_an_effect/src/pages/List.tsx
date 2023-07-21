import { useEffect, useState } from "react";

export default function List({ items }: ListProps) {
  const [isReverse, setIsReverse] = useState(false);
//   const [selection, setSelection] = useState(null);
  const [selectedId, setSelectionId] = useState(null);

  // 🔴 Avoid: Adjusting state on prop change in an Effect
//   useEffect(() => {
//     setSelection(null);
//   }, [items]);

  // Better: Adjust the state while rendering
//   const [prevItem, setPrevItem] = useState(items);
//   if (items !== prevItem) {
//     setPrevItem(items);
//     setSelection(null);
//   }

  // ✅ Best: Calculate everything during rendering
  const selection = items.find(item => item.id === selectedId) ?? null;
  // ...

  return (
    <>
      {/* ... */}
    </>
  )
}