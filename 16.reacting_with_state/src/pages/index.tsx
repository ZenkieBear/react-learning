import { resolve } from "node:path/win32";
import { ChangeEvent, ChangeEventHandler, FormEventHandler, useState } from "react";
// import Form from "./Form"

// Step 1: Identify your component's different visual states
let statuses = [
  'empty',
  'typing',
  'submitting',
  'success',
  'error'
];
// Step 2: Determine what triggers those state changes.
// Lookup: status.drawio
export default function App() {
  return (
    <>
      {/* {
        // This is a living styleguide(storybook)
        statuses.map(status => (
          <section key={status}>
            <h4>Form ({status})</h4>
            <Form status={status} />
          </section>
        ))
      } */}
      <Form />
    </>
  )
}

function Form() {
  // Step 3: Represent the state in memory with `useState`
  // Step 4: Remove any non-essential state variables
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState<null|string>(null);
  // Start with the state that absolutely must be there.
  // const [isEmpty, setIsEmpty] = useState(true); // => answer.length === 0
  // const [isTyping, setIsTyping] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  const [status, setStatus] = useState<'typing'|'submitting'|'success'>('typing');
  // const [isError, setIsError] = useState(false); // => error !== null

  // Now you've clean redundant state variables.

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  // Step 5: Connect the event handlers to set state
  const handleTextareaChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    setAnswer(e.target.value);
  }
  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError((err as Error).message);
    }
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleTextareaChange}
          disabled={
          status === 'submitting'
        }/>
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="error">
              Good guess bu a wrong answer. Try again!
          </p>
        }
      </form>
    </>
  )
}

async function submitForm(answer: string): Promise<void> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (answer === 'lima') {
        res();
      } else {
        rej(new Error('Good guess bug a wrong answer. Try again!'))
      }
    }, 1500);
  })
}