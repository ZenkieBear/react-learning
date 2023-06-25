import { useState } from "react";

/**
 * In this example, `number` only increments once per tick!
 * @returns 
 */
// export default function Counter() {
function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+ 3</button>
    </>
  )
}

/**
 * The state stored in React may have changed by the time the alert runs, but it was sheduled using a snapshot of the state
 * at the time the user interacted with it.
 * 
 * A state variable's value never changes within a render.
 * @returns 
 */
// export default function Counter1() {
function Counter1() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number)
        }, 3000);
      }}>+ 5</button>
    </>
  )
}

export default function Form() {
  const [to, setTo] = useState('Zenkie Bear');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e: Event) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To: {' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value='Zenkie Bear'>Zenkie Bear</option>
          <option value='Bob'>Bob</option>
        </select>
      </label>
      <textarea 
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  )
}
