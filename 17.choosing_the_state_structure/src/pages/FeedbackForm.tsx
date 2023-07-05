import { FormEventHandler, useState } from 'react';

export default function FeedbackForm() {
  const [text, setText] = useState('');
//   const [isSending, setIsSending] = useState(false);
//   const [isSent, setIsSent] = useState(false);
  /*
   * Since isSending and isSent should never be true at the same time, it is better to replace them with
   * one status state variable that may take one of three valid states: 'typing' (initial), 'sending', and 'sent':
   */
  const [status, setStatus] = useState<'typing'|'sending'|'sent'>('typing');

  let handleSubmit: FormEventHandler<HTMLFormElement> = async function (e) {
    e.preventDefault();
    // setIsSending(true);
    setStatus('sending');
    await sendMessage(text);
    // setIsSending(false);
    // setIsSent(true);
    setStatus('sent');
  }

  let isSending = status === 'sending';
  let isSent = status === 'sent';

  if (isSent) {
    return <h1>Thanks for feedback!</h1>
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Simulate sending a message
function sendMessage(text: string) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}
