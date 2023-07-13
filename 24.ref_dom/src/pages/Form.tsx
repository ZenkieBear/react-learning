import { ForwardedRef, forwardRef, LegacyRef, RefObject, useImperativeHandle, useRef } from "react"

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  )
}

// function MyInput(props: any) {
//   return <input {...props} />
// }
const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current?.focus();
    }
  }));
  return <input {...props} ref={realInputRef} />
})

export function MyForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
    // This will make mistake, because there're only focus() function provided.
    // inputRef.current?.click();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  )
}
