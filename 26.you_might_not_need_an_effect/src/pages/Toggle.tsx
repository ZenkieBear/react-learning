import { useEffect, useState } from "react";

// You might also be able to remove the state altogether, and instead receive `isOn` from the parent component.
// export default function Toggle({ isOn, onChange }: ToggleProps) {
export default function Toggle({ onChange }: ToggleProps) {
  const [isOn, setIsOn] = useState(false);

  // 🔴 Avoid: The onChange handler runs too late
//   useEffect(() => {
//     onChange(isOn);
//   }, [isOn, onChange]);

  useEffect(() => {
    onChange(isOn);
  }, [isOn, onChange]);

  function updateToggle(nextIsOn: boolean) {
    // ✅ Good: Perform all updates during the event that caused them
    setIsOn(nextIsOn);
    onChange(nextIsOn);
  }

  function handleClick() {
    // setIsOn(!isOn);
    updateToggle(!isOn);
  }
  

  return (
    <>
      {/*  */}
    </>
  )
}
